/* =================================================================
   LEXICORE V4.0 - ENGINE
   Multi-Mode | Haptics | Procedural Audio | Semantic Logic
   ================================================================= */

const CORE = {
    version: '4.0.0',
    startDate: new Date('2026-02-02T00:00:00'), // Date pivot pour le mode Quotidien
    dictionary: [],
    
    // État Actuel
    mode: 'daily', // daily, archive, training
    targetWord: '',
    guesses: [],
    state: 'PLAYING', // PLAYING, WON
    
    // IDs pour la persistence
    currentDayId: 0,
    archiveId: 0,
    
    // Configuration
    settings: {
        audio: true,
        haptic: true,
        anim: true,
        theme: 'auto'
    },
    
    // Statistiques globales
    stats: {
        played: 0,
        wins: 0,
        streak: 0
    }
};

/* --- 1. AUDIO ENGINE (Web Audio API - No MP3) --- */
class SoundSystem {
    constructor() {
        this.ctx = null;
    }

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    play(type) {
        if (!CORE.settings.audio) return;
        this.init();

        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        switch (type) {
            case 'ui': // Petit click
                osc.type = 'sine';
                osc.frequency.setValueAtTime(800, t);
                osc.frequency.exponentialRampToValueAtTime(300, t + 0.05);
                gain.gain.setValueAtTime(0.02, t);
                gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
                osc.start(t); osc.stop(t + 0.05);
                break;
            case 'valid': // Input validé
                osc.type = 'sine';
                osc.frequency.setValueAtTime(400, t);
                osc.frequency.linearRampToValueAtTime(600, t + 0.1);
                gain.gain.setValueAtTime(0.05, t);
                gain.gain.linearRampToValueAtTime(0.001, t + 0.1);
                osc.start(t); osc.stop(t + 0.1);
                break;
            case 'error': // Erreur / Shake
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(100, t);
                osc.frequency.linearRampToValueAtTime(50, t + 0.15);
                gain.gain.setValueAtTime(0.05, t);
                gain.gain.linearRampToValueAtTime(0.001, t + 0.15);
                osc.start(t); osc.stop(t + 0.15);
                break;
            case 'win': // Victoire
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(261.63, t); // Do
                osc.frequency.setValueAtTime(329.63, t + 0.1); // Mi
                osc.frequency.setValueAtTime(392.00, t + 0.2); // Sol
                osc.frequency.setValueAtTime(523.25, t + 0.3); // Do haut
                gain.gain.setValueAtTime(0.1, t);
                gain.gain.linearRampToValueAtTime(0, t + 1.5);
                osc.start(t); osc.stop(t + 1.5);
                break;
        }
    }
}
const AUDIO = new SoundSystem();

/* --- 2. HAPTIC ENGINE --- */
const HAPTICS = {
    trigger(type) {
        if (!CORE.settings.haptic || !navigator.vibrate) return;
        
        switch(type) {
            case 'soft': navigator.vibrate(10); break;
            case 'medium': navigator.vibrate(25); break;
            case 'error': navigator.vibrate([30, 50, 30]); break;
            case 'success': navigator.vibrate([50, 50, 100]); break;
        }
    }
};

/* --- 3. DOM ELEMENTS --- */
const UI = {
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
    
    // Mode & Modal
    modeDisplay: document.getElementById('current-mode-display'),
    btnMode: document.getElementById('btn-mode-selector'),
    modalMode: document.getElementById('mode-modal'),
    closeMode: document.getElementById('close-mode-modal'),
    modeCards: document.querySelectorAll('.mode-card'),
    
    // Victory
    modalWin: document.getElementById('victory-modal'),
    closeWin: document.getElementById('close-victory'),
    winWord: document.getElementById('victory-word'),
    
    // Settings
    toggles: {
        audio: document.getElementById('setting-audio'),
        haptic: document.getElementById('setting-haptic'),
        anim: document.getElementById('setting-anim')
    },
    themeBtns: document.querySelectorAll('.theme-btn'),
    resetBtn: document.getElementById('btn-reset'),
    
    // Stats
    sAttempts: document.getElementById('stat-attempts'),
    sWins: document.getElementById('stat-wins'),
    sStreak: document.getElementById('stat-streak')
};

/* --- 4. INITIALIZATION --- */
async function init() {
    loadSettings();
    applySettings();
    setupEventListeners();
    
    // Débloquer l'audio au premier contact
    const unlock = () => { AUDIO.init(); window.removeEventListener('click', unlock); window.removeEventListener('touchstart', unlock); };
    window.addEventListener('click', unlock);
    window.addEventListener('touchstart', unlock);

    // Charger Dictionnaire
    try {
        const res = await fetch('dictionary.json');
        CORE.dictionary = await res.json();
        
        // Calcul du jour actuel
        const now = new Date();
        const diff = now.getTime() - CORE.startDate.getTime();
        CORE.currentDayId = Math.floor(diff / (1000 * 60 * 60 * 24));
        
        // Charger le jeu
        setGameMode(CORE.mode);
        
    } catch (e) {
        console.error("Erreur chargement dictionnaire", e);
        UI.ambience.textContent = "ERREUR SYSTÈME";
    }
}

/* --- 5. LOGIQUE DE JEU & MODES --- */

function setGameMode(mode) {
    CORE.mode = mode;
    saveSettings(); // Sauver le mode préféré
    
    // UI Update
    UI.modeDisplay.textContent = mode === 'daily' ? `JOUR #${CORE.currentDayId}` : mode.toUpperCase();
    UI.input.value = '';
    UI.input.disabled = false;
    UI.input.placeholder = "SÉQUENCE...";
    
    // Logique de chargement par mode
    if (mode === 'daily') {
        const index = (CORE.currentDayId * 1337) % CORE.dictionary.length;
        CORE.targetWord = CORE.dictionary[index];
        loadGameState(`lexicore_daily_${CORE.currentDayId}`);
    } else if (mode === 'archive') {
        // Charge une archive aléatoire mais persistante pour la session si pas finie
        let savedArch = JSON.parse(localStorage.getItem('lexicore_archive_session'));
        if (savedArch && savedArch.target) {
            CORE.targetWord = savedArch.target;
            CORE.guesses = savedArch.guesses;
            CORE.state = savedArch.state;
            restoreUI();
        } else {
            // Nouvelle archive
            const randomId = Math.floor(Math.random() * CORE.currentDayId);
            const index = (randomId * 1337) % CORE.dictionary.length;
            CORE.targetWord = CORE.dictionary[index];
            resetGameData();
        }
    } else if (mode === 'training') {
        // Mode infini sans sauvegarde
        const index = Math.floor(Math.random() * CORE.dictionary.length);
        CORE.targetWord = CORE.dictionary[index];
        resetGameData();
    }
}

function resetGameData() {
    CORE.guesses = [];
    CORE.state = 'PLAYING';
    UI.fullLogs.innerHTML = '';
    UI.miniLogs.innerHTML = '';
    UI.card.classList.add('hidden');
    UI.input.disabled = false;
    UI.ambience.textContent = "ATTENTE SIGNAL...";
}

function loadGameState(key) {
    const saved = localStorage.getItem(key);
    if (saved) {
        const data = JSON.parse(saved);
        CORE.guesses = data.guesses;
        CORE.state = data.state;
        restoreUI();
    } else {
        resetGameData();
    }
}

function restoreUI() {
    UI.fullLogs.innerHTML = '';
    UI.miniLogs.innerHTML = '';
    CORE.guesses.forEach(g => addLogUI(g));
    
    if (CORE.guesses.length > 0) {
        renderFeedback(CORE.guesses[CORE.guesses.length - 1]);
    }
    
    if (CORE.state === 'WON') {
        UI.input.disabled = true;
        UI.input.placeholder = "TERMINÉ";
        UI.ambience.textContent = "SÉQUENCE VALIDÉE";
    }
    
    updateStatsUI();
}

function saveCurrentState() {
    const data = { guesses: CORE.guesses, state: CORE.state, target: CORE.targetWord };
    if (CORE.mode === 'daily') {
        localStorage.setItem(`lexicore_daily_${CORE.currentDayId}`, JSON.stringify(data));
    } else if (CORE.mode === 'archive') {
        localStorage.setItem('lexicore_archive_session', JSON.stringify(data));
    }
}

/* --- 6. CORE ALGORITHM (Temperature) --- */
function normalize(str) {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z]/g, "").toUpperCase();
}

function calculateTemperature(guess, target) {
    if (guess === target) return 100;
    
    // Algorithme de distance (Levenshtein modifié pour % de proximité)
    const m = guess.length;
    const n = target.length;
    const matrix = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) matrix[i][0] = i;
    for (let j = 0; j <= n; j++) matrix[0][j] = j;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const cost = guess[i - 1] === target[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,      // Deletion
                matrix[i][j - 1] + 1,      // Insertion
                matrix[i - 1][j - 1] + cost // Substitution
            );
        }
    }

    const distance = matrix[m][n];
    const maxLength = Math.max(m, n);
    // Formule pour donner une "température" positive
    let percent = Math.max(0, 100 - ((distance / maxLength) * 100));
    
    // Bonus de sémantique "fake" (si même première lettre ou longueur)
    if (guess[0] === target[0]) percent += 2;
    if (guess.length === target.length) percent += 3;
    
    return Math.min(99.9, parseFloat(percent.toFixed(2)));
}

function handleGuess(e) {
    e.preventDefault();
    if (CORE.state !== 'PLAYING') return;

    let word = normalize(UI.input.value);

    // Gestion Pluriel basique
    if (word.endsWith('S') && !CORE.dictionary.includes(word)) {
        let singular = word.slice(0, -1);
        if (CORE.dictionary.includes(singular)) word = singular;
    }

    // Validation
    if (word.length < 2 || !CORE.dictionary.includes(word)) {
        triggerShake();
        UI.ambience.textContent = "MOT INCONNU";
        return;
    }

    if (CORE.guesses.some(g => g.word === word)) {
        triggerShake();
        UI.ambience.textContent = "DÉJÀ ESSAYÉ";
        return;
    }

    // Calcul
    let temp = calculateTemperature(word, CORE.targetWord);
    if (word === CORE.targetWord) temp = 100;

    const turnData = { word, temp, id: CORE.guesses.length + 1 };
    CORE.guesses.push(turnData);

    // Actions
    addLogUI(turnData);
    renderFeedback(turnData);
    UI.input.value = '';
    closeAutocomplete();
    
    if (temp === 100) {
        CORE.state = 'WON';
        handleVictory();
    } else {
        AUDIO.play('valid');
        HAPTICS.trigger('medium');
    }
    
    saveCurrentState();
    updateStatsUI();
}

/* --- 7. UI FEEDBACK --- */
function getTempStyle(temp) {
    if (temp === 100) return { color: 'var(--temp-win)', icon: '💎', label: 'CRITIQUE' };
    if (temp >= 75) return { color: 'var(--temp-hot)', icon: '🌋', label: 'BRÛLANT' };
    if (temp >= 50) return { color: 'var(--temp-warm)', icon: '☀️', label: 'CHAUD' };
    if (temp >= 25) return { color: 'var(--temp-neutral)', icon: '☁️', label: 'TIÈDE' };
    return { color: 'var(--temp-glacial)', icon: '🧊', label: 'FROID' };
}

function renderFeedback(data) {
    UI.card.classList.remove('hidden');
    const style = getTempStyle(data.temp);
    
    UI.fWord.textContent = data.word;
    UI.fTemp.textContent = data.temp === 100 ? "100%" : data.temp.toFixed(2) + "%";
    UI.fBar.style.width = data.temp + "%";
    UI.fBar.style.backgroundColor = style.color;
    UI.fIcon.textContent = style.icon;
    UI.card.style.borderColor = style.color;
    UI.fTemp.style.color = style.color;
    
    // Ambiance message
    if (data.temp === 100) UI.ambience.textContent = "SYSTÈME DÉVERROUILLÉ";
    else if (data.temp < 15) UI.ambience.textContent = "AUCUNE CORRÉLATION";
    else if (data.temp < 40) UI.ambience.textContent = "SIGNAL FAIBLE";
    else if (data.temp < 70) UI.ambience.textContent = "APPROCHE DÉTECTÉE";
    else UI.ambience.textContent = "PROXIMITÉ MAXIMALE";
}

function addLogUI(data) {
    const style = getTempStyle(data.temp);
    
    // Full Log
    const li = document.createElement('li');
    li.className = 'log-item';
    li.style.borderLeftColor = style.color;
    li.innerHTML = `
        <span>${data.word}</span>
        <span style="font-weight:bold; color:${style.color}">${data.temp === 100 ? 'MAX' : Math.floor(data.temp) + '°'}</span>
    `;
    UI.fullLogs.prepend(li); // Ajout au début

    // Mini Log (Terminal)
    const miniLi = document.createElement('li');
    miniLi.className = 'log-item';
    miniLi.innerHTML = `<span style="color:${style.color}">●</span> ${data.word}`;
    UI.miniLogs.prepend(miniLi);
    if (UI.miniLogs.children.length > 3) UI.miniLogs.lastChild.remove();
}

function triggerShake() {
    UI.form.classList.remove('shake');
    void UI.form.offsetWidth; // Reflow
    UI.form.classList.add('shake');
    AUDIO.play('error');
    HAPTICS.trigger('error');
}

function handleVictory() {
    AUDIO.play('win');
    HAPTICS.trigger('success');
    UI.winWord.textContent = CORE.targetWord;
    UI.modalWin.classList.remove('hidden');
    
    // Update global stats only for Daily
    if (CORE.mode === 'daily') {
        CORE.stats.wins++;
        CORE.stats.streak++;
        CORE.stats.played++;
        localStorage.setItem('lexicore_stats', JSON.stringify(CORE.stats));
    }
}

/* --- 8. SETTINGS & UTILS --- */
function setupEventListeners() {
    // Nav
    UI.navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            HAPTICS.trigger('soft');
            const target = btn.dataset.target;
            UI.navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            UI.views.forEach(v => v.classList.remove('active'));
            document.getElementById(target).classList.add('active');
        });
    });

    // Form
    UI.form.addEventListener('submit', handleGuess);
    UI.input.addEventListener('input', handleAutocomplete);

    // Modal Modes
    UI.btnMode.addEventListener('click', () => UI.modalMode.classList.remove('hidden'));
    UI.closeMode.addEventListener('click', () => UI.modalMode.classList.add('hidden'));
    
    UI.modeCards.forEach(card => {
        card.addEventListener('click', () => {
            const newMode = card.dataset.mode;
            UI.modalMode.classList.add('hidden');
            if (newMode !== CORE.mode) setGameMode(newMode);
        });
    });

    // Modal Win
    UI.closeWin.addEventListener('click', () => {
        UI.modalWin.classList.add('hidden');
        if(CORE.mode === 'training' || CORE.mode === 'archive') {
             // Restart optionnel pour ces modes ? Pour l'instant on ferme juste.
        }
    });

    // Settings Toggles
    UI.toggles.audio.addEventListener('change', e => { CORE.settings.audio = e.target.checked; saveSettings(); });
    UI.toggles.haptic.addEventListener('change', e => { CORE.settings.haptic = e.target.checked; saveSettings(); if(e.target.checked) HAPTICS.trigger('medium'); });
    UI.toggles.anim.addEventListener('change', e => { CORE.settings.anim = e.target.checked; applySettings(); saveSettings(); });

    UI.themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            CORE.settings.theme = btn.dataset.theme;
            applySettings(); saveSettings();
        });
    });
    
    UI.resetBtn.addEventListener('click', () => {
        if(confirm("Supprimer toutes les données et recommencer ?")) {
            localStorage.clear();
            location.reload();
        }
    });
}

function handleAutocomplete(e) {
    const val = normalize(e.target.value);
    UI.autoList.innerHTML = '';
    UI.autoList.classList.add('hidden');
    
    if (val.length < 2) return;
    
    const matches = CORE.dictionary.filter(w => w.startsWith(val)).slice(0, 4);
    if (matches.length > 0) {
        UI.autoList.classList.remove('hidden');
        matches.forEach(m => {
            const div = document.createElement('div');
            div.className = 'autocomplete-item';
            div.innerHTML = `<strong>${val}</strong>${m.substring(val.length)}`;
            div.onclick = () => {
                UI.input.value = m;
                closeAutocomplete();
                UI.input.focus();
            };
            UI.autoList.appendChild(div);
        });
    }
}
function closeAutocomplete() { UI.autoList.classList.add('hidden'); }

function applySettings() {
    UI.toggles.audio.checked = CORE.settings.audio;
    UI.toggles.haptic.checked = CORE.settings.haptic;
    UI.toggles.anim.checked = CORE.settings.anim;
    
    // Anim
    document.body.classList.toggle('no-anim', !CORE.settings.anim);
    
    // Theme
    UI.themeBtns.forEach(b => b.classList.toggle('active', b.dataset.theme === CORE.settings.theme));
    document.body.classList.remove('light-theme');
    if (CORE.settings.theme === 'light') document.body.classList.add('light-theme');
    else if (CORE.settings.theme === 'auto' && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.body.classList.add('light-theme');
    }
}

function saveSettings() {
    CORE.settings.mode = CORE.mode;
    localStorage.setItem('lexicore_settings', JSON.stringify(CORE.settings));
}

function loadSettings() {
    const s = localStorage.getItem('lexicore_settings');
    if (s) {
        const parsed = JSON.parse(s);
        CORE.settings = { ...CORE.settings, ...parsed };
        if(parsed.mode) CORE.mode = parsed.mode;
    }
    const st = localStorage.getItem('lexicore_stats');
    if (st) CORE.stats = JSON.parse(st);
}

function updateStatsUI() {
    UI.sAttempts.textContent = CORE.guesses.length;
    UI.sWins.textContent = CORE.stats.wins;
    UI.sStreak.textContent = CORE.stats.streak;
}

// Start
window.addEventListener('load', init);