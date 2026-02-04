/* =================================================================
   LEXICORE V3.0 - ENGINE
   Haptics | Dynamic Atmosphere | Persistent State
   ================================================================= */

const SYSTEM = {
    version: '3.0',
    startDate: new Date('2026-02-02T00:00:00'),
    dictionary: [],
    
    // État du Jeu (Sauvegardé)
    todayId: 0,
    targetWord: '', 
    guesses: [],
    gameState: 'PLAYING', // PLAYING, WON

    // Paramètres
    settings: {
        audio: true,
        haptic: true,
        perfMode: false,
        theme: 'auto'
    },
    
    stats: {
        played: 0,
        wins: 0,
        streak: 0
    }
};

/* --- 1. AUDIO ENGINE --- */
class AudioSynth {
    constructor() {
        this.ctx = null;
    }

    unlock() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    play(type) {
        if (!SYSTEM.settings.audio) return;
        if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();

        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        switch (type) {
            case 'click':
                osc.type = 'sine';
                osc.frequency.setValueAtTime(600, t);
                osc.frequency.exponentialRampToValueAtTime(100, t + 0.1);
                gain.gain.setValueAtTime(0.05, t);
                gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
                osc.start(t);
                osc.stop(t + 0.1);
                break;
            case 'error':
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(150, t);
                osc.frequency.linearRampToValueAtTime(100, t + 0.2);
                gain.gain.setValueAtTime(0.1, t);
                gain.gain.linearRampToValueAtTime(0.001, t + 0.2);
                osc.start(t);
                osc.stop(t + 0.2);
                break;
            case 'win':
                osc.type = 'sine';
                gain.gain.value = 0.1;
                osc.frequency.setValueAtTime(440, t); 
                osc.frequency.setValueAtTime(554, t + 0.15); 
                osc.frequency.setValueAtTime(659, t + 0.3); 
                gain.gain.exponentialRampToValueAtTime(0.001, t + 1.5);
                osc.start(t);
                osc.stop(t + 1.5);
                break;
        }
    }
}
const AUDIO = new AudioSynth();

/* --- 2. HAPTIC ENGINE (V3) --- */
const HAPTIC = {
    trigger(type) {
        if (!SYSTEM.settings.haptic || !navigator.vibrate) return;

        switch (type) {
            case 'input':
                navigator.vibrate(10); // Micro-clic
                break;
            case 'error':
                navigator.vibrate(300); // Lourd
                break;
            case 'success':
                navigator.vibrate([100, 50, 100]); // Victoire
                break;
        }
    }
};

/* --- 3. DOM ELEMENTS --- */
const DOM = {
    views: document.querySelectorAll('.view'),
    navBtns: document.querySelectorAll('.nav-btn'),
    form: document.getElementById('guess-form'),
    input: document.getElementById('guess-input'),
    autoList: document.getElementById('autocomplete-list'),
    
    // Feedback
    card: document.getElementById('feedback-card'),
    fWord: document.getElementById('feedback-word'),
    fTemp: document.getElementById('feedback-temp'),
    fBar: document.getElementById('temp-bar'),
    fIcon: document.getElementById('temp-icon'),
    ambience: document.getElementById('ambience-display'),
    nebula: document.querySelector('.nebula-glow'),
    
    // Logs
    miniLogs: document.getElementById('mini-logs'),
    fullLogs: document.getElementById('full-history-list'),
    
    // System
    winModal: document.getElementById('victory-modal'),
    closeWin: document.getElementById('close-victory'),
    toggles: {
        audio: document.getElementById('setting-audio'),
        haptic: document.getElementById('setting-haptic'),
        perf: document.getElementById('setting-perf')
    },
    themeBtns: document.querySelectorAll('.theme-btn'),
    resetBtn: document.getElementById('btn-reset'),
    
    // Stats
    sAttempts: document.getElementById('stat-attempts'),
    sWins: document.getElementById('stat-wins'),
    sStreak: document.getElementById('stat-streak'),
    dayBadge: document.getElementById('day-badge')
};

/* --- 4. INIT & PERSISTENCE --- */
async function initSystem() {
    loadGlobalSettings();
    setupThemeListener();
    applySettings();
    setupNavigation();
    
    // Audio Unlock
    const unlockFn = () => { AUDIO.unlock(); };
    window.addEventListener('click', unlockFn, { once: true });
    window.addEventListener('touchstart', unlockFn, { once: true });

    // Calcul ID Jour
    const now = new Date();
    const diffTime = now.getTime() - SYSTEM.startDate.getTime();
    SYSTEM.todayId = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    DOM.dayBadge.textContent = `SESSION #${SYSTEM.todayId}`;
    
    try {
        const res = await fetch('dictionary.json');
        SYSTEM.dictionary = await res.json();
        startDailyGame();
    } catch (e) {
        console.error("Dict Error", e);
        DOM.ambience.textContent = "ERREUR DE CHARGEMENT";
    }
}

function startDailyGame() {
    // Seed pour mot du jour
    const index = (SYSTEM.todayId * 1337) % SYSTEM.dictionary.length;
    SYSTEM.targetWord = SYSTEM.dictionary[index];
    
    // Restauration État
    const saveKey = `lexicore_v3_state_${SYSTEM.todayId}`;
    const savedState = localStorage.getItem(saveKey);
    
    if (savedState) {
        const data = JSON.parse(savedState);
        SYSTEM.guesses = data.guesses || [];
        SYSTEM.gameState = data.state || 'PLAYING';
        
        // Reconstruction UI
        SYSTEM.guesses.forEach(g => addLogUI(g));
        updateStatsUI();
        
        // Dernier feedback & Ambiance
        if (SYSTEM.guesses.length > 0) {
            const lastGuess = SYSTEM.guesses[SYSTEM.guesses.length - 1];
            renderFeedback(lastGuess);
            updateAmbientGlow(lastGuess.temp); // Restaurer la couleur du fond
        }
        
        if (SYSTEM.gameState === 'WON') {
            triggerVictory(false);
        }
    }
}

function saveGameState() {
    const saveKey = `lexicore_v3_state_${SYSTEM.todayId}`;
    const data = {
        guesses: SYSTEM.guesses,
        state: SYSTEM.gameState
    };
    localStorage.setItem(saveKey, JSON.stringify(data));
}

function loadGlobalSettings() {
    const sSettings = localStorage.getItem('lexicore_v3_settings');
    if (sSettings) SYSTEM.settings = JSON.parse(sSettings);
    
    const sStats = localStorage.getItem('lexicore_v3_stats');
    if (sStats) SYSTEM.stats = JSON.parse(sStats);
}

/* --- 5. GAME LOGIC --- */
function normalize(str) {
    if (!str) return "";
    let clean = str.toLowerCase().trim();
    clean = clean.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    clean = clean.replace(/[^a-z]/g, "");
    return clean.toUpperCase();
}

function getTemperature(guess, target) {
    if (guess === target) return 100;
    const m = guess.length, n = target.length;
    const d = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const cost = guess[i - 1] === target[j - 1] ? 0 : 1;
            d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
        }
    }
    const dist = d[m][n];
    const maxLen = Math.max(m, n);
    let percent = Math.max(0, 100 - (dist / maxLen * 100));
    return parseFloat(percent.toFixed(2));
}

function handleGuess(e) {
    e.preventDefault();
    if (SYSTEM.gameState === 'WON') return;

    let word = normalize(DOM.input.value);

    // Pluriel simple
    if (word.length > 2 && !SYSTEM.dictionary.includes(word) && word.endsWith('S')) {
        let singular = word.slice(0, -1);
        if (SYSTEM.dictionary.includes(singular)) word = singular;
    }

    // Validation
    if (word.length < 2 || !SYSTEM.dictionary.includes(word)) {
        triggerShake();
        AUDIO.play('error');
        HAPTIC.trigger('error');
        DOM.ambience.textContent = "ERREUR : MOT INCONNU";
        DOM.ambience.style.color = "#ff4757";
        setTimeout(() => DOM.ambience.style.color = "var(--text-secondary)", 1500);
        return;
    }

    if (SYSTEM.guesses.some(g => g.word === word)) {
        triggerShake();
        HAPTIC.trigger('error');
        DOM.input.value = '';
        DOM.ambience.textContent = "ERREUR : DÉJÀ ANALYSÉ";
        return;
    }

    // Succès Input
    HAPTIC.trigger('input'); 

    const temp = getTemperature(word, SYSTEM.targetWord);
    const guessData = { word, temp, time: Date.now() };

    SYSTEM.guesses.push(guessData);
    
    // Mises à jour
    addLogUI(guessData);
    renderFeedback(guessData);
    updateAmbientGlow(temp); // Change le fond
    DOM.input.value = '';
    closeAutocomplete();
    
    if (temp === 100) {
        SYSTEM.gameState = 'WON';
        updateGlobalStats(true);
        triggerVictory(true);
    } else {
        AUDIO.play('click');
    }
    
    saveGameState();
    updateStatsUI();
}

/* --- 6. VISUAL FEEDBACK & ATMOSPHERE --- */

function getFeedbackData(temp) {
    if (temp === 100) return { color: 'var(--temp-win)', icon: '💎', label: 'CRITIQUE' };
    if (temp >= 80) return { color: 'var(--temp-hot)', icon: '🌋', label: 'BRÛLANT' };
    if (temp >= 60) return { color: 'var(--temp-warm)', icon: '🔥', label: 'CHAUD' };
    if (temp >= 40) return { color: 'var(--temp-neutral)', icon: '☁️', label: 'NEUTRE' };
    if (temp >= 20) return { color: 'var(--temp-cold)', icon: '❄️', label: 'FROID' };
    return { color: 'var(--temp-glacial)', icon: '🧊', label: 'GLACIAL' };
}

// Messages d'ambiance type Terminal
const MESSAGES = {
    cold: ["Divergence totale.", "Aucune corrélation.", "Signal perdu.", "Secteur vide."],
    neutral: ["Alignement partiel.", "Données floues.", "Poursuivre analyse.", "Écho détecté."],
    warm: ["Convergence en cours.", "Signal thermique.", "Proximité détectée.", "Cible proche."],
    hot: ["IMPACT IMMINENT.", "CONFIRMATION VISUELLE.", "SECTEUR CRITIQUE.", "HAUTE TEMPÉRATURE."]
};

function getAmbienceText(temp) {
    if (temp === 100) return "SÉQUENCE VALIDÉE - SYSTÈME DÉVERROUILLÉ";
    let pool = MESSAGES.cold;
    if (temp >= 80) pool = MESSAGES.hot;
    else if (temp >= 50) pool = MESSAGES.warm;
    else if (temp >= 25) pool = MESSAGES.neutral;
    
    return pool[Math.floor(Math.random() * pool.length)];
}

// Mise à jour de la couleur du fond (Nebula)
function updateAmbientGlow(temp) {
    let color = '#4a69bd'; // Default Blue
    if (temp < 30) color = '#74b9ff'; // Ice
    else if (temp < 50) color = '#81ecec'; // Cyan
    else if (temp < 70) color = '#fab1a0'; // Warm
    else if (temp < 90) color = '#ff7675'; // Hot
    else color = '#e17055'; // Burning

    document.documentElement.style.setProperty('--glow-color', color);
}

function renderFeedback(data) {
    DOM.card.classList.remove('hidden');
    const style = getFeedbackData(data.temp);
    
    DOM.fWord.textContent = data.word;
    DOM.fTemp.textContent = data.temp + "%";
    DOM.fBar.style.width = data.temp + "%";
    DOM.fBar.style.backgroundColor = style.color;
    DOM.fIcon.textContent = style.icon;
    DOM.card.style.borderColor = style.color;
    DOM.fTemp.style.color = style.color;

    // Mise à jour texte ambiance
    DOM.ambience.textContent = getAmbienceText(data.temp);
    DOM.ambience.style.color = (data.temp >= 70) ? style.color : 'var(--text-secondary)';
}

function addLogUI(data) {
    const style = getFeedbackData(data.temp);
    const li = document.createElement('li');
    li.className = 'log-item';
    li.style.borderLeftColor = style.color;
    
    li.innerHTML = `
        <div class="log-left">
            <span class="log-word">${data.word}</span>
            <span class="log-badge" style="color:${style.color}; border:1px solid ${style.color}">${style.label}</span>
        </div>
        <span style="font-weight:bold; color:${style.color}">${data.temp}°</span>
    `;
    
    DOM.fullLogs.prepend(li.cloneNode(true));
    
    const miniLi = document.createElement('li');
    miniLi.className = 'log-item';
    miniLi.style.borderLeftColor = style.color;
    miniLi.innerHTML = `<span>${data.word}</span> <span style="font-weight:bold; color:${style.color}">${data.temp}°</span>`;
    
    DOM.miniLogs.prepend(miniLi);
    if (DOM.miniLogs.children.length > 3) DOM.miniLogs.lastChild.remove();
}

function triggerShake() {
    DOM.form.classList.remove('shake');
    void DOM.form.offsetWidth;
    DOM.form.classList.add('shake');
}

function triggerVictory(playSound) {
    if (playSound) {
        AUDIO.play('win');
        HAPTIC.trigger('success'); // Double vibration courte
    }
    
    document.getElementById('victory-word').textContent = SYSTEM.targetWord;
    DOM.input.disabled = true;
    DOM.input.placeholder = "SESSION TERMINÉE";
    
    setTimeout(() => {
        DOM.winModal.classList.remove('hidden');
    }, 800);
}

/* --- 7. UTILS & SETTINGS --- */
function setupNavigation() {
    DOM.navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            HAPTIC.trigger('input');
            const targetId = btn.dataset.target;
            
            DOM.navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            DOM.views.forEach(v => v.classList.remove('active'));
            document.getElementById(targetId).classList.add('active');
        });
    });

    DOM.form.addEventListener('submit', handleGuess);
    DOM.input.addEventListener('input', handleAutocomplete);
    
    // Toggles
    DOM.toggles.audio.addEventListener('change', e => { SYSTEM.settings.audio = e.target.checked; saveSettings(); });
    DOM.toggles.haptic.addEventListener('change', e => { 
        SYSTEM.settings.haptic = e.target.checked; 
        saveSettings(); 
        if(e.target.checked) HAPTIC.trigger('input');
    });
    DOM.toggles.perf.addEventListener('change', e => {
        SYSTEM.settings.perfMode = e.target.checked;
        applySettings();
        saveSettings();
    });

    DOM.themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            SYSTEM.settings.theme = btn.dataset.theme;
            applySettings();
            saveSettings();
        });
    });

    DOM.resetBtn.addEventListener('click', () => {
        if(confirm("Réinitialisation complète ?")) {
            localStorage.clear();
            location.reload();
        }
    });
    DOM.closeWin.addEventListener('click', () => DOM.winModal.classList.add('hidden'));
}

function setupThemeListener() {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
        if (SYSTEM.settings.theme === 'auto') applyTheme('auto');
    });
}

function applySettings() {
    DOM.toggles.audio.checked = SYSTEM.settings.audio;
    DOM.toggles.haptic.checked = SYSTEM.settings.haptic;
    DOM.toggles.perf.checked = SYSTEM.settings.perfMode;
    DOM.themeBtns.forEach(b => b.classList.toggle('active', b.dataset.theme === SYSTEM.settings.theme));
    document.body.classList.toggle('perf-mode', SYSTEM.settings.perfMode);
    applyTheme(SYSTEM.settings.theme);
}

function applyTheme(mode) {
    document.body.classList.remove('light-theme');
    if (mode === 'light') document.body.classList.add('light-theme');
    else if (mode === 'auto' && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.body.classList.add('light-theme');
    }
}

function saveSettings() {
    localStorage.setItem('lexicore_v3_settings', JSON.stringify(SYSTEM.settings));
}

function updateGlobalStats(win) {
    if (win) { SYSTEM.stats.wins++; SYSTEM.stats.streak++; } 
    else { SYSTEM.stats.streak = 0; }
    SYSTEM.stats.played++;
    localStorage.setItem('lexicore_v3_stats', JSON.stringify(SYSTEM.stats));
    updateStatsUI();
}

function updateStatsUI() {
    DOM.sAttempts.textContent = SYSTEM.guesses.length;
    DOM.sWins.textContent = SYSTEM.stats.wins;
    DOM.sStreak.textContent = SYSTEM.stats.streak;
}

// Autocomplete
function handleAutocomplete(e) {
    const val = normalize(e.target.value);
    DOM.autoList.innerHTML = '';
    DOM.autoList.classList.add('hidden');
    if (val.length < 2) return;
    const matches = SYSTEM.dictionary.filter(w => w.startsWith(val)).slice(0, 4);
    if (matches.length > 0) {
        DOM.autoList.classList.remove('hidden');
        matches.forEach(m => {
            const div = document.createElement('div');
            div.className = 'autocomplete-item';
            div.innerHTML = `<strong>${val}</strong>${m.substring(val.length)}`;
            div.onclick = () => {
                DOM.input.value = m;
                DOM.autoList.classList.add('hidden');
                DOM.input.focus();
            };
            DOM.autoList.appendChild(div);
        });
    }
}
function closeAutocomplete() { DOM.autoList.classList.add('hidden'); }

window.addEventListener('load', initSystem);