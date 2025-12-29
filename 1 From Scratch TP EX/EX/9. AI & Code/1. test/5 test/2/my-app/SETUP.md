# Guide de configuration

## Configuration Supabase

### 1. Activer votre projet Supabase

Votre projet Supabase est actuellement **INACTIVE**. Vous devez d'abord l'activer depuis le dashboard Supabase.

### 2. Appliquer la migration

Une fois le projet activé, appliquez la migration SQL :

1. Allez sur https://app.supabase.com
2. Sélectionnez votre projet : **MILOSNIKOLA's Project**
3. Allez dans **SQL Editor**
4. Copiez le contenu du fichier `supabase/migrations/20240101000000_initial_schema.sql`
5. Collez et exécutez la requête

### 3. Configurer les variables d'environnement

Créez un fichier `.env.local` à la racine du projet avec les valeurs suivantes :

```env
NEXT_PUBLIC_SUPABASE_URL=https://qfxbsomjjbfgrsgfybce.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle_anon
```

Pour obtenir votre clé anon :
1. Allez dans votre projet Supabase
2. **Settings** → **API**
3. Copiez la **anon/public key**

### 4. Démarrer l'application

```bash
npm run dev
```

L'application sera accessible sur http://localhost:3000

## Structure de la base de données

### Table `clients`
- `id` (UUID, PRIMARY KEY)
- `name` (VARCHAR, NOT NULL)
- `email` (VARCHAR, UNIQUE)
- `website` (VARCHAR)
- `status` (VARCHAR: 'actif' ou 'inactif')
- `notes` (TEXT)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### Table `projects`
- `id` (UUID, PRIMARY KEY)
- `name` (VARCHAR, NOT NULL)
- `client_id` (UUID, FOREIGN KEY → clients.id)
- `description` (TEXT)
- `budget` (DECIMAL)
- `status` (VARCHAR: 'termine' ou 'non_acheve')
- `start_date` (DATE)
- `end_date` (DATE)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### Table `tasks`
- `id` (UUID, PRIMARY KEY)
- `name` (VARCHAR, NOT NULL)
- `project_id` (UUID, FOREIGN KEY → projects.id)
- `description` (TEXT)
- `status` (VARCHAR: 'ouvert', 'en_cours', 'en_attente', 'termine')
- `priority` (VARCHAR: 'elevee', 'moyenne', 'basse')
- `start_date` (DATE)
- `end_date` (DATE)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

## Fonctionnalités de la page d'accueil

La page d'accueil affiche un tableau triable avec :
- **Nom du client** - Triable
- **Email** - Triable
- **Statut** (Actif/Inactif) - Triable
- **Nombre de projets** - Triable
- **Budget total des projets** - Triable (formaté en EUR)
- **Date de création** - Triable

### Tri
Cliquez sur les en-têtes de colonnes pour trier. Un clic inverse l'ordre de tri.

