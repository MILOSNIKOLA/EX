# Next.js Portfolio - Documentation

## 🚀 Installation

```bash
cd nextjs-portfolio
npm install
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## 📁 Structure Complète

```
nextjs-portfolio/
├── app/                          # App Router Next.js
│   ├── layout.tsx               # Layout racine avec Header/Footer
│   ├── page.tsx                 # Page d'accueil
│   ├── globals.scss             # Styles globaux
│   ├── about/
│   │   └── page.tsx             # Page À propos
│   ├── projects/
│   │   └── page.tsx             # Page Projets
│   └── contact/
│       └── page.tsx             # Page Contact
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Navigation principale
│   │   ├── Footer.tsx           # Footer
│   │   ├── Navigation.tsx       # Menu navigation
│   │   ├── Header.module.scss
│   │   ├── Footer.module.scss
│   │   └── Navigation.module.scss
│   ├── ui/                      # Composants UI réutilisables
│   │   ├── Button.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Button.module.scss
│   │   └── ProjectCard.module.scss
│   └── sections/                # Sections de pages
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Projects.tsx
│       ├── About.tsx
│       ├── Contact.tsx
│       └── *.module.scss
├── lib/
│   └── data/                    # Données statiques
│       ├── projects.ts          # Liste des projets
│       └── services.ts          # Liste des services
├── styles/
│   └── _variables.scss          # Variables Sass partagées
├── public/                      # Assets statiques
├── next.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Design System

### Couleurs (via variables Sass)
- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Background Dark: `#0f172a` (Slate-900)
- Background Section: `#1e293b` (Slate-800)
- Text Primary: `#ffffff`
- Text Secondary: `#e2e8f0`

### Typographie
- Police: Inter (via Next.js font optimization)
- Headings: 700-800 weight
- Body: 400-500 weight

## 📝 Prochaines Étapes

1. **Compléter les pages manquantes** :
   - `app/about/page.tsx` - Page À propos avec stats
   - `app/contact/page.tsx` - Formulaire de contact

2. **Ajouter des composants** :
   - Section About avec stats animées
   - Formulaire de contact fonctionnel
   - Timeline pour la page About (optionnel)

3. **Optimisations** :
   - Metadata SEO pour chaque page
   - Images optimisées avec next/image
   - Lazy loading des composants lourds

4. **Fonctionnalités avancées** (optionnel) :
   - Animations avec framer-motion
   - Mode sombre/clair toggle
   - Blog avec MDX
   - CMS headless (Contentful, Sanity)

## 🔄 Migration depuis HTML/CSS

Les styles Sass existants ont été adaptés en :
- CSS Modules (`.module.scss`) pour les composants
- Variables Sass partagées dans `styles/_variables.scss`
- Styles globaux dans `app/globals.scss`

### Avantages de cette architecture :
✅ Composants réutilisables et testables
✅ Styles scoped par composant (pas de conflits)
✅ TypeScript pour la sécurité des types
✅ Routing automatique avec App Router
✅ Optimisations Next.js (images, fonts, code splitting)
✅ Prêt pour le déploiement (Vercel, Netlify, etc.)


