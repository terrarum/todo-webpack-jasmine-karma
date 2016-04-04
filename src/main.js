// Load css.
require("./main.css");

// Import templates.
var pageTemplate = require('./templates/todoList.hbs');
var todosTemplate = require('./templates/_todoList.hbs');

// Import Todos class.
import Todos from './modules/Todos';

// Get required element references.
const contentElement = document.querySelector('.js-content');

// Render page template.
contentElement.innerHTML = pageTemplate();

// Get child element references.
const listElement = document.querySelector('.js-list');

// Todo's class.
const todos = new Todos();

// Add listeners for delete buttons.
contentElement.addEventListener("click", function(event) {
    if (event.target.classList.contains('js-delete')) {
        let index = event.target.dataset.index;
        todos.delete(index);
    }
});

// Add listeners for checkboxes.
contentElement.addEventListener("change", function(event) {
    if (event.target.classList.contains('js-checkbox')) {
        let index = event.target.dataset.index;
        todos.toggleDone(index);
    }
});

// Render the todo list when the todos list has changed.
document.addEventListener("TODOLIST:MODIFIED", function(event) {
    listElement.innerHTML = todosTemplate({todoList: todos.getAllTodos()});
});

// Add new tasks.
document.querySelector('.js-addTodo').addEventListener("submit", function(event) {
    event.preventDefault();
    todos.add(document.querySelector('.js-addTodoTitle').value);
    document.querySelector('.js-addTodoTitle').value = '';
});

// Add a new todo item.
todos.add("Walk the dog");
todos.add("Do laundry", true);
todos.add("Mundane task");
todos.add("Mow the garden", true);
todos.add("Eject Iceland's president");