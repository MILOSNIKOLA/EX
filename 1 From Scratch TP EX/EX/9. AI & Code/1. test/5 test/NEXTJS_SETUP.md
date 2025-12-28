# Guide de Setup Next.js

## 🚀 Installation

```bash
# Créer un nouveau projet Next.js
npx create-next-app@latest nextjs-portfolio --typescript --tailwind=false --app --no-src-dir

# Ou si vous préférez installer manuellement :
npm install next@latest react@latest react-dom@latest
npm install --save-dev typescript @types/react @types/node @types/react-dom
npm install sass
```

## 📦 Package.json de base

```json
{
  "name": "nextjs-portfolio",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "sass": "^1.69.0",
    "typescript": "^5.0.0"
  }
}
```

## ⚙️ Configuration Next.js

### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optimisation des images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Sass support (automatique avec sass installé)
}

module.exports = nextConfig
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 🎨 Support Sass

Next.js supporte Sass nativement. Importez directement :

```tsx
import styles from './Component.module.scss'
```

Ou pour les styles globaux :
```tsx
// app/layout.tsx
import './globals.scss'
```

