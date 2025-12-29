-- Migration optionnelle: Validations supplémentaires recommandées
-- À appliquer après la migration initiale si vous souhaitez ces validations

-- Validation des dates (end_date >= start_date)
ALTER TABLE projects 
ADD CONSTRAINT check_project_dates 
CHECK (end_date IS NULL OR start_date IS NULL OR end_date >= start_date);

ALTER TABLE tasks 
ADD CONSTRAINT check_task_dates 
CHECK (end_date IS NULL OR start_date IS NULL OR end_date >= start_date);

-- Validation du format email
ALTER TABLE clients 
ADD CONSTRAINT check_email_format 
CHECK (email IS NULL OR email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- Validation de l'URL du site web (optionnel)
ALTER TABLE clients 
ADD CONSTRAINT check_website_format 
CHECK (website IS NULL OR website ~* '^https?://[^\s/$.?#].[^\s]*$');

