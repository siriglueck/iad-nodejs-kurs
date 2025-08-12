const todos = [
  { id: 1, title: 'Module Systems', completed: true },
  { id: 2, title: 'TypeScript', completed: false },
];

export function getAll() {
  return todos;
}

export function createTodo(title) {
  const id = (todos.at(-1)?.id ?? 0) + 1;
  const todo = { id, title, completed: false };
  todos.push(todo);
  return todo;
}

export function toggleTodo(id) {
  const todo = todos.find(t => t.id === id);
  todo.completed = !todo.completed;
  return todo;
}

export function deleteTodo(id) {
  const ix = todos.findIndex(t => t.id === id);
  todos.splice(ix, 1);
}

async function sleep(ms) {
  return new Promise((resolv) => {
    setTimeout(() => {
      resolv();
    }, ms);
  });
}

export async function getAllAsync() {
  await sleep(3000);
  return getAll();
}

export async function createTodoAsync(title) {
  await sleep(3000);
  return createTodo(title);
}
