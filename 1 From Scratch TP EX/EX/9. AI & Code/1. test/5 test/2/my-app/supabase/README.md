# Structure de base de données Supabase

## Tables créées

### 1. `clients`
Gère les informations des clients.

**Colonnes:**
- `id` (UUID, PRIMARY KEY) - Identifiant unique
- `name` (VARCHAR) - Nom du client (requis)
- `email` (VARCHAR) - Email du client
- `website` (VARCHAR) - Site web du client
- `status` (VARCHAR) - Statut: 'actif' ou 'inactif' (défaut: 'actif')
- `notes` (TEXT) - Notes supplémentaires
- `created_at` (TIMESTAMP) - Date de création
- `updated_at` (TIMESTAMP) - Date de mise à jour (auto)

### 2. `projects`
Gère les projets associés aux clients.

**Colonnes:**
- `id` (UUID, PRIMARY KEY) - Identifiant unique
- `name` (VARCHAR) - Nom du projet (requis)
- `client_id` (UUID, FOREIGN KEY) - Référence au client (CASCADE DELETE)
- `description` (TEXT) - Description du projet
- `budget` (DECIMAL) - Budget du projet
- `status` (VARCHAR) - Statut: 'termine' ou 'non_acheve' (défaut: 'non_acheve')
- `start_date` (DATE) - Date de début
- `end_date` (DATE) - Date de fin
- `created_at` (TIMESTAMP) - Date de création
- `updated_at` (TIMESTAMP) - Date de mise à jour (auto)

### 3. `tasks`
Gère les tâches associées aux projets.

**Colonnes:**
- `id` (UUID, PRIMARY KEY) - Identifiant unique
- `name` (VARCHAR) - Nom de la tâche (requis)
- `project_id` (UUID, FOREIGN KEY) - Référence au projet (CASCADE DELETE)
- `description` (TEXT) - Description de la tâche
- `status` (VARCHAR) - Statut: 'ouvert', 'en_cours', 'en_attente', 'termine' (défaut: 'ouvert')
- `priority` (VARCHAR) - Priorité: 'elevee', 'moyenne', 'basse' (défaut: 'moyenne')
- `start_date` (DATE) - Date de début
- `end_date` (DATE) - Date de fin
- `created_at` (TIMESTAMP) - Date de création
- `updated_at` (TIMESTAMP) - Date de mise à jour (auto)

## Fonctionnalités incluses

✅ **Index de performance** - Index sur les clés étrangères et colonnes fréquemment filtrées
✅ **Triggers automatiques** - Mise à jour automatique de `updated_at`
✅ **Contraintes de validation** - Validation des valeurs enum pour status et priority
✅ **Cascade delete** - Suppression en cascade des projets et tâches lors de la suppression d'un client/projet

## Recommandations supplémentaires

### 1. Row Level Security (RLS)
Puisque l'application n'a pas d'authentification pour l'instant, vous pouvez:
- **Option A**: Désactiver RLS temporairement (développement uniquement)
- **Option B**: Activer RLS avec des politiques publiques pour toutes les opérations

```sql
-- Exemple pour activer RLS avec accès public (à utiliser avec précaution)
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

-- Politiques publiques (à adapter selon vos besoins)
CREATE POLICY "Public access" ON clients FOR ALL USING (true);
CREATE POLICY "Public access" ON projects FOR ALL USING (true);
CREATE POLICY "Public access" ON tasks FOR ALL USING (true);
```

### 2. Validation des dates
Considérer l'ajout d'une contrainte pour vérifier que `end_date >= start_date`:

```sql
-- Pour les projets
ALTER TABLE projects ADD CONSTRAINT check_project_dates 
    CHECK (end_date IS NULL OR start_date IS NULL OR end_date >= start_date);

-- Pour les tâches
ALTER TABLE tasks ADD CONSTRAINT check_task_dates 
    CHECK (end_date IS NULL OR start_date IS NULL OR end_date >= start_date);
```

### 3. Validation de l'email
Ajouter une contrainte pour valider le format email:

```sql
ALTER TABLE clients ADD CONSTRAINT check_email_format 
    CHECK (email IS NULL OR email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');
```

### 4. Colonnes supplémentaires recommandées
- **Pour les clients**: `phone` (téléphone), `address` (adresse)
- **Pour les projets**: `progress` (pourcentage d'avancement), `color` (couleur pour l'UI)
- **Pour les tâches**: `assigned_to` (si vous ajoutez des utilisateurs plus tard), `estimated_hours` (heures estimées)

### 5. Vues utiles
Créer des vues pour faciliter les requêtes:

```sql
-- Vue pour les projets avec informations du client
CREATE VIEW projects_with_client AS
SELECT 
    p.*,
    c.name as client_name,
    c.email as client_email,
    c.status as client_status
FROM projects p
JOIN clients c ON p.client_id = c.id;

-- Vue pour les tâches avec informations du projet et client
CREATE VIEW tasks_with_project AS
SELECT 
    t.*,
    p.name as project_name,
    p.client_id,
    c.name as client_name
FROM tasks t
JOIN projects p ON t.project_id = p.id
JOIN clients c ON p.client_id = c.id;
```

## Application de la migration

### Via Supabase Dashboard
1. Allez dans votre projet Supabase
2. Naviguez vers "SQL Editor"
3. Copiez-collez le contenu de `supabase/migrations/20240101000000_initial_schema.sql`
4. Exécutez la requête

### Via Supabase CLI
```bash
# Si vous utilisez Supabase CLI localement
supabase db push
```

## Prochaines étapes

1. ✅ Appliquer la migration dans votre projet Supabase
2. ⏭️ Configurer Row Level Security selon vos besoins
3. ⏭️ Ajouter les validations supplémentaires si nécessaire
4. ⏭️ Installer le client Supabase dans votre application Next.js
5. ⏭️ Créer les composants React pour gérer les clients, projets et tâches

