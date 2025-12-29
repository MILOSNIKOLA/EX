-- Migration initiale pour la gestion de clients, projets et tâches
-- Création des tables avec toutes les colonnes requises

-- Table des clients
CREATE TABLE IF NOT EXISTS clients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    website VARCHAR(255),
    status VARCHAR(20) NOT NULL DEFAULT 'actif' CHECK (status IN ('actif', 'inactif')),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des projets
CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    description TEXT,
    budget DECIMAL(12, 2),
    status VARCHAR(20) NOT NULL DEFAULT 'non_acheve' CHECK (status IN ('termine', 'non_acheve')),
    start_date DATE,
    end_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des tâches
CREATE TABLE IF NOT EXISTS tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    description TEXT,
    status VARCHAR(20) NOT NULL DEFAULT 'ouvert' CHECK (status IN ('ouvert', 'en_cours', 'en_attente', 'termine')),
    priority VARCHAR(20) NOT NULL DEFAULT 'moyenne' CHECK (priority IN ('elevee', 'moyenne', 'basse')),
    start_date DATE,
    end_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour améliorer les performances des requêtes
CREATE INDEX IF NOT EXISTS idx_projects_client_id ON projects(client_id);
CREATE INDEX IF NOT EXISTS idx_tasks_project_id ON tasks(project_id);
CREATE INDEX IF NOT EXISTS idx_clients_status ON clients(status);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);
CREATE INDEX IF NOT EXISTS idx_tasks_priority ON tasks(priority);

-- Fonction pour mettre à jour automatiquement updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers pour mettre à jour automatiquement updated_at
CREATE TRIGGER update_clients_updated_at
    BEFORE UPDATE ON clients
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at
    BEFORE UPDATE ON projects
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tasks_updated_at
    BEFORE UPDATE ON tasks
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Commentaires pour la documentation
COMMENT ON TABLE clients IS 'Table des clients avec leurs informations de contact et statut';
COMMENT ON TABLE projects IS 'Table des projets associés aux clients';
COMMENT ON TABLE tasks IS 'Table des tâches associées aux projets';

COMMENT ON COLUMN clients.status IS 'Statut du client: actif ou inactif';
COMMENT ON COLUMN projects.status IS 'Statut du projet: termine ou non_acheve';
COMMENT ON COLUMN tasks.status IS 'Statut de la tâche: ouvert, en_cours, en_attente, termine';
COMMENT ON COLUMN tasks.priority IS 'Priorité de la tâche: elevee, moyenne, basse';

