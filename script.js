/* =================================================================
   LEXICORE V5.0 - SEMANTIC ENGINE & ARCHIVES
   Hybrid Semantic Logic | Categories | LocalStorage Persistence
   ================================================================= */

/* --- 0. DICTIONNAIRE SEMANTIQUE (SIMULÉ) ---
   Pour un vrai sémantique, nous classons les mots par "TAGS".
   Le moteur calcule la proximité des tags en priorité.
*/
const THEMATIC_DB = {
    // CORPS HUMAIN & BIOLOGIE
    "CORPS": ["MAIN", "PIED", "TETE", "BRAS", "JAMBE", "OEIL", "NEZ", "BOUCHE", "DENT", "LANGUE", "OREILLE", "DOIGT", "ONGLE", "PEAU", "OS", "SANG", "COEUR", "POUMON", "ESTOMAC", "FOIE", "REIN", "CERVEAU", "MUSCLE", "VEINE", "ARTERE", "POIL", "CHEVEU", "BARBE", "MOUSTACHE", "CIL", "SOURCIL", "FRONT", "JOUE", "MENTON", "COU", "EPAULE", "COUDE", "POIGNET", "HANCHE", "GENOU", "CHEVILLE", "TALON", "ORTEIL", "DOS", "VENTRE", "POITRINE", "SEIN", "FESSE", "CUISSE", "MOLLET", "VISAGE", "SQUELETTE", "CRANE", "SALIVE", "SUEUR", "LARME", "URINE", "CELLULE", "ADN", "GENE", "VIRUS", "BACTERIE", "MICROBE"],
    
    // NATURE & ELEMENTS
    "NATURE": ["ARBRE", "FLEUR", "HERBE", "PLANTE", "FEUILLE", "BRANCHE", "RACINE", "TRONC", "BOIS", "FORET", "JUNGLE", "MONTAGNE", "COLLINE", "VALLEE", "PLAINE", "CHAMP", "DESERT", "DUNE", "SABLE", "PLAGE", "MER", "OCEAN", "RIVIERE", "FLEUVE", "LAC", "ETANG", "RUISSEAU", "CASCADE", "EAU", "FEU", "AIR", "TERRE", "VENT", "PLUIE", "NEIGE", "GRELE", "ORAGE", "ECLAIR", "TONNERRE", "NUAGE", "CIEL", "SOLEIL", "LUNE", "ETOILE", "PLANETE", "UNIVERS", "GALAXIE", "COMETE", "ASTEROIDE", "METEO", "CLIMAT", "SAISON", "PRINTEMPS", "ETE", "AUTOMNE", "HIVER", "FROID", "CHAUD", "GLACE", "VOLCAN", "LAVE", "ROCHER", "PIERRE", "CAILLOU"],
    
    // ANIMAUX
    "ANIMAL": ["CHIEN", "CHAT", "CHEVAL", "VACHE", "COCHON", "MOUTON", "CHEVRE", "POULE", "COQ", "CANARD", "OIE", "DINDE", "LAPIN", "SOURIS", "RAT", "HAMSTER", "OISEAU", "AIGLE", "FAUCON", "HIBOU", "CHOUETTE", "PERROQUET", "PIGEON", "MOINEAU", "CORBEAU", "POISSON", "REQUIN", "BALEINE", "DAUPHIN", "PHOQUE", "PINGOUIN", "OURS", "LION", "TIGRE", "PANTHERE", "LEOPARD", "GUEPARD", "LOUP", "RENARD", "ELEPHANT", "GIRAFE", "ZEBRE", "HIPPOPOTAME", "RHINOCEROS", "SINGE", "GORILLE", "CHIMPANZE", "SERPENT", "LEZARD", "CROCODILE", "TORTUE", "GRENOUILLE", "CRAPAUD", "INSECTE", "MOUCHE", "MOUSTIQUE", "ABEILLE", "GUEPE", "FOURMI", "PAPILLON", "ARAIGNEE", "SCORPION", "CRABE", "CREVETTE", "HOMARD", "MOULE", "HUITRE", "ESCARGOT", "LIMACE", "VER"],
    
    // MAISON & OBJETS
    "MAISON": ["MAISON", "APPARTEMENT", "IMMEUBLE", "CHATEAU", "CABANE", "MUR", "SOL", "PLAFOND", "TOIT", "PORTE", "FENETRE", "ESCALIER", "ASCENSEUR", "COULOIR", "CHAMBRE", "SALON", "CUISINE", "SALLE", "BAIN", "TOILETTE", "GARAGE", "CAVE", "GRENIER", "BALCON", "TERRASSE", "JARDIN", "MEUBLE", "TABLE", "CHAISE", "FAUTEUIL", "CANAPE", "LIT", "ARMOIRE", "COMMODE", "ETAGERE", "BUREAU", "LAMPE", "TAPIS", "RIDEAU", "MIROIR", "CADRE", "VASE", "HORLOGE", "TELEVISION", "RADIO", "ORDINATEUR", "TELEPHONE", "REFRIGERATEUR", "CONGELATEUR", "FOUR", "MICROONDE", "LAVEVAISSELLE", "LAVELINGE", "SECHELINGE", "ASPIRATEUR", "FER", "REPASSER", "BALAI", "SEAU", "EPONGE", "CHIFFON", "POUBELLE", "ASSIETTE", "VERRE", "TASSE", "BOL", "CUILLERE", "FOURCHETTE", "COUTEAU", "CASSEROLE", "POELE", "PLAT"],
    
    // VETEMENTS & MODE
    "VETEMENT": ["PANTALON", "JEAN", "JUPE", "ROBE", "SHORT", "T-SHIRT", "CHEMISE", "PULL", "GILET", "VESTE", "MANTEAU", "BLOUSON", "IMPERMEABLE", "COSTUME", "CRAVATE", "NOEUD", "PAPILLON", "CHAUSSETTE", "COLLANT", "CHAUSSURE", "BASKET", "BOTTE", "SANDALE", "CHANDEAIL", "PYJAMA", "SLIP", "CULOTTE", "SOUTIENGORGE", "MAILLOT", "BAIN", "BONNET", "ECHARPE", "GANT", "CHAPEAU", "CASQUETTE", "CEINTURE", "BIJOU", "COLLIER", "BRACELET", "BAGUE", "BOUCLE", "OREILLE", "MONTRE", "LUNETTE", "SAC", "VALISE", "PARAPLUIE", "TISSU", "COTON", "LAINE", "SOIE", "CUIR", "LIN", "VELOURS", "MODE", "STYLE", "COUTURE", "BOUTON", "FERMETURE", "ECLAIR", "POCHE"],
    
    // ALIMENTS
    "NOURRITURE": ["PAIN", "BEURRE", "CONFITURE", "MIEL", "CEREALE", "LAIT", "YAOURT", "FROMAGE", "OEUF", "VIANDE", "POISSON", "POULET", "BOEUF", "PORC", "AGNEAU", "JAMBON", "SAUCISSE", "STEAK", "RIZ", "PATE", "POMME", "TERRE", "LEGUME", "FRUIT", "SALADE", "TOMATE", "CONCOMBRE", "CAROTTE", "OIGNON", "AIL", "CHOU", "HARICOT", "POIS", "EPINARD", "COURGETTE", "AUBERGINE", "POIVRON", "CHAMPIGNON", "AVOCAT", "CITRON", "ORANGE", "PAMPLEMOUSSE", "MANDARINE", "BANANE", "POMME", "POIRE", "RAISIN", "FRAISE", "FRAMBOISE", "MYRTILLE", "CASSIS", "GROSEILLE", "CERISE", "PECHE", "ABRICOT", "PRUNE", "MELON", "PASTEQUE", "ANANAS", "KIWI", "MANGUE", "NOIX", "NOISETTE", "AMANDE", "CACAHUETE", "PISTACHE", "CHOCOLAT", "GATEAU", "BISCUIT", "TARTE", "GLACE", "CREPE", "GAUFRE", "SUCRE", "SEL", "POIVRE", "EPICE", "HUILE", "VINAIGRE", "EAU", "JUS", "SODA", "COCA", "CAFE", "THE", "VIN", "BIERE", "ALCOOL"],

    // TRANSPORTS & VILLE
    "VILLE": ["VILLE", "VILLAGE", "RUE", "ROUTE", "AVENUE", "BOULEVARD", "PLACE", "TROTTOIR", "PASSAGE", "PIETON", "FEU", "ROUGE", "PANNEAU", "STOP", "VOITURE", "CAMION", "BUS", "TRAMWAY", "METRO", "TRAIN", "AVION", "BATEAU", "VELO", "MOTO", "SCOOTER", "TAXI", "GARE", "AEROPORT", "PORT", "STATION", "SERVICE", "PARKING", "GARAGE", "PONT", "TUNNEL", "AUTOROUTE", "PEAGE", "VITESSE", "MOTEUR", "ROUE", "PNEU", "ESSENCE", "DIESEL", "ELECTRIQUE", "CONDUCTEUR", "PASSAGER", "BILLET", "TICKET", "VOYAGE", "DEPART", "ARRIVEE"],

    // EMOTIONS & ABSTRAIT
    "ABSTRAIT": ["AMOUR", "HAINE", "JOIE", "TRISTESSE", "COLERE", "PEUR", "SURPRISE", "DEGOUT", "HONTE", "FIERTE", "JALOUSIE", "ENVIE", "ESPOIR", "DESESPOIR", "COURAGE", "LACHETE", "BONHEUR", "MALHEUR", "CHANCE", "MALCHANCE", "DESTIN", "HASARD", "VIE", "MORT", "NAISSANCE", "AME", "ESPRIT", "CORPS", "PENSEE", "IDEE", "REVE", "CAUCHEMAR", "MEMOIRE", "SOUVENIR", "OUBLI", "INTELLIGENCE", "BETISE", "SAGESSE", "FOLIE", "VERITE", "MENSONGE", "JUSTICE", "INJUSTICE", "PAIX", "GUERRE", "LIBERTE", "PRISON", "LOI", "REGLE", "DROIT", "DEVOIR", "POUVOIR", "ARGENT", "TEMPS", "ESPACE", "DEBUT", "FIN"]
};

// Fusionner tout pour la recherche globale
let FLAT_DICTIONARY = [];
Object.values(THEMATIC_DB).forEach(list => FLAT_DICTIONARY.push(...list));
FLAT_DICTIONARY = [...new Set(FLAT_DICTIONARY.sort())]; // Unique & Trié

const CORE = {
    version: '5.0.0',
    startDate: new Date('2026-02-02T00:00:00'), // Point de départ des archives
    
    // État
    mode: 'daily', 
    targetWord: '',
    targetCategory: '',
    guesses: [],
    state: 'PLAYING',
    
    // IDs
    currentDayId: 0,
    selectedArchiveId: null, // Pour le mode archive
    
    settings: {
        audio: true,
        haptic: true,
        anim: true,
        theme: 'auto'
    },
    
    // Persistence globale
    progress: {} // { "day_0": "WON", "day_1": "LOST" }
};

/* --- 1. AUDIO ENGINE (No MP3) --- */
class SoundSystem {
    constructor() { this.ctx = null; }
    init() {
        if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        if (this.ctx.state === 'suspended') this.ctx.resume();
    }
    play(type) {
        if (!CORE.settings.audio) return;
        this.init();
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain); gain.connect(this.ctx.destination);

        if(type === 'ui') {
            osc.frequency.setValueAtTime(800, t); osc.frequency.exponentialRampToValueAtTime(300, t+0.05);
            gain.gain.setValueAtTime(0.02, t); gain.gain.exponentialRampToValueAtTime(0.001, t+0.05);
            osc.start(t); osc.stop(t+0.05);
        } else if(type === 'valid') {
            osc.type = 'triangle'; osc.frequency.setValueAtTime(300, t); osc.frequency.linearRampToValueAtTime(500, t+0.1);
            gain.gain.setValueAtTime(0.05, t); gain.gain.linearRampToValueAtTime(0, t+0.1);
            osc.start(t); osc.stop(t+0.1);
        } else if(type === 'error') {
            osc.type = 'sawtooth'; osc.frequency.setValueAtTime(100, t); osc.frequency.linearRampToValueAtTime(50, t+0.2);
            gain.gain.setValueAtTime(0.05, t); gain.gain.linearRampToValueAtTime(0, t+0.2);
            osc.start(t); osc.stop(t+0.2);
        } else if(type === 'win') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(523, t); osc.frequency.setValueAtTime(659, t+0.1); osc.frequency.setValueAtTime(783, t+0.2);
            gain.gain.setValueAtTime(0.1, t); gain.gain.linearRampToValueAtTime(0, t+1);
            osc.start(t); osc.stop(t+1);
        }
    }
}
const AUDIO = new SoundSystem();

/* --- 2. HAPTICS --- */
const HAPTICS = {
    trigger(type) {
        if (!CORE.settings.haptic || !navigator.vibrate) return;
        if(type === 'soft') navigator.vibrate(10);
        if(type === 'medium') navigator.vibrate(25);
        if(type === 'error') navigator.vibrate([30, 50, 30]);
        if(type === 'success') navigator.vibrate([50, 50, 100]);
    }
};

/* --- 3. DOM & UI --- */
const UI = {
    views: document.querySelectorAll('.view'),
    navBtns: document.querySelectorAll('.nav-btn'),
    form: document.getElementById('guess-form'),
    input: document.getElementById('guess-input'),
    autoList: document.getElementById('autocomplete-list'),
    card: document.getElementById('feedback-card'),
    fWord: document.getElementById('feedback-word'),
    fTemp: document.getElementById('feedback-temp'),
    fBar: document.getElementById('temp-bar'),
    fIcon: document.getElementById('temp-icon'),
    ambience: document.getElementById('ambience-display'),
    miniLogs: document.getElementById('mini-logs'),
    fullLogs: document.getElementById('full-history-list'),
    modeDisplay: document.getElementById('current-mode-display'),
    btnMode: document.getElementById('btn-mode-selector'),
    modalMode: document.getElementById('mode-modal'),
    closeMode: document.getElementById('close-mode-modal'),
    modeCards: document.querySelectorAll('.mode-card'),
    modalWin: document.getElementById('victory-modal'),
    closeWin: document.getElementById('close-victory'),
    winWord: document.getElementById('victory-word'),
    archiveGrid: document.getElementById('archive-grid'),
    btnForceUpdate: document.getElementById('btn-force-update'),
    btnReset: document.getElementById('btn-reset'),
    
    // Stats
    sAttempts: document.getElementById('stat-attempts'),
    sWins: document.getElementById('stat-wins'),
    sStreak: document.getElementById('stat-streak')
};

/* --- 4. INIT & DATA --- */
function init() {
    loadSettings();
    calculateCurrentDay();
    setupEventListeners();
    applySettings();

    // Déblocage Audio
    const unlock = () => { AUDIO.init(); window.removeEventListener('click', unlock); window.removeEventListener('touchstart', unlock); };
    window.addEventListener('click', unlock);
    window.addEventListener('touchstart', unlock);

    // Initialisation Mode
    if(CORE.mode === 'daily') setGameMode('daily');
    else if (CORE.mode === 'training') setGameMode('training');
    else if (CORE.mode.startsWith('archive_')) setGameMode(CORE.mode);
}

function calculateCurrentDay() {
    const now = new Date();
    const diff = now.getTime() - CORE.startDate.getTime();
    CORE.currentDayId = Math.floor(diff / (1000 * 60 * 60 * 24));
}

function getWordForDay(dayId) {
    // Pseudo-aléatoire stable basé sur le jour
    const keys = Object.keys(THEMATIC_DB);
    const catIndex = (dayId * 13) % keys.length;
    const catName = keys[catIndex];
    const words = THEMATIC_DB[catName];
    const wordIndex = (dayId * 7) % words.length;
    return { word: words[wordIndex], category: catName };
}

/* --- 5. GAME MODES --- */
function setGameMode(mode) {
    CORE.mode = mode;
    saveSettings();

    // Reset UI
    UI.input.value = '';
    UI.input.disabled = false;
    UI.input.placeholder = "CHERCHER...";
    UI.card.classList.add('hidden');
    UI.miniLogs.innerHTML = '';
    UI.fullLogs.innerHTML = '';
    CORE.guesses = [];
    CORE.state = 'PLAYING';

    if (mode === 'daily') {
        UI.modeDisplay.textContent = `JOUR #${CORE.currentDayId}`;
        const data = getWordForDay(CORE.currentDayId);
        CORE.targetWord = data.word;
        CORE.targetCategory = data.category;
        loadGameState(`lexicore_daily_${CORE.currentDayId}`);
    } 
    else if (mode === 'training') {
        UI.modeDisplay.textContent = "ENTRAÎNEMENT";
        // Mot aléatoire total
        const keys = Object.keys(THEMATIC_DB);
        const randCat = keys[Math.floor(Math.random() * keys.length)];
        const words = THEMATIC_DB[randCat];
        CORE.targetWord = words[Math.floor(Math.random() * words.length)];
        CORE.targetCategory = randCat;
        // Pas de sauvegarde en training
    }
    else if (mode.startsWith('archive_')) {
        const archId = parseInt(mode.split('_')[1]);
        UI.modeDisplay.textContent = `ARCHIVE #${archId}`;
        const data = getWordForDay(archId);
        CORE.targetWord = data.word;
        CORE.targetCategory = data.category;
        CORE.selectedArchiveId = archId;
        // Vérifier si déjà gagné dans le progress
        if(CORE.progress[`day_${archId}`] === 'WON') {
             loadGameState(`lexicore_daily_${archId}`); // Charge l'état gagnant
        } else {
             // Charge l'état en cours ou reset
             loadGameState(`lexicore_daily_${archId}`);
        }
    }
}

function buildArchiveGrid() {
    UI.archiveGrid.innerHTML = '';
    for (let i = 0; i <= CORE.currentDayId; i++) {
        const btn = document.createElement('div');
        btn.className = 'archive-day';
        btn.textContent = i;
        
        if (CORE.progress[`day_${i}`] === 'WON') btn.classList.add('solved');
        
        btn.innerHTML += `<div class="status-dot"></div>`;
        
        btn.onclick = () => {
            UI.modalMode.classList.add('hidden');
            setGameMode(`archive_${i}`);
        };
        UI.archiveGrid.appendChild(btn);
    }
}

/* --- 6. LOGIQUE SEMANTIQUE HYBRIDE --- */
function normalize(str) {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z]/g, "").toUpperCase();
}

function getLevenshteinScore(a, b) {
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
    return Math.max(0, 100 - ((dist / Math.max(m, n)) * 100));
}

function calculateScore(guess) {
    if (guess === CORE.targetWord) return 100;

    let score = 0;
    
    // 1. Recherche de la catégorie du mot deviné
    let guessCat = null;
    for (const [cat, words] of Object.entries(THEMATIC_DB)) {
        if (words.includes(guess)) {
            guessCat = cat;
            break;
        }
    }

    // 2. Logique Sémantique (Tags)
    if (guessCat) {
        if (guessCat === CORE.targetCategory) {
            // Même catégorie : Score fort (70-95%)
            // On ajoute un peu de Levenshtein pour différencier
            score = 70 + (getLevenshteinScore(guess, CORE.targetWord) * 0.25);
        } else {
            // Catégorie différente : Score faible (0-30%)
            score = getLevenshteinScore(guess, CORE.targetWord) * 0.3;
        }
        
        // Bonus Liens Sémantiques (Hardcodés pour l'exemple)
        // Ex: POIL (Corps) <-> CHAT (Animal)
        if ( (CORE.targetCategory === 'CORPS' && guessCat === 'ANIMAL') || 
             (CORE.targetCategory === 'ANIMAL' && guessCat === 'CORPS') ) {
             if (['POIL', 'CHEVEU', 'GRIFFE', 'OEIL'].includes(guess) || ['POIL', 'CHEVEU'].includes(CORE.targetWord)) {
                 score = Math.max(score, 65); // Boost sémantique fort
             }
        }
    } else {
        // Mot hors dictionnaire thématique mais dans le dico plat (structurel)
        // Fallback orthographique pur
        score = getLevenshteinScore(guess, CORE.targetWord) * 0.4; 
    }

    return Math.min(99.9, parseFloat(score.toFixed(2)));
}

function handleGuess(e) {
    e.preventDefault();
    if (CORE.state !== 'PLAYING') return;

    let word = normalize(UI.input.value);
    
    // Check Dico
    if (!FLAT_DICTIONARY.includes(word) && !Object.values(THEMATIC_DB).flat().includes(word)) {
        // Tolérance pluriel simple
        if(word.endsWith('S')) {
            let sing = word.slice(0, -1);
            if(FLAT_DICTIONARY.includes(sing)) word = sing;
            else { triggerShake(); UI.ambience.textContent = "INCONNU"; return; }
        } else {
            triggerShake(); UI.ambience.textContent = "INCONNU"; return; 
        }
    }

    if (CORE.guesses.some(g => g.word === word)) {
        triggerShake(); UI.ambience.textContent = "DÉJÀ FAIT"; return;
    }

    const score = calculateScore(word);
    const turnData = { word, temp: score, id: CORE.guesses.length + 1 };
    CORE.guesses.push(turnData);

    renderFeedback(turnData);
    addLogUI(turnData);
    UI.input.value = '';
    closeAutocomplete();

    if (score === 100) {
        CORE.state = 'WON';
        handleVictory();
    } else {
        AUDIO.play('valid');
        HAPTICS.trigger('medium');
    }
    
    saveGameState();
}

function handleVictory() {
    AUDIO.play('win');
    HAPTICS.trigger('success');
    UI.winWord.textContent = CORE.targetWord;
    UI.modalWin.classList.remove('hidden');
    UI.ambience.textContent = "SÉQUENCE COMPLÈTE";

    // Sauvegarde Victoire
    if (CORE.mode === 'daily') {
        CORE.progress[`day_${CORE.currentDayId}`] = 'WON';
    } else if (CORE.mode.startsWith('archive_')) {
        CORE.progress[`day_${CORE.selectedArchiveId}`] = 'WON';
    }
    localStorage.setItem('lexicore_progress', JSON.stringify(CORE.progress));
    updateStatsUI();
}

/* --- 7. PERSISTENCE --- */
function saveGameState() {
    if (CORE.mode === 'training') return;
    let key = CORE.mode === 'daily' ? `lexicore_daily_${CORE.currentDayId}` : `lexicore_daily_${CORE.selectedArchiveId}`;
    const data = { guesses: CORE.guesses, state: CORE.state, target: CORE.targetWord };
    localStorage.setItem(key, JSON.stringify(data));
}

function loadGameState(key) {
    const saved = localStorage.getItem(key);
    if (saved) {
        const data = JSON.parse(saved);
        if(data.target === CORE.targetWord) { // Sécurité intégrité
            CORE.guesses = data.guesses;
            CORE.state = data.state;
            restoreUI();
            return;
        }
    }
}

function restoreUI() {
    CORE.guesses.forEach(g => addLogUI(g));
    if (CORE.guesses.length > 0) renderFeedback(CORE.guesses[CORE.guesses.length - 1]);
    if (CORE.state === 'WON') {
        UI.input.disabled = true; 
        UI.input.placeholder = "TROUVÉ";
        UI.ambience.textContent = "SYSTÈME DÉVERROUILLÉ";
    }
}

function saveSettings() {
    CORE.settings.mode = CORE.mode;
    localStorage.setItem('lexicore_settings', JSON.stringify(CORE.settings));
}
function loadSettings() {
    const s = localStorage.getItem('lexicore_settings');
    if (s) CORE.settings = {...CORE.settings, ...JSON.parse(s)};
    
    const p = localStorage.getItem('lexicore_progress');
    if (p) CORE.progress = JSON.parse(p);
}

/* --- 8. UI HELPERS --- */
function getTempStyle(temp) {
    if (temp === 100) return { color: 'var(--temp-win)', icon: '💎' };
    if (temp >= 75) return { color: 'var(--temp-hot)', icon: '🔥' }; // Sémantiquement proche (Même catégorie)
    if (temp >= 50) return { color: 'var(--temp-warm)', icon: '☀️' }; // Lien partiel
    if (temp >= 25) return { color: 'var(--temp-neutral)', icon: '☁️' };
    return { color: 'var(--temp-glacial)', icon: '🧊' };
}

function renderFeedback(data) {
    UI.card.classList.remove('hidden');
    const style = getTempStyle(data.temp);
    
    UI.fWord.textContent = data.word;
    UI.fTemp.textContent = data.temp === 100 ? "100%" : data.temp.toFixed(1) + "%";
    UI.fBar.style.width = data.temp + "%";
    UI.fBar.style.backgroundColor = style.color;
    UI.fIcon.textContent = style.icon;
    UI.card.style.borderColor = style.color;
    UI.fTemp.style.color = style.color;

    // Messages contextuels sémantiques
    if (data.temp === 100) UI.ambience.textContent = "CORRESPONDANCE EXACTE";
    else if (data.temp >= 75) UI.ambience.textContent = "THÈME IDENTIFIÉ !";
    else if (data.temp >= 50) UI.ambience.textContent = "PISTE SÉMANTIQUE...";
    else UI.ambience.textContent = "HORS SUJET";
}

function addLogUI(data) {
    const style = getTempStyle(data.temp);
    
    // Full
    const li = document.createElement('li');
    li.className = 'log-item';
    li.style.borderLeftColor = style.color;
    li.innerHTML = `<span>${data.word}</span><span style="font-weight:bold; color:${style.color}">${data.temp === 100 ? 'MAX' : Math.floor(data.temp)+'%'}</span>`;
    UI.fullLogs.prepend(li);

    // Mini
    const miniLi = document.createElement('li');
    miniLi.className = 'log-item';
    miniLi.innerHTML = `<span style="color:${style.color}">●</span> ${data.word}`;
    UI.miniLogs.prepend(miniLi);
    if (UI.miniLogs.children.length > 3) UI.miniLogs.lastChild.remove();
}

function triggerShake() {
    UI.form.classList.remove('shake');
    void UI.form.offsetWidth;
    UI.form.classList.add('shake');
    AUDIO.play('error');
    HAPTICS.trigger('error');
}

function updateStatsUI() {
    // Calcul stats simples
    const wins = Object.values(CORE.progress).filter(v => v === 'WON').length;
    UI.sWins.textContent = wins;
    UI.sAttempts.textContent = CORE.guesses.length;
}

/* --- 9. EVENT LISTENERS --- */
function setupEventListeners() {
    // Nav
    UI.navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            HAPTICS.trigger('soft');
            UI.navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            UI.views.forEach(v => v.classList.remove('active'));
            document.getElementById(btn.dataset.target).classList.add('active');
        });
    });

    // Form
    UI.form.addEventListener('submit', handleGuess);
    UI.input.addEventListener('input', (e) => {
        const val = normalize(e.target.value);
        UI.autoList.innerHTML = '';
        UI.autoList.classList.add('hidden');
        if (val.length < 2) return;
        
        const matches = FLAT_DICTIONARY.filter(w => w.startsWith(val)).slice(0, 4);
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
    
    function closeAutocomplete() { UI.autoList.classList.add('hidden'); }

    // Modes & Modal
    UI.btnMode.addEventListener('click', () => {
        buildArchiveGrid();
        UI.modalMode.classList.remove('hidden');
    });
    UI.closeMode.addEventListener('click', () => UI.modalMode.classList.add('hidden'));
    
    UI.modeCards.forEach(card => {
        card.addEventListener('click', () => {
            UI.modalMode.classList.add('hidden');
            setGameMode(card.dataset.mode);
        });
    });

    UI.closeWin.addEventListener('click', () => UI.modalWin.classList.add('hidden'));

    // Settings
    document.getElementById('setting-audio').addEventListener('change', e => { CORE.settings.audio = e.target.checked; saveSettings(); });
    document.getElementById('setting-haptic').addEventListener('change', e => { CORE.settings.haptic = e.target.checked; saveSettings(); if(e.target.checked) HAPTICS.trigger('medium'); });
    document.getElementById('setting-anim').addEventListener('change', e => { CORE.settings.anim = e.target.checked; applySettings(); saveSettings(); });

    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            CORE.settings.theme = btn.dataset.theme;
            applySettings(); saveSettings();
        });
    });

    // HARD RESET & UPDATE
    UI.btnForceUpdate.addEventListener('click', async () => {
        if(!confirm("Forcer la mise à jour et recharger ?")) return;
        if ('serviceWorker' in navigator) {
            const registrations = await navigator.serviceWorker.getRegistrations();
            for (let registration of registrations) { await registration.unregister(); }
        }
        if ('caches' in window) {
            const keys = await caches.keys();
            for (let key of keys) { await caches.delete(key); }
        }
        window.location.reload(true);
    });

    UI.btnReset.addEventListener('click', () => {
        if(confirm("ATTENTION : Efface tout l'historique et les victoires. Confirmer ?")) {
            localStorage.clear();
            window.location.reload();
        }
    });
}

function applySettings() {
    document.getElementById('setting-audio').checked = CORE.settings.audio;
    document.getElementById('setting-haptic').checked = CORE.settings.haptic;
    document.getElementById('setting-anim').checked = CORE.settings.anim;
    
    document.body.classList.toggle('no-anim', !CORE.settings.anim);
    
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.toggle('active', b.dataset.theme === CORE.settings.theme));
    document.body.classList.remove('light-theme');
    if (CORE.settings.theme === 'light') document.body.classList.add('light-theme');
    else if (CORE.settings.theme === 'auto' && window.matchMedia('(prefers-color-scheme: light)').matches) document.body.classList.add('light-theme');
}

// Start
window.addEventListener('load', init);