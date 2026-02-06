# 🎯 Lexicore v7.0

Application web progressive (PWA) de jeu de déduction sémantique quotidien, conçue avec Material You Design.

![Version](https://img.shields.io/badge/version-7.0.0-6750A4)
![Material Design](https://img.shields.io/badge/Material-You-6750A4)
![License](https://img.shields.io/badge/license-MIT-green)

## 📖 Description

Lexicore est un jeu de mots quotidien où vous devez deviner un mot mystère en vous basant sur la proximité sémantique de vos tentatives. Plus votre mot est proche du mot cible sémantiquement, plus votre score sera élevé !

## ✨ Fonctionnalités

### 🎮 Modes de jeu
- **Quotidien** : Un nouveau mot chaque jour, partagé par tous les joueurs
- **Entraînement** : Mode illimité pour pratiquer sans limite
- **Archives** : Rejouez les jours précédents

### 🧠 Deux moteurs de calcul
- **Sémantique** : Basé sur la proximité de sens (via API Datamuse)
- **Morphologique** : Basé sur la similitude orthographique (distance de Levenshtein)

### 📊 Statistiques complètes
- Nombre total de victoires et taux de réussite
- Temps de jeu total et moyen par partie
- Nombre de mots trouvés (total et uniques)
- Séries de jours consécutifs (actuelle et record)
- Filtres par période (tout, 7 jours, 30 jours)
- Historique détaillé de toutes les parties

### 🏆 Système de succès
- 🏆 **Premier succès** : Remporter votre première victoire
- 🔥 **Série de feu** : 7 jours consécutifs
- 📚 **Vocabulaire riche** : 100 mots différents découverts
- ⚡ **Éclair** : Victoire en moins de 5 tentatives
- 💯 **Score parfait** : Trouver le mot du premier coup
- 👑 **Champion** : Série de 30 jours consécutifs

### 🎨 Personnalisation
- **Thèmes** : Automatique, Clair, Sombre
- **Couleurs** : 5 palettes de couleurs Material You
- **Options** : Sons, vibrations, animations

### 📱 Progressive Web App
- Installation sur mobile et desktop
- Fonctionne hors ligne
- Notifications et raccourcis
- Expérience native

## 🚀 Installation

### Utilisation en ligne
Ouvrez simplement `index.html` dans un navigateur moderne.

### Installation comme PWA
1. Ouvrez l'application dans Chrome, Edge ou Safari
2. Cliquez sur l'icône d'installation dans la barre d'adresse
3. Suivez les instructions pour installer l'application

### Hébergement
Déployez les fichiers sur n'importe quel serveur web statique :
```bash
# Exemple avec Python
python -m http.server 8000

# Exemple avec Node.js
npx serve
```

## 🛠️ Technologies

### Frontend
- **HTML5** : Structure sémantique moderne
- **CSS3** : Design Material You avec animations fluides
- **JavaScript ES6+** : Logique applicative pure (Vanilla JS)

### Design System
- **Material Design 3** (Material You)
- Variables CSS natives pour les couleurs dynamiques
- Animations et transitions fluides
- Effets ripple sur tous les boutons
- Responsive design pour tous les écrans

### APIs
- **Datamuse API** : Calcul de proximité sémantique
- **Free Dictionary API** : Définitions des mots
- **Local Storage** : Persistance des données
- **Service Worker** : Mode hors ligne

## 📂 Structure du projet

```
lexicore/
├── index.html          # Structure HTML
├── style.css           # Styles Material You (1670 lignes)
├── script.js           # Logique applicative (900+ lignes)
├── manifest.json       # Manifeste PWA
├── sw.js              # Service Worker
├── dictionary.json    # Base de mots français
├── icon-512.png       # Icône de l'application
└── README.md          # Documentation
```

## 🎯 Fonctionnalités techniques

### Animations Material You
- Effet ripple sur tous les boutons cliquables
- Transitions fluides avec easing optimisé
- Animations d'entrée/sortie pour les vues
- Indicateurs de progression animés

### Gestion d'état
- État global centralisé
- Persistance automatique dans Local Storage
- Synchronisation entre les onglets

### Performance
- Mise en cache intelligente des résultats API
- Lazy loading des ressources
- Optimisation des re-renders
- Service Worker pour le mode hors ligne

### Accessibilité
- Contrastes optimisés (WCAG AA)
- Navigation au clavier
- Labels ARIA
- Textes alternatifs

### Responsive Design
- Mobile First
- Breakpoints adaptatifs
- Support des encoches (safe-area-inset)
- Orientation portrait et paysage

## 🎨 Personnalisation

### Couleurs
Les couleurs primaires disponibles :
- **Violet** : `#6750A4` (par défaut)
- **Teal** : `#006A6A`
- **Rose** : `#984061`
- **Vert** : `#006E26`
- **Orange** : `#8B5000`

### Thèmes
- **Auto** : Suit les préférences système
- **Clair** : Mode jour
- **Sombre** : Mode nuit

## 🐛 Corrections v7.0

### Vibrations mobiles
- Ajout d'un try-catch pour gérer les navigateurs non compatibles
- Gestion des erreurs sans bloquer l'exécution
- Support iOS et Android optimisé

### Interface
- Réorganisation complète avec Material You
- Meilleure hiérarchie visuelle
- Espacements cohérents
- Animations fluides

### Statistiques
- Nouveau système de filtrage par période
- Graphiques de progression
- Historique détaillé
- Exportation possible

## 📱 Compatibilité

### Navigateurs
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Samsung Internet 14+

### Systèmes
- ✅ Android 8+
- ✅ iOS 14+
- ✅ Windows 10/11
- ✅ macOS 11+
- ✅ Linux (toutes distributions)

## 🔒 Confidentialité

Toutes les données sont stockées localement sur votre appareil. Aucune donnée personnelle n'est collectée ou transmise à des serveurs tiers.

### APIs utilisées
- **Datamuse** : Calcul de similarité sémantique (pas de tracking)
- **Free Dictionary** : Définitions des mots (pas de tracking)

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, le modifier et le distribuer.

## 🙏 Remerciements

- **Material Design** : Google pour le design system
- **Datamuse** : Pour l'API de similarité sémantique
- **Free Dictionary API** : Pour les définitions
- **Communauté open source** : Pour les outils et ressources

## 📮 Contact

Pour toute question ou suggestion :
- Ouvrez une issue sur GitHub
- Contribuez via une Pull Request

---

**Version** : 7.0.0  
**Date de release** : Février 2026  
**Design** : Material You (Material Design 3)  
**Développement** : Vanilla JavaScript ES6+

Fait avec ❤️ et ☕