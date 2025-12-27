// Sélectionner les éléments du DOM
const form = document.getElementById('todoForm');
const input = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// Clé pour le localStorage
const STORAGE_KEY = 'todos';

// Charger les todos depuis le localStorage au lancement
function loadTodos() {
    const storedTodos = localStorage.getItem(STORAGE_KEY);
    
    if (storedTodos) {
        const todos = JSON.parse(storedTodos);
        todos.forEach(todo => {
            addTodoToDOM(todo);
        });
    } else {
        showEmptyMessage();
    }
}

// Afficher un message si la liste est vide
function showEmptyMessage() {
    if (todoList.children.length === 0) {
        const emptyMsg = document.createElement('li');
        emptyMsg.className = 'empty-message';
        emptyMsg.textContent = 'Aucune tâche. Ajoutez-en une!';
        todoList.appendChild(emptyMsg);
    }
}

// Supprimer le message vide
function removeEmptyMessage() {
    const emptyMsg = todoList.querySelector('.empty-message');
    if (emptyMsg) {
        emptyMsg.remove();
    }
}

// Obtenir tous les todos du DOM
function getTodosFromDOM() {
    const items = todoList.querySelectorAll('.todo-item');
    return Array.from(items).map(item => {
        return item.querySelector('.todo-text').textContent;
    });
}

// Sauvegarder les todos dans le localStorage
function saveTodos() {
    const todos = getTodosFromDOM();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// Ajouter un todo au DOM
function addTodoToDOM(todoText) {
    removeEmptyMessage();
    
    const li = document.createElement('li');
    li.className = 'todo-item';
    
    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = todoText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Supprimer';
    deleteBtn.type = 'button';
    
    // Ajouter l'événement de suppression
    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        li.remove();
        saveTodos();
        
        // Afficher le message vide s'il n'y a plus de todos
        if (todoList.children.length === 0) {
            showEmptyMessage();
        }
    });
    
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

// Gérer la soumission du formulaire
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const todoText = input.value.trim();
    
    if (todoText !== '') {
        addTodoToDOM(todoText);
        saveTodos();
        input.value = '';
        input.focus();
    }
});

// Charger les todos au lancement
loadTodos();
