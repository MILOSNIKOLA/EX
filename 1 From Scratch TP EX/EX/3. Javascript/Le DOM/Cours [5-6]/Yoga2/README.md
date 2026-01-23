# 🧘 Application Yoga 2026 - Guide Complet

## 📋 Vue d'ensemble

Application web et mobile de yoga complète avec :

- ✅ Authentification sécurisée (comptes utilisateurs)
- ✅ Thème clair/sombre (bouton en haut à droite)
- ✅ Séances de yoga filtrables et personnalisées
- ✅ Lecteur de séances avec timer
- ✅ Exercices de respiration guidée
- ✅ Suivi de progression
- ✅ Dashboard admin (ajout de séances en 2 clics)
- ✅ Design responsive (web + mobile)
- ✅ Architecture Expo Router pour mobile
- ✅ Sécurité feature par feature

---

## 🚀 Démarrage Rapide

### Installation

1. **Cloner/télécharger le projet**

   ```bash
   cd Yoga2
   ```

2. **Ouvrir avec un serveur local**

   Option 1 - VS Code Live Server :
   - Installer l'extension "Live Server"
   - Clic droit sur `index.html` > Open with Live Server

   Option 2 - Python :

   ```bash
   python -m http.server 8000
   ```

   Puis ouvrir : http://localhost:8000

   Option 3 - Node.js :

   ```bash
   npx serve
   ```

### Compte Admin par défaut

Au premier lancement, créez un compte avec un de ces emails :

- `admin@yoga-app.com`
- `admin@example.com`

Le compte sera automatiquement admin.

---

## 📁 Structure du Projet

```
Yoga2/
├── 📄 index.html              # Page d'accueil
├── 📄 login.html              # Connexion
├── 📄 register.html           # Inscription
├── 📄 dashboard.html          # Dashboard utilisateur
├── 📄 sessions.html           # Liste des séances
├── 📄 session-player.html     # Lecteur de séance
├── 📄 breathing.html          # Exercices respiration
├── 📄 admin.html              # Dashboard admin
│
├── 📁 css/
│   ├── styles.css             # Styles principaux
│   └── themes.css             # Thèmes clair/sombre + auth
│
├── 📁 js/
│   ├── app.js                 # Point d'entrée principal
│   ├── auth.js                # Système d'authentification
│   ├── theme.js               # Gestion thème clair/sombre
│   ├── sessions.js            # Gestion des séances (à créer)
│   ├── player.js              # Lecteur de séance (à créer)
│   ├── breathing.js           # Module respiration (à créer)
│   └── admin.js               # Interface admin (à créer)
│
├── 📁 docs/
│   ├── ARCHITECTURE.md        # Architecture complète
│   ├── SECURITY.md            # Guide de sécurité
│   └── PROMPTS.md             # Prompts de développement
│
└── 📄 README.md               # Ce fichier
```

---

## 🎨 Fonctionnalités

### ✅ Implémentées

1. **Page d'accueil**
   - Hero avec appel à l'action
   - Accès rapides (Séance du jour, Respiration, Étirements)
   - Section features (4 piliers)
   - Aperçu séances populaires

2. **Authentification**
   - Inscription avec validation
   - Connexion sécurisée
   - Protection brute force (5 tentatives max)
   - Hachage SHA-256 des mots de passe
   - Session timeout (30 min)
   - Auto-logout sur inactivité

3. **Thème clair/sombre**
   - Bouton toggle en haut à droite
   - Transition douce (0.3s)
   - Sauvegarde préférence
   - Icons animés (soleil/lune)

4. **Données d'exemple**
   - 5 séances prédéfinies au premier lancement
   - Niveaux variés (débutant à avancé)
   - Types différents (Hatha, Vinyasa, Yin)

### 🚧 À compléter

5. **Dashboard utilisateur** (fichier HTML à créer)
6. **Liste des séances** (fichier HTML à créer)
7. **Lecteur de séances** (fichier HTML à créer)
8. **Respiration guidée** (fichier HTML à créer)
9. **Dashboard admin** (fichier HTML à créer)
10. **Application mobile** (structure Expo Router à créer)

---

## 🔐 Sécurité

### Implémentée

- ✅ Hachage des mots de passe (SHA-256)
- ✅ Validation inputs (email, nom, mot de passe)
- ✅ Protection brute force (rate limiting)
- ✅ Session management (JWT-like tokens)
- ✅ Auto-logout sur inactivité (30 min)
- ✅ Rôles utilisateurs (user/admin)
- ✅ Logs d'activité

### À ajouter (Phase 2)

- 🔄 Backend réel (Firebase/Supabase)
- 🔄 Vraie signature JWT
- 🔄 HTTPS forcé
- 🔄 CSP headers
- 🔄 2FA pour admin

Voir [SECURITY.md](docs/SECURITY.md) pour tous les détails.

---

## 🎯 Utilisation

### En tant qu'utilisateur

1. **S'inscrire**
   - Aller sur `register.html`
   - Remplir le formulaire
   - Choisir son niveau

2. **Se connecter**
   - Email + mot de passe
   - Option "Se souvenir de moi"

3. **Pratiquer**
   - Parcourir les séances
   - Filtrer par niveau/durée/objectif
   - Démarrer une séance
   - Suivre sa progression

### En tant qu'admin

1. **Se connecter avec email admin**
   - `admin@yoga-app.com` (à créer au premier lancement)

2. **Accéder au dashboard admin**
   - Ajouter des séances en 2 clics
   - Modifier/supprimer des séances
   - Voir les statistiques

---

## 🛠️ Développement

### Technologies

- **Frontend** : HTML5, CSS3, JavaScript ES6+
- **Storage** : localStorage / sessionStorage (Phase 1)
- **Mobile** : React Native + Expo Router (Phase 2)
- **Backend** : Firebase/Supabase (Phase 3)

### Ajouter une nouvelle page

Voir [PROMPTS.md](docs/PROMPTS.md) pour les prompts copier-coller.

Exemple pour créer la page dashboard :

```
Je veux créer le dashboard utilisateur (dashboard.html) avec :
- Navbar avec logo et menu
- Section de bienvenue avec nom de l'utilisateur
- Stats (séances complétées, temps total, streak)
- Séances récentes
- Bouton "Nouvelle séance"
Utilise le même style que les autres pages (themes.css + styles.css).
```

---

## 📱 Version Mobile (Expo Router)

### Structure

```
mobile/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Accueil
│   │   ├── sessions.tsx       # Séances
│   │   ├── breathing.tsx      # Respiration
│   │   └── progress.tsx       # Progression
│   ├── auth/
│   │   ├── login.tsx
│   │   └── register.tsx
│   └── session/
│       └── [id].tsx           # Player
├── package.json
└── app.json
```

### Installation mobile

```bash
cd mobile
npm install
npx expo start
```

Voir [ARCHITECTURE.md](docs/ARCHITECTURE.md) pour tous les détails.

---

## 🎨 Personnalisation

### Changer les couleurs

Éditer `css/themes.css` :

```css
:root {
  --accent: #6b46c1; /* Violet par défaut */
  --accent-hover: #553c9a;
  /* ... */
}
```

### Ajouter une séance

Via l'interface admin (quand implémentée) ou manuellement :

```javascript
const newSession = {
  id: crypto.randomUUID(),
  title: "Ma séance",
  description: "Description",
  duration: 20,
  level: "beginner",
  type: "hatha",
  objectives: ["détente"],
  poses: [{ name: "Posture 1", duration: 60, instructions: "..." }],
  createdAt: new Date().toISOString(),
};

const sessions = JSON.parse(localStorage.getItem("sessions") || "[]");
sessions.push(newSession);
localStorage.setItem("sessions", JSON.stringify(sessions));
```

---

## 🐛 Résolution de problèmes

### La page est blanche

1. Vérifier que vous utilisez un serveur local (pas `file://`)
2. Ouvrir la console (F12) pour voir les erreurs
3. Vider le cache et recharger (Ctrl+Shift+R)

### Le thème ne change pas

1. Vérifier que `theme.js` est chargé
2. Regarder la console pour erreurs
3. Essayer de vider localStorage : `localStorage.clear()`

### "Non authentifié" en boucle

1. Vérifier que vous êtes connecté
2. Regarder sessionStorage : `sessionStorage.getItem('authToken')`
3. Vous reconnecter

### Les séances ne s'affichent pas

1. Vérifier localStorage : `localStorage.getItem('sessions')`
2. Recharger la page (les séances d'exemple se créent au premier chargement)

---

## 📚 Documentation Complète

- [ARCHITECTURE.md](docs/ARCHITECTURE.md) - Architecture technique détaillée
- [SECURITY.md](docs/SECURITY.md) - Guide de sécurité complet
- [PROMPTS.md](docs/PROMPTS.md) - Prompts pour développement feature par feature

---

## 🗺️ Roadmap

### Phase 1 - MVP ✅ (En cours)

- [x] Structure HTML/CSS de base
- [x] Système d'authentification
- [x] Thème clair/sombre
- [x] 5 séances prédéfinies
- [ ] Dashboard utilisateur
- [ ] Lecteur de séance basique
- [ ] Module respiration
- [ ] Dashboard admin

### Phase 2 - Mobile (Prochaine)

- [ ] Setup Expo Router
- [ ] Pages principales mobile
- [ ] Synchronisation web ↔ mobile
- [ ] Notifications push

### Phase 3 - Backend

- [ ] Migration vers Firebase/Supabase
- [ ] API REST
- [ ] Upload d'images/vidéos
- [ ] Vraie authentification serveur

### Phase 4 - Avancé

- [ ] IA pour recommandations
- [ ] Vidéos des postures
- [ ] Communauté
- [ ] Mode premium

---

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit (`git commit -m 'Add AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

## 📄 Licence

Ce projet est sous licence MIT. Voir `LICENSE` pour plus d'informations.

---

## 💬 Support

Pour toute question :

- Consulter la documentation dans `/docs`
- Ouvrir une issue sur GitHub
- Contact : yoga-app@example.com

---

## 🙏 Remerciements

- Inspiration : philosophie du yoga
- Design : Material Design + iOS guidelines
- Icons : Lucide Icons
- Fonts : Inter + Playfair Display

---

**Prenez soin de vous. Pratiquez régulièrement. Respirez profondément.** 🧘‍♀️

_Mis à jour : 23 janvier 2026_
