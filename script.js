/* =================================================================
   LEXICORE V6.1 - CORRECTION & OPTIMISATION
   Fix: UI Selectors, Event Loop, Local Dictionary
   ================================================================= */

document.addEventListener('DOMContentLoaded', () => {
    // Le code ne se lance que lorsque le HTML est prêt.
    init();
});

// --- 0. CONFIGURATION ---
const CONFIG = {
    API_SEMANTIC: 'https://api.datamuse.com/words', 
    API_DEF: 'https://api.dictionaryapi.dev/api/v2/entries/fr/',
    MAX_API_CONTEXT: 1000,
    CACHE_DURATION: 1000 * 60 * 60 * 24 // 24 heures
};

// --- 1. CORE STATE (ÉTAT DU JEU) ---
const CORE = {
    version: '6.1.0',
    startDate: new Date('2026-02-02T00:00:00'),
    
    mode: 'daily',
    targetWord: '',
    guesses: [],
    state: 'PLAYING',
    currentEngine: 'semantic', // 'semantic' ou 'ortho'
    
    semanticMap: new Map(),
    dictionary: [], // Sera rempli par le fetch ou la liste de secours
    online: navigator.onLine,
    
    currentDayId: 0,
    selectedArchiveId: null,
    
    settings: {
        audio: true,
        haptic: true,
        anim: true,
        theme: 'auto',
        colors: { accent: '#6c5ce7', bg: '#050508' }
    },
    progress: {} 
};

// Liste de secours au cas où dictionary.json ne charge pas (ex: blocage CORS en local)
const BACKUP_DB = [
    "ACCUEIL", "AEROPORT", "AFFAIRE", "AGENCE", "ALBUM", "ANIMAL", "APPEL", "ARBRE", "ARGENT", "ARMEE",
    "AVION", "AVOCAT", "BATEAU", "BUREAU", "CAFE", "CAMION", "CHAT", "CHIEN", "CHOCOLAT", "CIEL",
    "CLIENT", "COEUR", "CONTRAT", "CORPS", "COULEUR", "CUISINE", "DANGER", "DENT", "DESSIN", "DETTE",
    "DIEU", "DOCTEUR", "DROIT", "ECOLE", "EGLISE", "ENFANT", "ESPRIT", "ETE", "ETOILE", "EXEMPLE",
    "FAIM", "FAMILLE", "FEMME", "FERME", "FETE", "FEU", "FILLE", "FILM", "FLEUR", "FORCE", "FORET",
    "FROID", "FRUIT", "GARCON", "GATEAU", "GAUCHE", "GENOU", "GUERRE", "HISTOIRE", "HIVER", "HOMME",
    "HOTEL", "ILE", "IMAGE", "JARDIN", "JOIE", "JOUR", "JOURNAL", "LAIT", "LIVRE", "LUMIERE", "LUNE",
    "MAISON", "MAMAN", "MARIAGE", "MATIN", "MEDECIN", "MER", "METIER", "MIROIR", "MONDE", "MONTAGNE",
    "MORT", "MOT", "MUSIQUE", "NATURE", "NEIGE", "NOEL", "NUIT", "OCEAN", "OISEAU", "OR", "ORDINATEUR",
    "PAIN", "PAPIER", "PARADIS", "PARC", "PAYS", "PEUR", "PHOTO", "PIED", "PIERRE", "PLACE", "PLAGE",
    "PLUIE", "POISSON", "POLICE", "POMME", "PORTE", "POULET", "PRINTEMPS", "PRIX", "PROBLEME", "QUARTIER",
    "RADIO", "RAISON", "RAPPORT", "REGARD", "REINE", "REPAS", "REVE", "RIRE", "RIVIERE", "ROBE", "ROI",
    "ROUTE", "RUE", "SABLE", "SAC", "SAISON", "SALLE", "SANTE", "SCIENCE", "SEL", "SEMAINE", "SERPENT",
    "SILENCE", "SOLEIL", "SOLUTION", "SOMMEIL", "SOURCE", "SPORT", "TABLE", "TELEPHONE", "TEMPS", "TERRE",
    "THE", "THEATRE", "TITRE", "TRAIN", "TRAVAIL", "TRISTESSE", "VACANCES", "VENT", "VERITE", "VERRE",
    "VICTOIRE", "VIE", "VILLE", "VIN", "VITESSSE", "VOITURE", "VOIX", "VOYAGE", "YEUX", "ZONE"
];

// --- 2. GESTIONNAIRE D'INTERFACE (UI) ---
// On le définit globalement mais on remplit les éléments dans init()
const UI = {
    // Sera peuplé au chargement pour éviter les erreurs "null"
};

// --- 3. THEME MANAGER ---
class ThemeManager {
    static init() {
        // Application initiale
        this.applyColor('accent', CORE.settings.colors.accent);
        this.applyColor('bg', CORE.settings.colors.bg);
        
        // Configuration des inputs
        const inputAccent = document.getElementById('color-accent');
        const inputBg = document.getElementById('color-bg');

        if (inputAccent) {
            inputAccent.value = CORE.settings.colors.accent;
            inputAccent.addEventListener('input', (e) => this.updateSetting('accent', e.target.value));
        }
        
        if (inputBg) {
            inputBg.value = CORE.settings.colors.bg;
            inputBg.addEventListener('input', (e) => this.updateSetting('bg', e.target.value));
        }

        // Application du thème clair/sombre
        applyThemeClass();
    }

    static updateSetting(key, val) {
        CORE.settings.colors[key] = val;
        this.applyColor(key, val);
        saveSettings();
    }

    static applyColor(key, val) {
        if(key === 'accent') {
            document.documentElement.style.setProperty('--accent', val);
            // Conversion simple pour l'opacité (approximation hex)
            document.documentElement.style.setProperty('--accent-glow', val + '66'); 
        }
        if(key === 'bg') {
            document.documentElement.style.setProperty('--bg-main', val);
        }
    }
}

// --- 4. ENGINE & API ---
class SemanticEngine {
    static async initGame(target) {
        CORE.targetWord = target;
        CORE.semanticMap.clear();
        
        const statusEl = document.getElementById('network-status');
        
        if (!navigator.onLine) {
            this.setOfflineMode(statusEl);
            return;
        }

        const cacheKey = `lexicore_cache_${target}`;
        const cached = localStorage.getItem(cacheKey);
        
        if (cached) {
            try {
                const data = JSON.parse(cached);
                if (Date.now() - data.ts < CONFIG.CACHE_DURATION) {
                    console.log("Chargé depuis le cache");
                    this.buildMap(data.words);
                    if(statusEl) {
                        statusEl.className = 'status-pill online';
                        statusEl.textContent = 'API CACHED';
                    }
                    return;
                }
            } catch(e) { localStorage.removeItem(cacheKey); }
        }

        try {
            if(statusEl) statusEl.textContent = 'SYNC...';
            const response = await fetch(`${CONFIG.API_SEMANTIC}?ml=${target}&max=${CONFIG.MAX_API_CONTEXT}`);
            if (!response.ok) throw new Error('API Error');
            const data = await response.json();
            
            localStorage.setItem(cacheKey, JSON.stringify({ ts: Date.now(), words: data }));
            
            this.buildMap(data);
            if(statusEl) {
                statusEl.className = 'status-pill online';
                statusEl.textContent = 'API ONLINE';
            }
        } catch (e) {
            console.error("API Fetch Failed", e);
            this.setOfflineMode(statusEl);
        }
    }

    static setOfflineMode(el) {
        CORE.online = false;
        if(el) {
            el.className = 'status-pill offline';
            el.textContent = 'OFFLINE MODE';
        }
    }

    static buildMap(apiData) {
        if(!apiData || apiData.length === 0) return;
        apiData.forEach((item, index) => {
            const word = normalize(item.word);
            let score = Math.max(0, 100 - (index / apiData.length) * 85); 
            score = parseFloat(score.toFixed(2));
            CORE.semanticMap.set(word, score);
        });
    }

    static calculateScore(guess) {
        if (guess === CORE.targetWord) return 100;

        if (CORE.currentEngine === 'ortho') {
            return this.calculateLevenshteinScore(guess, CORE.targetWord);
        } else {
            // Sémantique
            if (CORE.semanticMap.has(guess)) return CORE.semanticMap.get(guess);
            
            const orthoScore = this.calculateLevenshteinScore(guess, CORE.targetWord);
            if (!CORE.online) return orthoScore;
            return orthoScore > 85 ? orthoScore : Math.min(10, orthoScore * 0.2); 
        }
    }

    static calculateLevenshteinScore(a, b) {
        const m = a.length, n = b.length;
        const matrix = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
        for (let i = 0; i <= m; i++) matrix[i][0] = i;
        for (let j = 0; j <= n; j++) matrix[0][j] = j;
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                const cost = a[i - 1] === b[j - 1] ? 0 : 1;
                matrix[i][j] = Math.min(matrix[i-1][j]+1, matrix[i][j-1]+1, matrix[i-1][j-1]+cost);
            }
        }
        const dist = matrix[m][n];
        return parseFloat(Math.max(0, 100 - ((dist / Math.max(m, n)) * 100)).toFixed(2));
    }
}

// --- 5. INITIALISATION & LOGIQUE ---

async function init() {
    // 1. Récupération des éléments DOM (CRITIQUE : Doit être fait ici)
    populateUI();
    
    // 2. Chargement Paramètres
    loadSettings();
    ThemeManager.init();

    // 3. Chargement Dictionnaire
    await loadDictionary();

    // 4. Calcul jour et Event Listeners
    calculateCurrentDay();
    setupEventListeners();
    
    // 5. Unlock Audio Context
    const unlock = () => { AUDIO.init(); window.removeEventListener('click', unlock); window.removeEventListener('touchstart', unlock); };
    window.addEventListener('click', unlock);
    window.addEventListener('touchstart', unlock);

    // 6. Lancement mode
    if(CORE.mode === 'daily') setGameMode('daily');
    else if (CORE.mode === 'training') setGameMode('training');
    else if (CORE.mode.startsWith('archive_')) setGameMode(CORE.mode);
}

function populateUI() {
    // On mappe tous les éléments ID ici pour être sûr qu'ils existent
    UI.views = document.querySelectorAll('.view');
    UI.navBtns = document.querySelectorAll('.nav-btn');
    UI.form = document.getElementById('guess-form');
    UI.input = document.getElementById('guess-input');
    UI.autoList = document.getElementById('autocomplete-list');
    
    UI.card = document.getElementById('feedback-card');
    UI.fWord = document.getElementById('feedback-word');
    UI.fTemp = document.getElementById('feedback-temp');
    UI.fBar = document.getElementById('temp-bar');
    UI.fIcon = document.getElementById('temp-icon');
    UI.ambience = document.getElementById('ambience-display');
    
    UI.miniLogs = document.getElementById('mini-logs');
    UI.fullLogs = document.getElementById('full-history-list');
    
    UI.modeDisplay = document.getElementById('current-mode-display');
    UI.btnMode = document.getElementById('btn-mode-selector');
    UI.engineBtn = document.getElementById('engine-toggle');
    UI.engineLabel = document.getElementById('engine-label');
    
    // Modales
    UI.modalMode = document.getElementById('mode-modal');
    UI.modalWin = document.getElementById('victory-modal');
    // CORRECTION MAJEURE ICI : Ajout du sélecteur manquant
    UI.modeCards = document.querySelectorAll('.mode-card'); 

    // Victory Elements
    UI.vWord = document.getElementById('victory-word');
    UI.vDef = document.getElementById('victory-definition');
    UI.vAttempts = document.getElementById('v-attempts');
    UI.vAcc = document.getElementById('v-accuracy');
    UI.vTop3 = document.getElementById('victory-top3');
    
    // Stats
    UI.sAttempts = document.getElementById('stat-attempts');
    UI.sTop = document.getElementById('stat-top');
    UI.sAvg = document.getElementById('stat-avg');
}

async function loadDictionary() {
    try {
        const response = await fetch('dictionary.json');
        if (!response.ok) throw new Error("Fichier introuvable");
        const json = await response.json();
        CORE.dictionary = json;
        console.log("Dictionnaire chargé : " + CORE.dictionary.length + " mots.");
    } catch (e) {
        console.warn("Erreur chargement dictionary.json, utilisation backup.", e);
        CORE.dictionary = BACKUP_DB;
    }
}

function normalize(str) {
    if(!str) return "";
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z]/g, "").toUpperCase();
}

function calculateCurrentDay() {
    const now = new Date();
    const diff = now.getTime() - CORE.startDate.getTime();
    CORE.currentDayId = Math.floor(diff / (1000 * 60 * 60 * 24));
}

function getWordForDay(dayId) {
    if (CORE.dictionary.length === 0) return "ERREUR";
    const index = (dayId * 1337 + 42) % CORE.dictionary.length;
    return CORE.dictionary[index];
}

async function setGameMode(mode) {
    CORE.mode = mode;
    saveSettings();
    resetUI();

    if (mode === 'daily') {
        if(UI.modeDisplay) UI.modeDisplay.textContent = `JOUR #${CORE.currentDayId}`;
        const target = getWordForDay(CORE.currentDayId);
        await SemanticEngine.initGame(target);
        loadGameState(`lexicore_day_${CORE.currentDayId}`);
    } 
    else if (mode === 'training') {
        if(UI.modeDisplay) UI.modeDisplay.textContent = "ENTRAÎNEMENT";
        const target = CORE.dictionary[Math.floor(Math.random() * CORE.dictionary.length)];
        await SemanticEngine.initGame(target);
    }
    else if (mode.startsWith('archive_')) {
        const archId = parseInt(mode.split('_')[1]);
        if(UI.modeDisplay) UI.modeDisplay.textContent = `ARCHIVE #${archId}`;
        CORE.selectedArchiveId = archId;
        const target = getWordForDay(archId);
        await SemanticEngine.initGame(target);
        loadGameState(`lexicore_day_${archId}`);
    }
}

function handleGuess(e) {
    e.preventDefault();
    if (CORE.state !== 'PLAYING') return;

    let word = normalize(UI.input.value);
    
    if (word.length < 2) { triggerShake(); return; }
    
    if (CORE.guesses.some(g => g.word === word)) {
        triggerShake(); 
        UI.ambience.textContent = "DÉJÀ FAIT"; 
        return;
    }

    const score = SemanticEngine.calculateScore(word);
    const turnData = { word, temp: score, id: CORE.guesses.length + 1 };
    CORE.guesses.push(turnData);

    renderFeedback(turnData);
    updateHistoryUI(); 
    updateStatsUI();
    
    UI.input.value = '';
    closeAutocomplete();

    if (score === 100) {
        CORE.state = 'WON';
        handleVictory();
    } else {
        const type = score > 50 ? 'valid' : 'error'; 
        AUDIO.play(score > 50 ? 'valid' : 'ui');
        HAPTICS.trigger(score > 50 ? 'medium' : 'soft');
    }
    
    saveGameState();
}

function resetUI() {
    UI.input.value = '';
    UI.input.disabled = false;
    UI.input.placeholder = "CHERCHER...";
    UI.card.classList.add('hidden');
    UI.miniLogs.innerHTML = '';
    UI.fullLogs.innerHTML = '<li class="empty-state">Aucune donnée</li>';
    CORE.guesses = [];
    CORE.state = 'PLAYING';
    updateStatsUI();
}

function updateHistoryUI() {
    const sorted = [...CORE.guesses].sort((a, b) => b.temp - a.temp);
    
    UI.fullLogs.innerHTML = '';
    sorted.forEach(g => {
        const style = getTempStyle(g.temp);
        const li = document.createElement('li');
        li.className = 'log-item';
        li.style.borderLeftColor = style.color;
        li.innerHTML = `<span>${g.word}</span><span style="font-weight:bold; color:${style.color}">${g.temp === 100 ? 'VICTOIRE' : g.temp.toFixed(2)+'%'}</span>`;
        UI.fullLogs.appendChild(li);
    });

    UI.miniLogs.innerHTML = '';
    const recent = CORE.guesses.slice(-3).reverse();
    recent.forEach(g => {
        const style = getTempStyle(g.temp);
        const li = document.createElement('div');
        li.className = 'log-item';
        li.innerHTML = `<span style="color:${style.color}">●</span> ${g.word} <small style="margin-left:auto">${g.temp.toFixed(1)}%</small>`;
        UI.miniLogs.appendChild(li);
    });
}

function getTempStyle(temp) {
    if (temp === 100) return { color: 'var(--temp-win)', icon: '💎' };
    if (temp >= 90) return { color: 'var(--temp-hot)', icon: '🔥' };
    if (temp >= 70) return { color: 'var(--temp-warm)', icon: '☀️' };
    if (temp >= 40) return { color: 'var(--temp-neutral)', icon: '☁️' };
    if (temp >= 20) return { color: 'var(--temp-cold)', icon: '💧' };
    return { color: 'var(--temp-glacial)', icon: '🧊' };
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

    let msg = "INCONNU";
    if (data.temp === 100) msg = "IDENTIFIÉ";
    else if (data.temp >= 90) msg = "BRÛLANT !";
    else if (data.temp >= 70) msg = "TRÈS PROCHE";
    else if (data.temp >= 40) msg = "SUR LA VOIE";
    else if (data.temp >= 20) msg = "UN PEU FROID";
    else msg = "GELÉ";
    
    UI.ambience.textContent = msg;
}

function updateStatsUI() {
    UI.sAttempts.textContent = CORE.guesses.length;
    const max = CORE.guesses.reduce((acc, g) => Math.max(acc, g.temp), 0);
    UI.sTop.textContent = max.toFixed(1) + "%";
    const avg = CORE.guesses.length ? (CORE.guesses.reduce((acc,g) => acc + g.temp, 0) / CORE.guesses.length) : 0;
    UI.sAvg.textContent = avg.toFixed(1) + "%";
}

async function handleVictory() {
    AUDIO.play('win');
    HAPTICS.trigger('success');
    
    UI.vWord.textContent = CORE.targetWord;
    UI.vAttempts.textContent = CORE.guesses.length;
    const avg = CORE.guesses.reduce((acc,g) => acc + g.temp, 0) / CORE.guesses.length;
    UI.vAcc.textContent = avg.toFixed(1) + "%";
    
    UI.modalWin.classList.remove('hidden');

    // Sauvegarde Progression
    if (CORE.mode === 'daily') {
        CORE.progress[`day_${CORE.currentDayId}`] = { status: 'WON', moves: CORE.guesses.length };
        localStorage.setItem('lexicore_progress', JSON.stringify(CORE.progress));
    } else if (CORE.mode.startsWith('archive_')) {
        CORE.progress[`day_${CORE.selectedArchiveId}`] = { status: 'WON', moves: CORE.guesses.length };
        localStorage.setItem('lexicore_progress', JSON.stringify(CORE.progress));
    }

    // Load Definition
    UI.vDef.textContent = "Chargement définition...";
    try {
        const res = await fetch(CONFIG.API_DEF + CORE.targetWord.toLowerCase());
        const data = await res.json();
        if(data && data[0] && data[0].meanings && data[0].meanings[0]) {
            const def = data[0].meanings[0].definitions[0].definition;
            UI.vDef.textContent = `"${def}"`;
        } else {
            UI.vDef.textContent = "Définition indisponible.";
        }
    } catch {
        UI.vDef.textContent = "Définition indisponible (Hors ligne).";
    }

    // Top 3
    UI.vTop3.innerHTML = '';
    let topWords = [];
    if (CORE.semanticMap.size > 0) {
        topWords = Array.from(CORE.semanticMap.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(1, 4)
            .map(e => ({ word: e[0], score: e[1] }));
    } else {
        topWords = [{word: "?", score: 0}];
    }
    
    topWords.forEach(w => {
        UI.vTop3.innerHTML += `<div class="top3-item"><span>${w.word}</span><span>${w.score.toFixed(1)}%</span></div>`;
    });
}

// --- UTILITAIRES ---
function saveGameState() {
    if (CORE.mode === 'training') return;
    let key = CORE.mode === 'daily' ? `lexicore_day_${CORE.currentDayId}` : `lexicore_day_${CORE.selectedArchiveId}`;
    const data = { guesses: CORE.guesses, state: CORE.state, target: CORE.targetWord };
    localStorage.setItem(key, JSON.stringify(data));
}

function loadGameState(key) {
    const saved = localStorage.getItem(key);
    if (saved) {
        const data = JSON.parse(saved);
        if(data.target === CORE.targetWord) {
            CORE.guesses = data.guesses;
            CORE.state = data.state;
            updateHistoryUI();
            updateStatsUI();
            if(CORE.guesses.length) renderFeedback(CORE.guesses[CORE.guesses.length-1]);
            
            if (CORE.state === 'WON') {
                UI.input.disabled = true; 
                UI.input.placeholder = "TROUVÉ";
                UI.ambience.textContent = "SYSTÈME DÉVERROUILLÉ";
            }
        }
    }
}

function saveSettings() {
    localStorage.setItem('lexicore_settings', JSON.stringify(CORE.settings));
}
function loadSettings() {
    const s = localStorage.getItem('lexicore_settings');
    if (s) {
        const parsed = JSON.parse(s);
        CORE.settings = { ...CORE.settings, ...parsed };
    }
    const p = localStorage.getItem('lexicore_progress');
    if (p) CORE.progress = JSON.parse(p);
}

// --- AUDIO & HAPTICS ---
const AUDIO = {
    ctx: null,
    init() { if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)(); },
    play(type) {
        if (!CORE.settings.audio || !this.ctx) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain); gain.connect(this.ctx.destination);
        
        if (type === 'valid') {
            osc.frequency.setValueAtTime(400, t); osc.frequency.linearRampToValueAtTime(600, t+0.1);
            gain.gain.setValueAtTime(0.05, t); gain.gain.linearRampToValueAtTime(0, t+0.1);
            osc.start(t); osc.stop(t+0.1);
        } else if (type === 'win') {
            osc.frequency.setValueAtTime(400, t); osc.frequency.setValueAtTime(600, t+0.1); osc.frequency.setValueAtTime(800, t+0.3);
            gain.gain.setValueAtTime(0.1, t); gain.gain.linearRampToValueAtTime(0, t+1);
            osc.start(t); osc.stop(t+1);
        } else {
            osc.frequency.setValueAtTime(800, t); osc.frequency.exponentialRampToValueAtTime(100, t+0.05);
            gain.gain.setValueAtTime(0.02, t); gain.gain.linearRampToValueAtTime(0, t+0.05);
            osc.start(t); osc.stop(t+0.05);
        }
    }
};

const HAPTICS = {
    trigger(type) {
        if (!CORE.settings.haptic || !navigator.vibrate) return;
        if(type === 'soft') navigator.vibrate(10);
        if(type === 'medium') navigator.vibrate(30);
        if(type === 'success') navigator.vibrate([50, 50, 100]);
    }
};

// --- EVENT LISTENERS ---
function setupEventListeners() {
    // Nav
    UI.navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            UI.navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            UI.views.forEach(v => v.classList.remove('active'));
            const targetEl = document.getElementById(btn.dataset.target);
            if(targetEl) targetEl.classList.add('active');
        });
    });

    // Engine Toggle
    if(UI.engineBtn) {
        UI.engineBtn.addEventListener('click', () => {
            CORE.currentEngine = CORE.currentEngine === 'semantic' ? 'ortho' : 'semantic';
            if(UI.engineLabel) UI.engineLabel.textContent = CORE.currentEngine === 'semantic' ? 'SÉMANTIQUE' : 'MORPHOLOGIQUE';
            UI.engineBtn.classList.toggle('mode-ortho', CORE.currentEngine === 'ortho');
            HAPTICS.trigger('soft');
        });
    }

    // Form
    if(UI.form) UI.form.addEventListener('submit', handleGuess);
    
    // Autocomplete
    if(UI.input) {
        UI.input.addEventListener('input', (e) => {
            const val = normalize(e.target.value);
            UI.autoList.innerHTML = '';
            UI.autoList.classList.add('hidden');
            if (val.length < 2) return;
            
            // Recherche dans le dictionnaire chargé
            const matches = CORE.dictionary.filter(w => w.startsWith(val)).slice(0, 4);
            if (matches.length > 0) {
                UI.autoList.classList.remove('hidden');
                matches.forEach(m => {
                    const div = document.createElement('div');
                    div.className = 'autocomplete-item';
                    div.innerHTML = `<strong>${val}</strong>${m.substring(val.length)}`;
                    div.onclick = () => { UI.input.value = m; closeAutocomplete(); UI.input.focus(); };
                    UI.autoList.appendChild(div);
                });
            }
        });
    }
    
    function closeAutocomplete() { if(UI.autoList) UI.autoList.classList.add('hidden'); }

    // Modals
    if(UI.btnMode) {
        UI.btnMode.addEventListener('click', () => {
            buildArchiveGrid();
            if(UI.modalMode) UI.modalMode.classList.remove('hidden');
        });
    }

    const closeModeBtn = document.getElementById('close-mode-modal');
    if(closeModeBtn) closeModeBtn.addEventListener('click', () => UI.modalMode.classList.add('hidden'));
    
    const closeWinBtn = document.getElementById('close-victory');
    if(closeWinBtn) closeWinBtn.addEventListener('click', () => UI.modalWin.classList.add('hidden'));

    // Fix pour les boutons "Mode" (Quotidien / Entrainement)
    if(UI.modeCards) {
        UI.modeCards.forEach(c => c.addEventListener('click', () => {
            if(UI.modalMode) UI.modalMode.classList.add('hidden');
            setGameMode(c.dataset.mode);
        }));
    }

    // Settings
    const setAudio = document.getElementById('setting-audio');
    if(setAudio) setAudio.addEventListener('change', e => { CORE.settings.audio = e.target.checked; saveSettings(); });
    
    const setHaptic = document.getElementById('setting-haptic');
    if(setHaptic) setHaptic.addEventListener('change', e => { CORE.settings.haptic = e.target.checked; saveSettings(); });
    
    const setAnim = document.getElementById('setting-anim');
    if(setAnim) setAnim.addEventListener('change', e => { 
        CORE.settings.anim = e.target.checked; 
        saveSettings(); 
        document.body.classList.toggle('no-anim', !e.target.checked); 
    });
    
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            CORE.settings.theme = btn.dataset.theme;
            applyThemeClass(); saveSettings();
        });
    });

    const resetBtn = document.getElementById('btn-reset');
    if(resetBtn) resetBtn.addEventListener('click', () => {
        if(confirm("Tout effacer ?")) { localStorage.clear(); location.reload(); }
    });
}

function buildArchiveGrid() {
    const grid = document.getElementById('archive-grid');
    if(!grid) return;
    grid.innerHTML = '';
    for (let i = 0; i <= CORE.currentDayId; i++) {
        const div = document.createElement('div');
        div.className = 'archive-day';
        if (CORE.progress[`day_${i}`]?.status === 'WON') div.classList.add('solved');
        div.innerHTML = `${i}<div class="status-dot"></div>`;
        div.onclick = () => { if(UI.modalMode) UI.modalMode.classList.add('hidden'); setGameMode(`archive_${i}`); };
        grid.appendChild(div);
    }
}

function applyThemeClass() {
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.toggle('active', b.dataset.theme === CORE.settings.theme));
    document.body.classList.remove('light-theme');
    if (CORE.settings.theme === 'light') document.body.classList.add('light-theme');
    else if (CORE.settings.theme === 'auto' && window.matchMedia('(prefers-color-scheme: light)').matches) document.body.classList.add('light-theme');
}

function triggerShake() {
    if(UI.form) {
        UI.form.classList.remove('shake');
        void UI.form.offsetWidth;
        UI.form.classList.add('shake');
    }
    AUDIO.play('ui');
    HAPTICS.trigger('soft');
}