# Yoga Flow 🧘

Application de yoga et respiration pour tous les niveaux. PWA responsive avec React/Next.js.

## Stack technique

- **Framework**: Next.js 14 (App Router)
- **UI**: Tailwind CSS + HeadlessUI + Heroicons
- **Animations**: Framer Motion
- **State**: Zustand
- **Auth**: NextAuth.js (Google + Apple)
- **Database**: PostgreSQL (Supabase)
- **Payments**: Stripe
- **Déploiement**: Vercel

## Démarrage rapide

```bash
# Installer les dépendances
npm install

# Copier les variables d'environnement
cp .env.example .env.local

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Structure du projet

```
src/
├── app/                    # Routes (App Router)
│   ├── page.tsx           # Home
│   ├── respirer/          # Exercices de respiration
│   ├── pratiquer/         # Liste des séances
│   ├── seance/[id]/       # Player de séance
│   ├── philosophie/       # Articles éducatifs
│   └── profil/            # Progression utilisateur
├── components/
│   ├── global/            # Layout, CTA, Timer
│   ├── home/              # Hero, QuickAccess
│   ├── seance/            # FilterBar, SeanceCard, Player
│   ├── respirer/          # BreathCircle
│   ├── philosophie/       # MiniArticle
│   └── profil/            # Streak, Stats
├── hooks/
│   ├── useTimer.ts        # Countdown + sonnette
│   ├── useBreath.ts       # Inhale/exhale + vibration
│   └── useUser.ts         # Session + abonnement
├── store/
│   ├── filters.ts         # Filtres séances (Zustand)
│   └── player.ts          # État lecture
└── lib/
    ├── constants.ts       # Données, séances, intentions
    ├── supabase.ts        # Client Supabase
    └── i18n.ts            # Internationalisation FR/EN
```

## Fonctionnalités

### MVP (Jour 1)
- ✅ Home avec intention du jour
- ✅ Liste des séances avec filtres
- ✅ Player de séance avec timer
- ✅ Exercices de respiration animés
- ✅ Profil avec streak

### V2 (À venir)
- [ ] Authentification Google/Apple
- [ ] Paywall Stripe
- [ ] 32 séances premium
- [ ] Statistiques détaillées

### V3 (À venir)
- [ ] PWA offline (Workbox)
- [ ] Notifications push
- [ ] Support multilingue complet

## Philosophie

Tone of voice : **calme, positif, inclusif, non culpabilisant**

- ✅ Mots à privilégier : « invite », « accueille », « respire », « sens »
- ❌ Mots à bannir : « doit », « performance », « brûler », « calories »

## Licence

MIT
