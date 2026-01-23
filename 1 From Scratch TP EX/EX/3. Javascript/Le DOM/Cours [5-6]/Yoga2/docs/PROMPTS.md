# 📝 PROMPTS DE DÉVELOPPEMENT - COPIER-COLLER

Ce fichier contient tous les prompts prêts à l'emploi pour développer chaque page et fonctionnalité de l'application Yoga.

---

## 📋 Table des Matières

1. [Dashboard Utilisateur](#1-dashboard-utilisateur)
2. [Page Liste des Séances](#2-page-liste-des-séances)
3. [Lecteur de Séance](#3-lecteur-de-séance)
4. [Exercices de Respiration](#4-exercices-de-respiration)
5. [Page Progression](#5-page-progression)
6. [Dashboard Admin](#6-dashboard-admin)
7. [Page Apprentissage](#7-page-apprentissage)
8. [Architecture Mobile Expo](#8-architecture-mobile-expo)

---

## 1. Dashboard Utilisateur

### Prompt

```
Crée le fichier dashboard.html dans le projet Yoga2 avec :

STRUCTURE :
- Navbar fixe en haut :
  - Logo "Yoga App" (lien vers index.html)
  - Menu : Séances | Respiration | Progression | Apprentissage
  - Bouton déconnexion + icône user
- Section bienvenue :
  - "Bonjour [Prénom] !" (récupéré de sessionStorage)
  - "Prenez un moment pour vous aujourd'hui"
- Grid de stats (4 cartes) :
  - Séances complétées (nombre + icône)
  - Temps total (en minutes)
  - Série actuelle (streak en jours)
  - Niveau (débutant/intermédiaire/avancé)
- Section "Continuer ma pratique" :
  - Dernière séance non terminée OU
  - Suggestion de séance du jour
- Section "Séances récentes" :
  - 3 dernières séances complétées (avec date)
- CTA "Nouvelle séance" (bouton grand, bien visible)

STYLE :
- Utilise styles.css et themes.css existants
- Classe .dashboard-page pour le body
- Grille responsive pour les stats
- Cartes avec hover effects

JAVASCRIPT :
- Vérifier l'authentification avec requireAuth()
- Charger les données utilisateur depuis localStorage
- Afficher nom, stats, séances récentes
- Bouton déconnexion appelle logout()

Thème clair/sombre : bouton en haut à droite (déjà dans theme.js).
Garde le même esprit zen et apaisant.
```

---

## 2. Page Liste des Séances

### Prompt

```
Crée le fichier sessions.html dans le projet Yoga2 avec :

STRUCTURE :
- Navbar (même que dashboard.html)
- Hero section :
  - Titre "Trouvez votre séance idéale"
  - Sous-titre "Filtrez par niveau, durée ou objectif"
- Barre de filtres (sticky) :
  - Search box (input avec icône loupe)
  - Select "Niveau" : Tous | Débutant | Intermédiaire | Avancé
  - Select "Durée" : Tous | 5-10 min | 10-20 min | 20-45 min | 45+ min
  - Select "Type" : Tous | Hatha | Vinyasa | Yin | Flow
  - Select "Objectif" : Tous | Détente | Mobilité | Renforcement | Énergie
- Grid de séances :
  - Cartes avec :
    - Emoji/icône (🧘‍♀️)
    - Badge niveau (couleur selon niveau)
    - Durée (en haut à droite)
    - Titre
    - Description courte
    - Tags objectifs (chips)
    - Bouton "Commencer"

STYLE :
- Grid responsive (1 col mobile, 2 cols tablette, 3 cols desktop)
- Animations au hover
- Filtres sticky quand on scroll
- Empty state si aucun résultat

JAVASCRIPT :
- Charger toutes les séances depuis localStorage
- Implémenter filtres en temps réel (sans recharger)
- Search dans titre + description
- Fonction filterSessions(filters)
- Click sur carte → redirection vers session-player.html?id=xxx
- Afficher nombre de résultats

FICHIER JS SÉPARÉ : sessions.js
- Fonctions de filtrage
- Gestion du DOM
- Event listeners
```

---

## 3. Lecteur de Séance

### Prompt

```
Crée le fichier session-player.html dans le projet Yoga2 avec :

STRUCTURE :
- Mode plein écran (bouton toggle)
- Header (masquable) :
  - Bouton retour
  - Titre de la séance
  - Temps restant total
- Zone centrale (grande) :
  - Nom de la posture actuelle (grand titre)
  - Instructions de la posture
  - Image/emoji de la posture
  - Chronomètre de la posture (grand, visible)
- Controls (en bas) :
  - Bouton Pause/Play (grand, central)
  - Bouton Précédent (posture)
  - Bouton Suivant (posture)
  - Bouton Arrêter (avec confirmation)
- Progress bar (fine, en haut) :
  - Indicateur visuel de progression (X/Y postures)
- Modal de fin :
  - "Félicitations !"
  - Durée totale
  - Nombre de postures
  - "Comment vous sentez-vous ?" (optionnel)
  - Bouton "Retour au dashboard"

STYLE :
- Layout centré, épuré
- Grande typo pour posture actuelle
- Chronomètre style digital ou circulaire
- Animations douces entre postures
- Mode plein écran sans distraction

JAVASCRIPT (player.js) :
- Récupérer ID de séance depuis URL (?id=xxx)
- Charger la séance depuis localStorage
- Timer précis avec setInterval
- Gestion des états : idle, playing, paused, completed
- Navigation entre postures (next, previous)
- Son optionnel (bip de fin de posture)
- Sauvegarder progression :
  {
    userId, sessionId, completedAt, duration, poses_completed
  }
- Mise à jour stats utilisateur

FEATURES AVANCÉES (Phase 2) :
- Voix off avec Web Speech API
- Notifications sonores
- Mode "sans timer" (manuel)
- Possibilité de sauter une posture
```

---

## 4. Exercices de Respiration

### Prompt

```
Crée le fichier breathing.html dans le projet Yoga2 avec :

STRUCTURE :
- Navbar (simplifiée, peut être masquée)
- Hero :
  - "Respirez avec nous"
  - "Prenez quelques minutes pour vous recentrer"
- Grid d'exercices (3 cartes) :
  1. Cohérence cardiaque (5-5)
  2. Respiration 4-7-8 (apaisante)
  3. Respiration carrée (4-4-4-4)
- Modal d'exercice (quand on clique sur une carte) :
  - Animation visuelle (cercle qui grandit/rétrécit)
  - Instructions textuelles :
    - "Inspirez" (4s)
    - "Retenez" (7s)
    - "Expirez" (8s)
  - Compteur de cycles
  - Bouton Pause/Play
  - Bouton Stop
  - Durée totale écoulée
  - Musique/son ambiant (optionnel, toggle)

STYLE :
- Fond très calme (gradient doux)
- Animation fluide et lente
- Typographie grande et lisible
- Pas de distraction visuelle
- Mode sombre par défaut pour respiration (optionnel)

JAVASCRIPT (breathing.js) :
- 3 exercices prédéfinis :
  {
    name, description, pattern: [inhale, hold, exhale, hold]
  }
- Fonction animateBreathing(pattern)
- Timer précis pour chaque phase
- Animation CSS ou Canvas
- Son de gong/bol tibétain en fin (optionnel)
- Tracking : nombre de cycles complétés
- Sauvegarder dans localStorage :
  {
    userId, exerciseType, duration, cycles, completedAt
  }

ANIMATIONS :
- Cercle/sphère qui pulse
- Changement de couleur selon phase
- Transitions très douces (ease-in-out)
- Texte qui fade in/out

AMÉLIORATION (Phase 2) :
- Fond vidéo nature (optionnel)
- Détection rythme cardiaque (si device compatible)
- Adaptation automatique du tempo
```

---

## 5. Page Progression

### Prompt

```
Crée le fichier progress.html dans le projet Yoga2 avec :

STRUCTURE :
- Navbar (même que dashboard)
- Header :
  - "Ma progression"
  - Toggle période : 7 jours | 30 jours | Tout
- Section statistiques :
  - Card 1 : Séances complétées (nombre + évolution)
  - Card 2 : Temps total pratiqué (heures)
  - Card 3 : Série actuelle (streak)
  - Card 4 : Série la plus longue
- Graphique d'activité :
  - Calendrier type GitHub (cases vertes selon activité)
  - OU graphique en barres (séances par jour)
- Timeline des séances récentes :
  - Liste chronologique inversée
  - Chaque entrée :
    - Date et heure
    - Nom de la séance
    - Durée
    - Icône de niveau
- Section "Objectifs" (optionnel Phase 2) :
  - Objectif hebdomadaire (ex: 3 séances)
  - Progress bar
- Export de données (bouton) :
  - Télécharger JSON (RGPD compliance)

STYLE :
- Cards avec couleurs douces
- Graphique responsive
- Timeline élégante
- Animations au scroll

JAVASCRIPT (progress.js) :
- Charger données de progression depuis localStorage
- Calculer stats :
  - Total séances, durée
  - Streak actuel et max
  - Moyenne par semaine
- Générer graphique (Chart.js ou Canvas API)
- Fonction calculateStreak()
- Export JSON avec exportUserData() (déjà dans auth.js)

GRAPHIQUE :
- Option 1 : Chart.js (inclure CDN)
- Option 2 : Canvas API vanilla
- Option 3 : CSS Grid pour calendrier

DONNÉES À AFFICHER :
- Par jour : nombre de séances + durée totale
- Par semaine : tendance
- Par mois : comparaison
- Séances favorites (les plus pratiquées)
```

---

## 6. Dashboard Admin

### Prompt

```
Crée le fichier admin.html dans le projet Yoga2 avec :

STRUCTURE :
- Vérification rôle admin (requireAdmin() au chargement)
- Navbar spéciale admin :
  - Logo + "Admin Panel"
  - Lien "Voir le site"
  - Bouton déconnexion
- Tabs/sections :
  1. Gestion des séances
  2. Statistiques globales (Phase 2)
  3. Gestion utilisateurs (Phase 2)

SECTION 1 : Gestion des séances
- Bouton "Nouvelle séance" (grand, évident) :
  - Ouvre modal de création
- Table/grid des séances existantes :
  - Colonnes : Titre | Niveau | Durée | Type | Actions
  - Actions : Modifier | Supprimer (avec confirmation)
  - Tri par colonnes
  - Search bar

MODAL CRÉATION/ÉDITION :
Formulaire en 2 étapes :

Étape 1 - Infos générales :
- Titre (input)
- Description (textarea)
- Durée (number, en minutes)
- Niveau (select : beginner | intermediate | advanced)
- Type (select : hatha | vinyasa | yin | flow)
- Objectifs (multi-select : détente, mobilité, renforcement, énergie)

Étape 2 - Postures :
- Liste dynamique de postures
- Bouton "Ajouter une posture"
- Chaque posture :
  - Nom (input)
  - Durée (number, en secondes)
  - Instructions (textarea)
  - Bouton supprimer
- Navigation : Précédent | Enregistrer

STYLE :
- Interface professionnelle mais zen
- Table responsive
- Modal fullscreen sur mobile
- Confirmation pour actions destructives
- Loading states

JAVASCRIPT (admin.js) :
- Vérifier rôle admin (redirect si non-admin)
- CRUD séances :
  - createSession(data)
  - updateSession(id, data)
  - deleteSession(id) avec confirmation
- Validation des données :
  - Tous les champs requis
  - Durée entre 5 et 120 min
  - Au moins 1 posture
- Logs des actions admin (logAdminAction)
- Toast notifications pour succès/erreur

SÉCURITÉ :
- Double confirmation pour suppression
- Log toutes les actions
- Sanitization des inputs (sanitizeInput de auth.js)

EN 2 CLICS :
1. Clic "Nouvelle séance"
2. Remplir titre, durée, niveau → Clic "Enregistrer"
(Les postures peuvent être optionnelles pour faire rapide)
```

---

## 7. Page Apprentissage

### Prompt

```
Crée le fichier learning.html dans le projet Yoga2 avec :

STRUCTURE :
- Navbar (standard)
- Hero :
  - "Comprendre le yoga"
  - "Approfondissez votre pratique avec des articles courts"
- Grid d'articles (cartes) :
  Catégories :
  1. Bases du yoga
  2. Respiration (Pranayama)
  3. Philosophie
  4. Postures (Asanas)
  5. Méditation

Chaque carte :
- Icône/emoji
- Titre
- Temps de lecture (ex: 2 min)
- Snippet (2 lignes)
- Lien "Lire"

CONTENU DES ARTICLES (exemples) :

Article 1 : "Qu'est-ce que le yoga ?"
- Origine et histoire courte
- Les 8 branches du yoga
- Yoga moderne vs traditionnel
- Bénéfices scientifiques

Article 2 : "Pourquoi respirer par le nez ?"
- Filtration de l'air
- Activation du système parasympathique
- Connexion souffle-mental
- Exercice pratique

Article 3 : "La philosophie du yoga"
- Les Yamas et Niyamas
- Non-violence (Ahimsa)
- Contentement (Santosha)
- Application au quotidien

Article 4 : "Les postures de base"
- Chien tête en bas
- Guerrier
- Posture de l'enfant
- Alignements clés

Article 5 : "Méditation pour débutants"
- Différence yoga/méditation
- Comment commencer
- 5 minutes par jour
- Gérer les pensées

STYLE :
- Layout type blog/magazine
- Cards élégantes
- Icônes minimalistes
- Typo serif pour titres d'articles
- Espacement généreux

JAVASCRIPT (learning.js) :
- Charger articles depuis data/content.json (ou hardcodé)
- Modal ou page dédiée pour lire article complet
- Tracking : articles lus (localStorage)
- Search dans articles
- Filtre par catégorie

FORMAT ARTICLE :
{
  id, title, category, readTime, excerpt,
  content: "Markdown ou HTML",
  author: "Équipe Yoga App",
  publishedAt
}

PHASE 2 :
- Favoris d'articles
- Partage sur réseaux sociaux
- Vidéos explicatives
- Quiz interactif
```

---

## 8. Architecture Mobile Expo

### Prompt 1 : Setup initial

```
Crée la structure Expo Router complète pour l'application mobile Yoga :

STRUCTURE :
mobile/
├── app/
│   ├── _layout.tsx              # Root layout
│   ├── (tabs)/
│   │   ├── _layout.tsx          # Tabs layout
│   │   ├── index.tsx            # Accueil
│   │   ├── sessions.tsx         # Liste séances
│   │   ├── breathing.tsx        # Respiration
│   │   └── progress.tsx         # Progression
│   ├── auth/
│   │   ├── _layout.tsx          # Auth stack
│   │   ├── login.tsx
│   │   └── register.tsx
│   ├── session/
│   │   └── [id].tsx             # Player dynamique
│   └── +not-found.tsx
├── components/
│   ├── ThemedText.tsx
│   ├── ThemedView.tsx
│   ├── SessionCard.tsx
│   └── BreathingCircle.tsx
├── hooks/
│   ├── useAuth.ts
│   ├── useTheme.ts
│   └── useSessions.ts
├── services/
│   ├── auth.service.ts
│   ├── sessions.service.ts
│   └── storage.service.ts
├── styles/
│   ├── colors.ts
│   └── typography.ts
├── package.json
├── app.json
└── tsconfig.json

FICHIERS :

package.json :
{
  "name": "yoga-mobile",
  "version": "1.0.0",
  "main": "expo-router/entry",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios"
  },
  "dependencies": {
    "expo": "~50.0.0",
    "expo-router": "~3.4.0",
    "react-native": "0.73.0",
    "react-native-safe-area-context": "4.8.0",
    "react-native-screens": "~3.29.0",
    "@react-native-async-storage/async-storage": "1.21.0"
  }
}

app.json :
{
  "expo": {
    "name": "Yoga App",
    "slug": "yoga-app",
    "scheme": "yoga",
    "platforms": ["ios", "android"],
    "orientation": "portrait"
  }
}

Utilise TypeScript pour tout.
Implémente le même système d'auth que le web (adapté pour AsyncStorage).
Palette de couleurs identique (thème clair/sombre).
```

### Prompt 2 : Page d'accueil mobile

```
Crée app/(tabs)/index.tsx pour la page d'accueil mobile :

COMPOSANTS :
- Header avec salutation
- Quick actions (3 gros boutons) :
  - Séance du jour
  - Respiration rapide
  - Étirement doux
- Section "Continuer"
- Stats rapides (horizontal scroll)
- Séances populaires (carousel)

STYLE :
- SafeAreaView
- ScrollView
- Cartes avec ombre
- Animations Animated API
- Haptic feedback sur boutons

CODE :
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { useAuth } from '@/hooks/useAuth';
import { useSessions } from '@/hooks/useSessions';
import ThemedText from '@/components/ThemedText';
import SessionCard from '@/components/SessionCard';

Export default function HomeScreen() {
  const { user } = useAuth();
  const { sessions } = useSessions();

  // Logique...
}

Navigation vers autres pages avec router.push().
Gérer l'état de loading.
```

### Prompt 3 : Authentification mobile

```
Crée hooks/useAuth.ts pour gérer l'auth mobile :

FEATURES :
- login(email, password)
- register(email, password, name)
- logout()
- getCurrentUser()
- isAuthenticated (state)

STOCKAGE :
- AsyncStorage pour persister token
- SecureStore pour données sensibles (Phase 2)

SYNCHRONISATION :
- Compatible avec l'auth web (même format)
- Hash SHA-256 identique
- Format de token identique

CODE :
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fonctions...

  return { user, loading, login, register, logout };
}

Utilise les mêmes validations que auth.js web.
```

---

## 🎯 Ordre de Développement Recommandé

1. ✅ **Base** (fait) : index, login, register, styles, auth
2. **Dashboard** : dashboard.html + navbar
3. **Sessions** : sessions.html + sessions.js (filtres)
4. **Player** : session-player.html + player.js (timer)
5. **Breathing** : breathing.html + breathing.js (animations)
6. **Progress** : progress.html + progress.js (stats)
7. **Admin** : admin.html + admin.js (CRUD)
8. **Learning** : learning.html + learning.js (contenu)
9. **Mobile** : Structure Expo + pages principales

---

## 💡 Conseils pour Utiliser ces Prompts

1. **Copier-coller directement** dans votre IA préférée
2. **Préciser le contexte** : "Dans le projet Yoga2 existant..."
3. **Demander des ajustements** si besoin
4. **Tester immédiatement** après génération
5. **Itérer** si quelque chose ne fonctionne pas

### Exemple d'utilisation

```
Contexte : Je travaille sur le projet Yoga2. J'ai déjà :
- index.html, login.html, register.html (faits)
- styles.css, themes.css, auth.js, theme.js (faits)
- LocalStorage configuré avec séances d'exemple

Maintenant, je veux :
[COLLER LE PROMPT CI-DESSUS]

Adapte si nécessaire pour être cohérent avec l'existant.
```

---

## 🔧 Prompts Utilitaires

### Ajouter un composant réutilisable

```
Crée un composant réutilisable "Card" dans components/Card.js :
- Props : title, description, image, onClick
- Style : même que .session-card existant
- Hover effects
- Responsive
- Export comme classe ou fonction
```

### Ajouter un nouveau type de séance

```
Ajoute un nouveau type de séance "Restauratif" :
- Dans sessions.js : ajouter "restorative" aux types valides
- Dans sessions.html : ajouter option dans le filtre
- Dans data : créer 2 séances de type restauratif
- Style : couleur badge = vert doux
```

### Améliorer l'accessibilité

```
Améliore l'accessibilité de l'application :
- Ajouter aria-labels sur tous les boutons
- Assurer contraste WCAG AA (4.5:1)
- Navigation au clavier (tab order)
- Screen reader friendly
- Focus visible
- Textes alternatifs sur images
```

### Optimiser les performances

```
Optimise les performances de l'app :
- Lazy loading des images
- Debounce sur la search bar
- Virtual scrolling pour liste longue
- Code splitting (si applicable)
- Minification CSS/JS
- Cache localStorage (stratégie)
```

---

## 📚 Ressources Complémentaires

- [MDN Web Docs](https://developer.mozilla.org/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Native](https://reactnative.dev/)
- [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)

---

**Bon développement ! 🚀**

_Mis à jour : 23 janvier 2026_
