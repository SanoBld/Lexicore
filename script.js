/* =================================================================
   LEXICORE V2.2 - CORE ENGINE
   Persistence Totale | Feedback Dynamique | Badges
   ================================================================= */

const SYSTEM = {
    version: '2.2',
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
        streak: 0,
        distribution: {}
    }
};

/* --- 1. AUDIO ENGINE --- */
class AudioSynth {
    constructor() {
        this.ctx = null;
        this.unlocked = false;
    }

    unlock() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume().then(() => { this.unlocked = true; });
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
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(800, t);
                osc.frequency.exponentialRampToValueAtTime(300, t + 0.05);
                gain.gain.setValueAtTime(0.05, t);
                gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
                osc.start(t);
                osc.stop(t + 0.05);
                break;
            case 'error':
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(120, t);
                osc.frequency.linearRampToValueAtTime(80, t + 0.2);
                gain.gain.setValueAtTime(0.1, t);
                gain.gain.linearRampToValueAtTime(0.001, t + 0.2);
                osc.start(t);
                osc.stop(t + 0.2);
                break;
            case 'win':
                osc.type = 'square';
                gain.gain.value = 0.05;
                osc.frequency.setValueAtTime(440, t); 
                osc.frequency.setValueAtTime(554, t + 0.1); 
                osc.frequency.setValueAtTime(659, t + 0.2); 
                osc.frequency.setValueAtTime(880, t + 0.4); 
                gain.gain.exponentialRampToValueAtTime(0.001, t + 0.8);
                osc.start(t);
                osc.stop(t + 0.8);
                break;
        }
    }
}
const AUDIO = new AudioSynth();

/* --- 2. DOM ELEMENTS --- */
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
    
    // Logs
    miniLogs: document.getElementById('mini-logs'),
    fullLogs: document.getElementById('full-history-list'),
    
    // System
    winModal: document.getElementById('victory-modal'),
    closeWin: document.getElementById('close-victory'),
    toggles: {
        audio: document.getElementById('setting-audio'),
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

/* --- 3. INIT & PERSISTENCE --- */
async function initSystem() {
    loadGlobalSettings();
    setupThemeListener();
    applySettings();
    setupNavigation();
    
    // Audio Unlock Logic
    const unlockFn = () => { AUDIO.unlock(); };
    window.addEventListener('click', unlockFn, { once: true });
    window.addEventListener('touchstart', unlockFn, { once: true });

    // Calcul ID du jour
    const now = new Date();
    const diffTime = now.getTime() - SYSTEM.startDate.getTime();
    SYSTEM.todayId = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    DOM.dayBadge.textContent = `JOUR #${SYSTEM.todayId}`;
    
    try {
        const res = await fetch('dictionary.json');
        SYSTEM.dictionary = await res.json();
        startDailyGame();
    } catch (e) {
        console.error("Dict Error", e);
        DOM.ambience.textContent = "ERREUR SYSTÈME";
    }
}

function startDailyGame() {
    // Mot cible déterminé par seed
    const index = (SYSTEM.todayId * 1337) % SYSTEM.dictionary.length;
    SYSTEM.targetWord = SYSTEM.dictionary[index];
    
    // Restauration de l'état
    const saveKey = `lexicore_state_v2_${SYSTEM.todayId}`;
    const savedState = localStorage.getItem(saveKey);
    
    if (savedState) {
        const data = JSON.parse(savedState);
        SYSTEM.guesses = data.guesses || [];
        SYSTEM.gameState = data.state || 'PLAYING';
        
        // Reconstruire l'interface
        SYSTEM.guesses.forEach(g => addLogUI(g));
        updateStatsUI();
        
        // Si des coups existent, afficher le dernier feedback
        if (SYSTEM.guesses.length > 0) {
            renderFeedback(SYSTEM.guesses[SYSTEM.guesses.length - 1]);
        }
        
        if (SYSTEM.gameState === 'WON') {
            triggerVictory(false);
        }
    }
}

function saveGameState() {
    const saveKey = `lexicore_state_v2_${SYSTEM.todayId}`;
    const data = {
        guesses: SYSTEM.guesses,
        state: SYSTEM.gameState
    };
    localStorage.setItem(saveKey, JSON.stringify(data));
}

function loadGlobalSettings() {
    const sSettings = localStorage.getItem('lexicore_settings_v2');
    if (sSettings) SYSTEM.settings = JSON.parse(sSettings);
    
    const sStats = localStorage.getItem('lexicore_stats_v2');
    if (sStats) SYSTEM.stats = JSON.parse(sStats);
}

/* --- 4. GAME LOGIC --- */
function normalize(str) {
    if (!str) return "";
    let clean = str.toLowerCase().trim();
    clean = clean.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    clean = clean.replace(/[^a-z]/g, "");
    return clean.toUpperCase();
}

// Algorithme Levenshtein -> Température
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

    // Gestion Pluriel simple
    if (word.length > 2 && !SYSTEM.dictionary.includes(word) && word.endsWith('S')) {
        let singular = word.slice(0, -1);
        if (SYSTEM.dictionary.includes(singular)) word = singular;
    }

    // Validation
    if (word.length < 2 || !SYSTEM.dictionary.includes(word)) {
        triggerShake();
        AUDIO.play('error');
        triggerHaptic('error');
        DOM.ambience.textContent = "MOT INCONNU";
        DOM.ambience.style.color = "var(--danger)";
        setTimeout(() => DOM.ambience.style.color = "var(--text-secondary)", 1000);
        return;
    }

    if (SYSTEM.guesses.some(g => g.word === word)) {
        triggerShake();
        DOM.input.value = '';
        DOM.ambience.textContent = "DÉJÀ ANALYSÉ";
        return;
    }

    // Calcul
    const temp = getTemperature(word, SYSTEM.targetWord);
    const guessData = { word, temp, time: Date.now() };

    SYSTEM.guesses.push(guessData);
    
    // UI Updates
    addLogUI(guessData);
    renderFeedback(guessData);
    DOM.input.value = '';
    closeAutocomplete();
    
    // Win Condition
    if (temp === 100) {
        SYSTEM.gameState = 'WON';
        updateGlobalStats(true);
        triggerVictory(true);
    } else {
        AUDIO.play('click');
        triggerHaptic('success');
    }
    
    saveGameState();
    updateStatsUI();
}

/* --- 5. VISUAL FEEDBACK & BADGES --- */

function getFeedbackStyle(temp) {
    if (temp === 100) return { color: 'var(--temp-win)', icon: '💎', label: 'CRITIQUE' };
    if (temp >= 80) return { color: 'var(--temp-hot)', icon: '🌋', label: 'BRÛLANT' };
    if (temp >= 60) return { color: 'var(--temp-warm)', icon: '🔥', label: 'CHAUD' };
    if (temp >= 40) return { color: 'var(--temp-neutral)', icon: '☁️', label: 'NEUTRE' };
    if (temp >= 20) return { color: 'var(--temp-cold)', icon: '❄️', label: 'FROID' };
    return { color: 'var(--temp-glacial)', icon: '🧊', label: 'GLACIAL' };
}

function getAmbienceText(temp) {
    if (temp === 100) return "SÉQUENCE VALIDÉE";
    if (temp >= 90) return "IMPACT IMMINENT !";
    if (temp >= 75) return "CONVERGENCE HAUTE";
    if (temp >= 50) return "ANALYSE EN COURS...";
    if (temp >= 25) return "SIGNAL FAIBLE";
    return "AUCUNE CORRÉLATION";
}

function renderFeedback(data) {
    DOM.card.classList.remove('hidden');
    
    const style = getFeedbackStyle(data.temp);
    
    DOM.fWord.textContent = data.word;
    DOM.fTemp.textContent = data.temp + "%";
    DOM.fBar.style.width = data.temp + "%";
    DOM.fBar.style.backgroundColor = style.color;
    
    DOM.fIcon.textContent = style.icon;
    DOM.card.style.borderColor = style.color;
    DOM.fTemp.style.color = style.color;

    // Pulsation si très chaud
    if (data.temp >= 85) DOM.fBar.classList.add('pulse-glow');
    else DOM.fBar.classList.remove('pulse-glow');

    // Message d'ambiance
    DOM.ambience.textContent = getAmbienceText(data.temp);
    DOM.ambience.style.color = (data.temp >= 80) ? style.color : 'var(--text-secondary)';
}

function addLogUI(data) {
    const style = getFeedbackStyle(data.temp);
    
    const li = document.createElement('li');
    li.className = 'log-item';
    li.style.borderLeftColor = style.color;
    
    const html = `
        <div class="log-left">
            <span class="log-word">${data.word}</span>
            <span class="log-badge" style="color:${style.color}; border:1px solid ${style.color}">${style.label}</span>
        </div>
        <span style="font-weight:bold; color:${style.color}">${data.temp}°</span>
    `;
    li.innerHTML = html;
    
    DOM.fullLogs.prepend(li.cloneNode(true));
    
    // Mini logs (sans badge)
    const miniLi = document.createElement('li');
    miniLi.className = 'log-item';
    miniLi.style.borderLeftColor = style.color;
    miniLi.innerHTML = `<span>${data.word}</span> <span style="font-weight:bold; color:${style.color}">${data.temp}°</span>`;
    
    DOM.miniLogs.prepend(miniLi);
    if (DOM.miniLogs.children.length > 3) DOM.miniLogs.lastChild.remove();
}

function triggerShake() {
    DOM.form.classList.remove('shake');
    void DOM.form.offsetWidth; // Force reflow
    DOM.form.classList.add('shake');
}

function triggerVictory(playSound) {
    if (playSound) AUDIO.play('win');
    triggerHaptic('victory');
    document.getElementById('victory-word').textContent = SYSTEM.targetWord;
    DOM.input.disabled = true;
    DOM.input.placeholder = "TERMINÉ";
    
    DOM.ambience.textContent = "SESSION TERMINÉE";
    DOM.ambience.style.color = "var(--temp-win)";
    
    setTimeout(() => {
        DOM.winModal.classList.remove('hidden');
    }, 800);
}

/* --- 6. UTILS & NAVIGATION --- */
function setupNavigation() {
    DOM.navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            AUDIO.play('click');
            const targetId = btn.dataset.target;
            
            DOM.navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            DOM.views.forEach(v => v.classList.remove('active'));
            document.getElementById(targetId).classList.add('active');
        });
    });

    DOM.form.addEventListener('submit', handleGuess);
    DOM.input.addEventListener('input', handleAutocomplete);
    
    DOM.toggles.audio.addEventListener('change', e => {
        SYSTEM.settings.audio = e.target.checked;
        saveSettings();
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
    localStorage.setItem('lexicore_settings_v2', JSON.stringify(SYSTEM.settings));
}

function updateGlobalStats(win) {
    if (win) { SYSTEM.stats.wins++; SYSTEM.stats.streak++; } 
    else { SYSTEM.stats.streak = 0; }
    SYSTEM.stats.played++;
    localStorage.setItem('lexicore_stats_v2', JSON.stringify(SYSTEM.stats));
    updateStatsUI();
}

function updateStatsUI() {
    DOM.sAttempts.textContent = SYSTEM.guesses.length;
    DOM.sWins.textContent = SYSTEM.stats.wins;
    DOM.sStreak.textContent = SYSTEM.stats.streak;
}

// Autocomplete Logic
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

/* --- FEEDBACK HAPTIQUE --- */
function triggerHaptic(type) {
    if (!("vibrate" in navigator)) return; // Vérifie si l'appareil supporte les vibrations

    switch (type) {
        case 'success':
            // Une petite vibration sèche
            navigator.vibrate(10);
            break;
        case 'warning':
            // Deux vibrations courtes
            navigator.vibrate([40, 30, 40]);
            break;
        case 'error':
            // Une vibration longue et lourde pour l'erreur
            navigator.vibrate(200);
            break;
        case 'victory':
            // Rythme de célébration (SOS ou pulse)
            navigator.vibrate([100, 50, 100, 50, 300]);
            break;
    }
}