/**
 * ==========================================
 * LEXICORE V7.0 - APPLICATION PRINCIPALE
 * Design Material You avec animations fluides
 * ==========================================
 */

'use strict';

// === CONFIGURATION ===
const CONFIG = {
    VERSION: '7.0.0',
    API_DATAMUSE: 'https://api.datamuse.com/words',
    API_DICTIONARY: 'https://api.dictionaryapi.dev/api/v2/entries/fr/',
    MAX_API_RESULTS: 1000,
    CACHE_DURATION: 86400000, // 24 heures
    START_DATE: new Date('2026-02-02T00:00:00'),
    STORAGE_KEYS: {
        SETTINGS: 'lexicore_settings_v7',
        STATS: 'lexicore_stats_v7',
        PROGRESS: 'lexicore_progress_v7'
    }
};

// === LISTE DE MOTS DE SECOURS ===
const FALLBACK_DICTIONARY = [
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
    "VICTOIRE", "VIE", "VILLE", "VIN", "VITESSE", "VOITURE", "VOIX", "VOYAGE", "YEUX", "ZONE"
];

// === DÉFINITION DES SUCCÈS ===
const ACHIEVEMENTS = [
    {
        id: 'first_win',
        name: 'Premier succès',
        description: 'Remporter votre première victoire',
        icon: '🏆',
        condition: (stats) => stats.totalWins >= 1
    },
    {
        id: 'streak_7',
        name: 'Série de feu',
        description: 'Gagner 7 jours consécutifs',
        icon: '🔥',
        condition: (stats) => stats.currentStreak >= 7
    },
    {
        id: 'words_100',
        name: 'Vocabulaire riche',
        description: 'Découvrir 100 mots différents',
        icon: '📚',
        condition: (stats) => stats.uniqueWords.size >= 100
    },
    {
        id: 'quick_win',
        name: 'Éclair',
        description: 'Gagner en moins de 5 tentatives',
        icon: '⚡',
        condition: (stats) => stats.quickWins >= 1
    },
    {
        id: 'perfect_score',
        name: 'Score parfait',
        description: 'Trouver le mot en première tentative',
        icon: '💯',
        condition: (stats) => stats.perfectGames >= 1
    },
    {
        id: 'streak_30',
        name: 'Champion',
        description: 'Série de 30 jours consécutifs',
        icon: '👑',
        condition: (stats) => stats.currentStreak >= 30
    }
];

// === ÉTAT GLOBAL DE L'APPLICATION ===
const AppState = {
    // Jeu
    mode: 'daily',
    targetWord: '',
    guesses: [],
    gameState: 'PLAYING', // 'PLAYING', 'WON', 'LOST'
    engine: 'semantic', // 'semantic' ou 'morphological'
    semanticMap: new Map(),
    dictionary: [],
    isOnline: navigator.onLine,
    sessionStartTime: null,
    
    // Calendrier
    currentDayId: 0,
    
    // Paramètres
    settings: {
        theme: 'auto',
        primaryColor: '#6750A4',
        audio: true,
        haptic: true,
        animations: true
    },
    
    // Statistiques
    stats: {
        totalGames: 0,
        totalWins: 0,
        totalGuesses: 0,
        uniqueWords: new Set(),
        totalPlaytime: 0,
        currentStreak: 0,
        bestStreak: 0,
        lastPlayDate: null,
        quickWins: 0,
        perfectGames: 0,
        unlockedAchievements: [],
        gameHistory: []
    },
    
    // Progression
    progress: {}
};

// === ÉLÉMENTS DOM ===
const DOM = {};

/**
 * Initialisation de l'application
 */
function initializeApp() {
    console.log(`%cLexicore v${CONFIG.VERSION}`, 'color: #6750A4; font-size: 16px; font-weight: bold');
    
    cacheDOMElements();
    loadDataFromStorage();
    setupEventListeners();
    loadDictionary();
    
    AppState.currentDayId = calculateCurrentDayId();
    
    applyTheme();
    startGame('daily');
    
    // Mise à jour initiale de l'interface
    updateStatsDisplay();
}

/**
 * Mise en cache des éléments DOM
 */
function cacheDOMElements() {
    DOM.views = {
        game: document.getElementById('view-game'),
        history: document.getElementById('view-history'),
        stats: document.getElementById('view-stats'),
        settings: document.getElementById('view-settings')
    };
    
    DOM.navigation = {
        items: document.querySelectorAll('.nav-item')
    };
    
    DOM.game = {
        modeIndicator: document.getElementById('mode-indicator'),
        modeText: document.getElementById('mode-text'),
        engineToggle: document.getElementById('btn-engine-toggle'),
        modeSelector: document.getElementById('btn-mode-selector'),
        feedbackCard: document.getElementById('feedback-card'),
        feedbackWord: document.getElementById('feedback-word'),
        scoreValue: document.getElementById('score-value'),
        progressIndicator: document.getElementById('progress-indicator'),
        statusMessage: document.getElementById('status-message'),
        tempIcon: document.getElementById('temp-icon'),
        engineBadge: document.getElementById('engine-badge'),
        feedbackLabel: document.getElementById('feedback-label'),
        guessForm: document.getElementById('guess-form'),
        guessInput: document.getElementById('guess-input'),
        submitButton: document.getElementById('submit-button'),
        autocompleteContainer: document.getElementById('autocomplete-container'),
        connectionStatus: document.getElementById('connection-status'),
        recentAttempts: document.getElementById('recent-attempts')
    };
    
    DOM.history = {
        statAttempts: document.getElementById('stat-attempts'),
        statBest: document.getElementById('stat-best'),
        statAverage: document.getElementById('stat-average'),
        historyList: document.getElementById('history-list')
    };
    
    DOM.stats = {
        filterChips: document.querySelectorAll('.filter-chip'),
        wins: document.getElementById('stats-wins'),
        winRate: document.getElementById('stats-win-rate'),
        words: document.getElementById('stats-words'),
        unique: document.getElementById('stats-unique'),
        time: document.getElementById('stats-time'),
        avgTime: document.getElementById('stats-avg-time'),
        streak: document.getElementById('stats-streak'),
        bestStreak: document.getElementById('stats-best-streak'),
        achievementsGrid: document.getElementById('achievements-grid')
    };
    
    DOM.settings = {
        themeButtons: document.querySelectorAll('.theme-button'),
        colorSwatches: document.querySelectorAll('.color-swatch'),
        audioToggle: document.getElementById('setting-audio'),
        hapticToggle: document.getElementById('setting-haptic'),
        animationsToggle: document.getElementById('setting-animations'),
        resetButton: document.getElementById('btn-reset')
    };
    
    DOM.modals = {
        victory: document.getElementById('victory-modal'),
        mode: document.getElementById('mode-modal'),
        victoryWord: document.getElementById('victory-word'),
        victoryAttempts: document.getElementById('victory-attempts'),
        victoryAccuracy: document.getElementById('victory-accuracy'),
        victoryDefinition: document.getElementById('victory-definition'),
        victoryTopWords: document.getElementById('victory-top-words'),
        closeVictory: document.getElementById('btn-close-victory'),
        closeMode: document.getElementById('btn-close-mode'),
        modeCards: document.querySelectorAll('.mode-card[data-mode]'),
        archiveCalendar: document.getElementById('archive-calendar')
    };
}

/**
 * Configuration des écouteurs d'événements
 */
function setupEventListeners() {
    // Navigation
    DOM.navigation.items.forEach(item => {
        item.addEventListener('click', handleNavigationClick);
    });
    
    // Jeu
    DOM.game.engineToggle.addEventListener('click', toggleEngine);
    DOM.game.modeSelector.addEventListener('click', openModeSelector);
    DOM.game.guessForm.addEventListener('submit', handleGuessSubmit);
    DOM.game.guessInput.addEventListener('input', handleInputChange);
    
    // Statistiques
    DOM.stats.filterChips.forEach(chip => {
        chip.addEventListener('click', handleFilterChange);
    });
    
    // Paramètres
    DOM.settings.themeButtons.forEach(button => {
        button.addEventListener('click', handleThemeChange);
    });
    
    DOM.settings.colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', handleColorChange);
    });
    
    DOM.settings.audioToggle.addEventListener('change', (e) => {
        AppState.settings.audio = e.target.checked;
        saveSettings();
    });
    
    DOM.settings.hapticToggle.addEventListener('change', (e) => {
        AppState.settings.haptic = e.target.checked;
        saveSettings();
    });
    
    DOM.settings.animationsToggle.addEventListener('change', (e) => {
        AppState.settings.animations = e.target.checked;
        document.body.classList.toggle('no-animations', !e.target.checked);
        saveSettings();
    });
    
    DOM.settings.resetButton.addEventListener('click', handleReset);
    
    // Modales
    DOM.modals.closeVictory.addEventListener('click', () => {
        DOM.modals.victory.classList.add('hidden');
    });
    
    DOM.modals.closeMode.addEventListener('click', () => {
        DOM.modals.mode.classList.add('hidden');
    });
    
    DOM.modals.victory.addEventListener('click', (e) => {
        if (e.target === DOM.modals.victory) {
            DOM.modals.victory.classList.add('hidden');
        }
    });
    
    DOM.modals.mode.addEventListener('click', (e) => {
        if (e.target === DOM.modals.mode) {
            DOM.modals.mode.classList.add('hidden');
        }
    });
    
    DOM.modals.modeCards.forEach(card => {
        card.addEventListener('click', () => {
            const mode = card.dataset.mode;
            DOM.modals.mode.classList.add('hidden');
            startGame(mode);
        });
    });
    
    // Ripple effect sur tous les boutons
    setupRippleEffects();
    
    // Détection de l'état en ligne/hors ligne
    window.addEventListener('online', () => {
        AppState.isOnline = true;
        updateConnectionStatus();
    });
    
    window.addEventListener('offline', () => {
        AppState.isOnline = false;
        updateConnectionStatus();
    });
}

/**
 * Configuration de l'effet ripple sur tous les boutons
 */
function setupRippleEffects() {
    const rippleElements = document.querySelectorAll('.icon-button, .submit-button, .primary-button, .filter-chip, .mode-card, .theme-button, .color-swatch, .nav-item');
    
    rippleElements.forEach(element => {
        element.addEventListener('click', createRipple);
    });
}

/**
 * Création de l'effet ripple
 */
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = button.querySelector('.button-ripple, .chip-ripple');
    
    if (!ripple) return;
    
    ripple.classList.remove('ripple-animation');
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    ripple.classList.add('ripple-animation');
}

/**
 * Gestion de la navigation
 */
function handleNavigationClick(event) {
    const targetView = event.currentTarget.dataset.view;
    
    // Mise à jour des onglets actifs
    DOM.navigation.items.forEach(item => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    // Affichage de la vue correspondante
    Object.values(DOM.views).forEach(view => view.classList.remove('active'));
    DOM.views[targetView.replace('view-', '')].classList.add('active');
    
    // Mise à jour des stats si nécessaire
    if (targetView === 'view-stats') {
        updateStatsDisplay('all');
    }
}

/**
 * Chargement du dictionnaire
 */
async function loadDictionary() {
    try {
        const response = await fetch('dictionary.json');
        const data = await response.json();
        AppState.dictionary = data.words || data || FALLBACK_DICTIONARY;
        console.log(`📚 Dictionnaire chargé: ${AppState.dictionary.length} mots`);
    } catch (error) {
        console.warn('⚠️ Utilisation du dictionnaire de secours');
        AppState.dictionary = FALLBACK_DICTIONARY;
    }
}

/**
 * Calcul de l'ID du jour actuel
 */
function calculateCurrentDayId() {
    const now = new Date();
    const timeDiff = now - CONFIG.START_DATE;
    return Math.floor(timeDiff / 86400000);
}

/**
 * Démarrage d'une nouvelle partie
 */
function startGame(mode) {
    AppState.mode = mode;
    AppState.guesses = [];
    AppState.gameState = 'PLAYING';
    AppState.sessionStartTime = Date.now();
    
    // Détermination du mot cible
    let targetWord;
    if (mode === 'daily') {
        targetWord = getDailyWord(AppState.currentDayId);
        DOM.game.modeText.textContent = 'Quotidien';
    } else if (mode === 'training') {
        targetWord = getRandomWord();
        DOM.game.modeText.textContent = 'Entraînement';
    } else if (mode.startsWith('archive_')) {
        const dayId = parseInt(mode.split('_')[1]);
        targetWord = getDailyWord(dayId);
        DOM.game.modeText.textContent = `Archive J${dayId}`;
    }
    
    AppState.targetWord = normalizeWord(targetWord);
    
    // Initialisation du moteur sémantique
    initSemanticEngine();
    
    // Réinitialisation de l'interface
    resetGameUI();
    
    console.log(`🎮 Nouvelle partie: ${mode} - Mot: ${AppState.targetWord}`);
}

/**
 * Récupération du mot du jour
 */
function getDailyWord(dayId) {
    const index = dayId % AppState.dictionary.length;
    return AppState.dictionary[index];
}

/**
 * Récupération d'un mot aléatoire
 */
function getRandomWord() {
    const index = Math.floor(Math.random() * AppState.dictionary.length);
    return AppState.dictionary[index];
}

/**
 * Initialisation du moteur sémantique
 */
async function initSemanticEngine() {
    AppState.semanticMap.clear();
    
    if (!AppState.isOnline) {
        updateConnectionStatus();
        return;
    }
    
    const cacheKey = `semantic_${AppState.targetWord}`;
    const cachedData = localStorage.getItem(cacheKey);
    
    if (cachedData) {
        try {
            const data = JSON.parse(cachedData);
            if (Date.now() - data.timestamp < CONFIG.CACHE_DURATION) {
                buildSemanticMap(data.words);
                updateConnectionStatus(true);
                return;
            }
        } catch (error) {
            localStorage.removeItem(cacheKey);
        }
    }
    
    try {
        const url = `${CONFIG.API_DATAMUSE}?ml=${AppState.targetWord}&max=${CONFIG.MAX_API_RESULTS}`;
        const response = await fetch(url);
        
        if (!response.ok) throw new Error('API Error');
        
        const words = await response.json();
        
        localStorage.setItem(cacheKey, JSON.stringify({
            timestamp: Date.now(),
            words
        }));
        
        buildSemanticMap(words);
        updateConnectionStatus(true);
    } catch (error) {
        console.error('❌ Erreur API Datamuse:', error);
        AppState.isOnline = false;
        updateConnectionStatus();
    }
}

/**
 * Construction de la carte sémantique
 */
function buildSemanticMap(words) {
    words.forEach((item, index) => {
        const word = normalizeWord(item.word);
        const score = Math.max(0, 100 - (index / words.length) * 85);
        AppState.semanticMap.set(word, parseFloat(score.toFixed(2)));
    });
}

/**
 * Calcul du score de similarité
 */
function calculateSimilarity(guess) {
    const normalizedGuess = normalizeWord(guess);
    
    if (normalizedGuess === AppState.targetWord) {
        return 100;
    }
    
    if (AppState.engine === 'morphological') {
        return calculateLevenshteinScore(normalizedGuess, AppState.targetWord);
    }
    
    if (AppState.semanticMap.has(normalizedGuess)) {
        return AppState.semanticMap.get(normalizedGuess);
    }
    
    const morphScore = calculateLevenshteinScore(normalizedGuess, AppState.targetWord);
    return AppState.isOnline ? Math.min(10, morphScore * 0.2) : morphScore;
}

/**
 * Calcul de la distance de Levenshtein
 */
function calculateLevenshteinScore(word1, word2) {
    const len1 = word1.length;
    const len2 = word2.length;
    const matrix = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));
    
    for (let i = 0; i <= len1; i++) matrix[i][0] = i;
    for (let j = 0; j <= len2; j++) matrix[0][j] = j;
    
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            const cost = word1[i - 1] === word2[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + cost
            );
        }
    }
    
    const distance = matrix[len1][len2];
    const maxLength = Math.max(len1, len2);
    return Math.max(0, 100 - (distance / maxLength) * 100);
}

/**
 * Gestion de la soumission d'une tentative
 */
function handleGuessSubmit(event) {
    event.preventDefault();
    
    if (AppState.gameState !== 'PLAYING') return;
    
    const rawInput = DOM.game.guessInput.value.trim();
    if (!rawInput) {
        triggerShake(DOM.game.guessForm);
        playSound('error');
        return;
    }
    
    const guess = normalizeWord(rawInput);
    
    // Vérification du mot dans le dictionnaire
    if (!AppState.dictionary.includes(guess)) {
        DOM.game.statusMessage.textContent = 'Mot inconnu du dictionnaire';
        triggerShake(DOM.game.guessForm);
        playSound('error');
        triggerHaptic('soft');
        setTimeout(() => {
            DOM.game.statusMessage.textContent = 'En attente d\'une tentative...';
        }, 2000);
        return;
    }
    
    // Vérification des doublons
    if (AppState.guesses.find(g => g.word === guess)) {
        DOM.game.statusMessage.textContent = 'Mot déjà essayé';
        triggerShake(DOM.game.guessForm);
        playSound('error');
        triggerHaptic('soft');
        setTimeout(() => {
            DOM.game.statusMessage.textContent = 'En attente d\'une tentative...';
        }, 2000);
        return;
    }
    
    // Calcul du score
    const score = calculateSimilarity(guess);
    
    // Enregistrement de la tentative
    AppState.guesses.push({
        word: guess,
        score,
        timestamp: Date.now()
    });
    
    AppState.stats.uniqueWords.add(guess);
    
    // Mise à jour de l'interface
    updateFeedbackCard(guess, score);
    updateRecentAttempts();
    updateHistoryDisplay();
    
    // Effacement de l'input
    DOM.game.guessInput.value = '';
    DOM.game.autocompleteContainer.classList.add('hidden');
    
    // Sons et vibrations
    playSound('valid');
    triggerHaptic('soft');
    
    // Vérification de la victoire
    if (score === 100) {
        setTimeout(() => handleVictory(), 800);
    }
}

/**
 * Mise à jour de la carte de feedback
 */
function updateFeedbackCard(word, score) {
    DOM.game.feedbackCard.classList.remove('hidden');
    DOM.game.feedbackWord.textContent = word.toUpperCase();
    DOM.game.scoreValue.textContent = `${score.toFixed(2)}%`;
    DOM.game.progressIndicator.style.width = `${score}%`;
    
    // Mise à jour de l'icône de température et du message
    updateTemperatureFeedback(score);
}

/**
 * Mise à jour du feedback de température
 */
function updateTemperatureFeedback(score) {
    let icon, message, color;
    
    if (score >= 95) {
        icon = '🔥';
        message = 'Brûlant ! Vous y êtes presque !';
        color = '#00b894';
    } else if (score >= 80) {
        icon = '🌡️';
        message = 'Très chaud, continuez !';
        color = '#e17055';
    } else if (score >= 60) {
        icon = '☀️';
        message = 'Chaud, bonne direction';
        color = '#fdcb6e';
    } else if (score >= 40) {
        icon = '🌊';
        message = 'Tiède, cherchez encore';
        color = '#0984e3';
    } else if (score >= 20) {
        icon = '❄️';
        message = 'Froid, éloigné du but';
        color = '#74b9ff';
    } else {
        icon = '🧊';
        message = 'Glacial, très loin';
        color = '#74b9ff';
    }
    
    DOM.game.tempIcon.textContent = icon;
    DOM.game.statusMessage.textContent = message;
    DOM.game.feedbackCard.style.borderColor = color;
}

/**
 * Mise à jour des tentatives récentes
 */
function updateRecentAttempts() {
    const sorted = [...AppState.guesses].sort((a, b) => b.score - a.score);
    const recent = sorted.slice(0, 5);
    
    DOM.game.recentAttempts.innerHTML = '';
    
    recent.forEach(guess => {
        const item = document.createElement('div');
        item.className = 'attempt-item';
        item.innerHTML = `
            <span class="attempt-word">${guess.word.toUpperCase()}</span>
            <span class="attempt-score">${guess.score.toFixed(1)}%</span>
        `;
        DOM.game.recentAttempts.appendChild(item);
    });
}

/**
 * Mise à jour de l'affichage de l'historique
 */
function updateHistoryDisplay() {
    const sorted = [...AppState.guesses].sort((a, b) => b.score - a.score);
    
    // Mise à jour des statistiques de session
    const attempts = AppState.guesses.length;
    const bestScore = sorted.length > 0 ? sorted[0].score : 0;
    const avgScore = sorted.length > 0 
        ? sorted.reduce((sum, g) => sum + g.score, 0) / sorted.length 
        : 0;
    
    DOM.history.statAttempts.textContent = attempts;
    DOM.history.statBest.textContent = `${bestScore.toFixed(1)}%`;
    DOM.history.statAverage.textContent = `${avgScore.toFixed(1)}%`;
    
    // Mise à jour de la liste
    DOM.history.historyList.innerHTML = '';
    
    if (sorted.length === 0) {
        DOM.history.historyList.innerHTML = `
            <div class="empty-state">
                <span class="material-symbols-outlined">history</span>
                <p>Aucune tentative pour le moment</p>
            </div>
        `;
    } else {
        sorted.forEach(guess => {
            const item = document.createElement('div');
            item.className = 'history-item';
            item.innerHTML = `
                <span class="attempt-word">${guess.word.toUpperCase()}</span>
                <span class="attempt-score">${guess.score.toFixed(2)}%</span>
            `;
            DOM.history.historyList.appendChild(item);
        });
    }
}

/**
 * Gestion de la victoire
 */
async function handleVictory() {
    AppState.gameState = 'WON';
    DOM.game.guessInput.disabled = true;
    DOM.game.guessInput.placeholder = 'Trouvé ! 🎉';
    DOM.game.statusMessage.textContent = 'Victoire ! Mot trouvé !';
    
    // Sons et vibrations
    playSound('win');
    triggerHaptic('success');
    
    // Calcul de la durée de jeu
    const sessionDuration = Date.now() - AppState.sessionStartTime;
    
    // Mise à jour des statistiques
    AppState.stats.totalGames++;
    AppState.stats.totalWins++;
    AppState.stats.totalGuesses += AppState.guesses.length;
    AppState.stats.totalPlaytime += sessionDuration;
    
    // Vérification des victoires rapides
    if (AppState.guesses.length <= 5) {
        AppState.stats.quickWins++;
    }
    
    // Vérification des parties parfaites
    if (AppState.guesses.length === 1) {
        AppState.stats.perfectGames++;
    }
    
    // Mise à jour de la série
    updateStreak();
    
    // Enregistrement dans l'historique
    AppState.stats.gameHistory.push({
        date: Date.now(),
        mode: AppState.mode,
        word: AppState.targetWord,
        attempts: AppState.guesses.length,
        duration: sessionDuration,
        won: true
    });
    
    // Sauvegarde
    saveStats();
    
    // Vérification des succès
    checkAchievements();
    
    // Affichage de la modale
    await showVictoryModal();
}

/**
 * Mise à jour de la série
 */
function updateStreak() {
    const today = new Date().toDateString();
    const lastPlay = AppState.stats.lastPlayDate 
        ? new Date(AppState.stats.lastPlayDate).toDateString() 
        : null;
    
    if (lastPlay === today) {
        // Déjà joué aujourd'hui
        return;
    }
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();
    
    if (lastPlay === yesterdayStr) {
        AppState.stats.currentStreak++;
    } else if (!lastPlay) {
        AppState.stats.currentStreak = 1;
    } else {
        AppState.stats.currentStreak = 1;
    }
    
    if (AppState.stats.currentStreak > AppState.stats.bestStreak) {
        AppState.stats.bestStreak = AppState.stats.currentStreak;
    }
    
    AppState.stats.lastPlayDate = Date.now();
}

/**
 * Affichage de la modale de victoire
 */
async function showVictoryModal() {
    DOM.modals.victory.classList.remove('hidden');
    
    // Affichage du mot
    DOM.modals.victoryWord.textContent = AppState.targetWord.toUpperCase();
    
    // Affichage des statistiques
    DOM.modals.victoryAttempts.textContent = AppState.guesses.length;
    
    const avgScore = AppState.guesses.reduce((sum, g) => sum + g.score, 0) / AppState.guesses.length;
    DOM.modals.victoryAccuracy.textContent = `${avgScore.toFixed(1)}%`;
    
    // Affichage du top 3
    const top3 = [...AppState.guesses]
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
    
    DOM.modals.victoryTopWords.innerHTML = '';
    top3.forEach((guess, index) => {
        const item = document.createElement('div');
        item.className = 'top-word-item';
        item.innerHTML = `
            <span class="top-word-name">${index + 1}. ${guess.word.toUpperCase()}</span>
            <span class="top-word-score">${guess.score.toFixed(1)}%</span>
        `;
        DOM.modals.victoryTopWords.appendChild(item);
    });
    
    // Chargement de la définition
    await loadDefinition(AppState.targetWord);
}

/**
 * Chargement de la définition
 */
async function loadDefinition(word) {
    DOM.modals.victoryDefinition.textContent = 'Chargement de la définition...';
    
    try {
        const response = await fetch(`${CONFIG.API_DICTIONARY}${word.toLowerCase()}`);
        
        if (response.ok) {
            const data = await response.json();
            const definition = data[0]?.meanings[0]?.definitions[0]?.definition;
            DOM.modals.victoryDefinition.textContent = definition || 'Définition non disponible.';
        } else {
            DOM.modals.victoryDefinition.textContent = 'Définition non disponible.';
        }
    } catch (error) {
        DOM.modals.victoryDefinition.textContent = 'Erreur lors du chargement de la définition.';
    }
}

/**
 * Vérification et déverrouillage des succès
 */
function checkAchievements() {
    ACHIEVEMENTS.forEach(achievement => {
        if (!AppState.stats.unlockedAchievements.includes(achievement.id)) {
            if (achievement.condition(AppState.stats)) {
                AppState.stats.unlockedAchievements.push(achievement.id);
                showAchievementNotification(achievement);
            }
        }
    });
    
    saveStats();
    updateAchievementsDisplay();
}

/**
 * Notification de succès déverrouillé
 */
function showAchievementNotification(achievement) {
    console.log(`🏆 Succès déverrouillé: ${achievement.name}`);
    playSound('achievement');
    triggerHaptic('medium');
}

/**
 * Mise à jour de l'affichage des statistiques
 */
function updateStatsDisplay(period = 'all') {
    const filteredData = getFilteredStatsData(period);
    
    // Victoires
    DOM.stats.wins.textContent = filteredData.wins;
    const winRate = filteredData.totalGames > 0 
        ? ((filteredData.wins / filteredData.totalGames) * 100).toFixed(0) 
        : 0;
    DOM.stats.winRate.textContent = `${winRate}% de réussite`;
    
    // Mots
    DOM.stats.words.textContent = filteredData.totalGuesses;
    DOM.stats.unique.textContent = `${AppState.stats.uniqueWords.size} uniques`;
    
    // Temps
    const playtimeMin = Math.floor(filteredData.playtime / 60000);
    DOM.stats.time.textContent = `${playtimeMin}min`;
    
    const avgTimeMin = filteredData.totalGames > 0 
        ? Math.floor(filteredData.playtime / filteredData.totalGames / 60000) 
        : 0;
    DOM.stats.avgTime.textContent = `~${avgTimeMin}min par partie`;
    
    // Séries
    DOM.stats.streak.textContent = AppState.stats.currentStreak;
    DOM.stats.bestStreak.textContent = `Record: ${AppState.stats.bestStreak} jours`;
    
    // Succès
    updateAchievementsDisplay();
}

/**
 * Récupération des données filtrées
 */
function getFilteredStatsData(period) {
    const now = Date.now();
    let cutoffTime = 0;
    
    if (period === 'week') {
        cutoffTime = now - (7 * 86400000);
    } else if (period === 'month') {
        cutoffTime = now - (30 * 86400000);
    }
    
    const filtered = AppState.stats.gameHistory.filter(game => game.date >= cutoffTime);
    
    return {
        wins: filtered.filter(game => game.won).length,
        totalGames: filtered.length,
        totalGuesses: filtered.reduce((sum, game) => sum + game.attempts, 0),
        playtime: filtered.reduce((sum, game) => sum + game.duration, 0)
    };
}

/**
 * Mise à jour de l'affichage des succès
 */
function updateAchievementsDisplay() {
    DOM.stats.achievementsGrid.innerHTML = '';
    
    ACHIEVEMENTS.forEach(achievement => {
        const unlocked = AppState.stats.unlockedAchievements.includes(achievement.id);
        
        const card = document.createElement('div');
        card.className = `achievement-card ${unlocked ? 'unlocked' : 'locked'}`;
        card.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-info">
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-description">${achievement.description}</div>
            </div>
            <div class="achievement-progress">
                ${unlocked ? '✓' : '🔒'}
            </div>
        `;
        DOM.stats.achievementsGrid.appendChild(card);
    });
}

/**
 * Gestion du changement de filtre
 */
function handleFilterChange(event) {
    const period = event.currentTarget.dataset.period;
    
    DOM.stats.filterChips.forEach(chip => chip.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    updateStatsDisplay(period);
}

/**
 * Basculement du moteur
 */
function toggleEngine() {
    AppState.engine = AppState.engine === 'semantic' ? 'morphological' : 'semantic';
    
    const engineName = AppState.engine === 'semantic' ? 'Sémantique' : 'Morphologique';
    DOM.game.engineBadge.textContent = engineName;
    DOM.game.feedbackLabel.textContent = AppState.engine === 'semantic' 
        ? 'Proximité sémantique' 
        : 'Proximité morphologique';
    
    playSound('ui');
    triggerHaptic('soft');
}

/**
 * Ouverture du sélecteur de mode
 */
function openModeSelector() {
    buildArchiveCalendar();
    DOM.modals.mode.classList.remove('hidden');
}

/**
 * Construction du calendrier d'archives
 */
function buildArchiveCalendar() {
    DOM.modals.archiveCalendar.innerHTML = '';
    
    for (let i = 0; i <= AppState.currentDayId; i++) {
        const day = document.createElement('div');
        day.className = 'archive-day';
        day.textContent = i;
        
        if (AppState.progress[`day_${i}`]?.status === 'WON') {
            day.classList.add('solved');
        }
        
        day.addEventListener('click', () => {
            DOM.modals.mode.classList.add('hidden');
            startGame(`archive_${i}`);
        });
        
        DOM.modals.archiveCalendar.appendChild(day);
    }
}

/**
 * Gestion de l'autocomplétion
 */
function handleInputChange(event) {
    const value = normalizeWord(event.target.value);
    
    DOM.game.autocompleteContainer.innerHTML = '';
    DOM.game.autocompleteContainer.classList.add('hidden');
    
    if (value.length < 2) return;
    
    const matches = AppState.dictionary
        .filter(word => word.startsWith(value))
        .slice(0, 5);
    
    if (matches.length > 0) {
        DOM.game.autocompleteContainer.classList.remove('hidden');
        
        matches.forEach(match => {
            const item = document.createElement('div');
            item.className = 'autocomplete-item';
            item.innerHTML = `<strong>${value}</strong>${match.substring(value.length)}`;
            item.addEventListener('click', () => {
                DOM.game.guessInput.value = match;
                DOM.game.autocompleteContainer.classList.add('hidden');
                DOM.game.guessInput.focus();
            });
            DOM.game.autocompleteContainer.appendChild(item);
        });
    }
}

/**
 * Mise à jour du statut de connexion
 */
function updateConnectionStatus(online = AppState.isOnline) {
    const dot = DOM.game.connectionStatus.querySelector('.status-dot');
    const text = DOM.game.connectionStatus.querySelector('.status-text');
    
    if (online) {
        dot.classList.add('online');
        dot.classList.remove('offline');
        text.textContent = 'Connecté';
    } else {
        dot.classList.remove('online');
        dot.classList.add('offline');
        text.textContent = 'Hors ligne';
    }
}

/**
 * Réinitialisation de l'interface de jeu
 */
function resetGameUI() {
    DOM.game.feedbackCard.classList.add('hidden');
    DOM.game.guessInput.value = '';
    DOM.game.guessInput.disabled = false;
    DOM.game.guessInput.placeholder = 'Entrez votre mot...';
    DOM.game.recentAttempts.innerHTML = '';
    DOM.game.statusMessage.textContent = 'En attente d\'une tentative...';
    DOM.game.autocompleteContainer.classList.add('hidden');
    
    updateHistoryDisplay();
}

/**
 * Gestion du changement de thème
 */
function handleThemeChange(event) {
    const theme = event.currentTarget.dataset.theme;
    AppState.settings.theme = theme;
    
    DOM.settings.themeButtons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    applyTheme();
    saveSettings();
}

/**
 * Application du thème
 */
function applyTheme() {
    document.body.removeAttribute('data-theme');
    
    if (AppState.settings.theme === 'light') {
        document.body.setAttribute('data-theme', 'light');
    } else if (AppState.settings.theme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            document.body.setAttribute('data-theme', 'dark');
        }
    }
}

/**
 * Gestion du changement de couleur
 */
function handleColorChange(event) {
    const color = event.currentTarget.dataset.color;
    AppState.settings.primaryColor = color;
    
    DOM.settings.colorSwatches.forEach(swatch => swatch.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    document.documentElement.style.setProperty('--md-sys-color-primary', color);
    
    saveSettings();
}

/**
 * Réinitialisation des données
 */
function handleReset() {
    if (confirm('Êtes-vous sûr de vouloir réinitialiser toutes vos données ? Cette action est irréversible.')) {
        localStorage.clear();
        location.reload();
    }
}

/**
 * Normalisation d'un mot
 */
function normalizeWord(text) {
    return text
        .toUpperCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();
}

/**
 * Déclenchement d'une animation shake
 */
function triggerShake(element) {
    element.classList.remove('shake');
    void element.offsetWidth;
    element.classList.add('shake');
}

/**
 * Lecture d'un son
 */
function playSound(type) {
    if (!AppState.settings.audio) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    const now = audioContext.currentTime;
    
    if (type === 'valid') {
        oscillator.frequency.setValueAtTime(400, now);
        oscillator.frequency.linearRampToValueAtTime(600, now + 0.1);
        gainNode.gain.setValueAtTime(0.05, now);
        gainNode.gain.linearRampToValueAtTime(0, now + 0.1);
        oscillator.start(now);
        oscillator.stop(now + 0.1);
    } else if (type === 'win') {
        oscillator.frequency.setValueAtTime(523.25, now);
        oscillator.frequency.setValueAtTime(659.25, now + 0.1);
        oscillator.frequency.setValueAtTime(783.99, now + 0.2);
        gainNode.gain.setValueAtTime(0.1, now);
        gainNode.gain.linearRampToValueAtTime(0, now + 0.5);
        oscillator.start(now);
        oscillator.stop(now + 0.5);
    } else if (type === 'error') {
        oscillator.frequency.setValueAtTime(200, now);
        oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.05);
        gainNode.gain.setValueAtTime(0.03, now);
        gainNode.gain.linearRampToValueAtTime(0, now + 0.05);
        oscillator.start(now);
        oscillator.stop(now + 0.05);
    } else if (type === 'achievement') {
        oscillator.frequency.setValueAtTime(880, now);
        oscillator.frequency.setValueAtTime(1046.5, now + 0.15);
        gainNode.gain.setValueAtTime(0.08, now);
        gainNode.gain.linearRampToValueAtTime(0, now + 0.3);
        oscillator.start(now);
        oscillator.stop(now + 0.3);
    } else if (type === 'ui') {
        oscillator.frequency.setValueAtTime(600, now);
        gainNode.gain.setValueAtTime(0.02, now);
        gainNode.gain.linearRampToValueAtTime(0, now + 0.05);
        oscillator.start(now);
        oscillator.stop(now + 0.05);
    }
}

/**
 * Déclenchement d'un retour haptique
 */
function triggerHaptic(type) {
    if (!AppState.settings.haptic) return;
    
    // Fix pour les vibrations mobiles avec gestion d'erreur
    if ('vibrate' in navigator) {
        try {
            if (type === 'soft') {
                navigator.vibrate(10);
            } else if (type === 'medium') {
                navigator.vibrate(30);
            } else if (type === 'success') {
                navigator.vibrate([50, 50, 100]);
            }
        } catch (error) {
            console.log('Vibration non supportée sur cet appareil');
        }
    }
}

/**
 * Sauvegarde des paramètres
 */
function saveSettings() {
    localStorage.setItem(CONFIG.STORAGE_KEYS.SETTINGS, JSON.stringify(AppState.settings));
}

/**
 * Sauvegarde des statistiques
 */
function saveStats() {
    const statsToSave = {
        ...AppState.stats,
        uniqueWords: Array.from(AppState.stats.uniqueWords)
    };
    localStorage.setItem(CONFIG.STORAGE_KEYS.STATS, JSON.stringify(statsToSave));
}

/**
 * Sauvegarde de la progression
 */
function saveProgress() {
    localStorage.setItem(CONFIG.STORAGE_KEYS.PROGRESS, JSON.stringify(AppState.progress));
}

/**
 * Chargement des données depuis le stockage
 */
function loadDataFromStorage() {
    // Paramètres
    const savedSettings = localStorage.getItem(CONFIG.STORAGE_KEYS.SETTINGS);
    if (savedSettings) {
        AppState.settings = { ...AppState.settings, ...JSON.parse(savedSettings) };
    }
    
    // Statistiques
    const savedStats = localStorage.getItem(CONFIG.STORAGE_KEYS.STATS);
    if (savedStats) {
        const loaded = JSON.parse(savedStats);
        AppState.stats = {
            ...AppState.stats,
            ...loaded,
            uniqueWords: new Set(loaded.uniqueWords || [])
        };
    }
    
    // Progression
    const savedProgress = localStorage.getItem(CONFIG.STORAGE_KEYS.PROGRESS);
    if (savedProgress) {
        AppState.progress = JSON.parse(savedProgress);
    }
    
    // Application des paramètres
    if (DOM.settings.audioToggle) {
        DOM.settings.audioToggle.checked = AppState.settings.audio;
    }
    if (DOM.settings.hapticToggle) {
        DOM.settings.hapticToggle.checked = AppState.settings.haptic;
    }
    if (DOM.settings.animationsToggle) {
        DOM.settings.animationsToggle.checked = AppState.settings.animations;
        document.body.classList.toggle('no-animations', !AppState.settings.animations);
    }
    
    // Application de la couleur primaire
    if (AppState.settings.primaryColor) {
        document.documentElement.style.setProperty('--md-sys-color-primary', AppState.settings.primaryColor);
    }
}

// === LANCEMENT DE L'APPLICATION ===
document.addEventListener('DOMContentLoaded', initializeApp);