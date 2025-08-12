// Globals
const resourceUrl = 'http://localhost:3000/api/todos';

// Element caching
const createForm = document.getElementById('createForm');
const todosList = document.getElementById('todosList');

createForm.addEventListener('submit', async (ev) => {
  ev.preventDefault();
  const data = new FormData(ev.currentTarget);
  const title = data.get('title');
  ev.currentTarget.reset();

  if (title) {
    const resp = await fetch(resourceUrl, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
    const todo = await resp.json();
    renderTodo(todo);
  }
});

function renderTodo(todo) {
  const listItem = document.createElement('li');
  listItem.dataset.id = todo.id;
  listItem.textContent = todo.title;
  todosList.appendChild(listItem);
}

async function initializeTodos() {
  const resp = await fetch(resourceUrl);
  const todos = await resp.json();
  todos.forEach(renderTodo);
}

initializeTodos();
