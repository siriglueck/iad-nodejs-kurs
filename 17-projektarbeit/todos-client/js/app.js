import { Controller } from './controller.js';
import { Model } from './model.js';
import { ArrayStore } from './store/array-store.js';
import { HttpStore } from './store/http-store.js';
import { LocalStore } from './store/local-store.js';
import { Templates } from './templates/index.js';
import { View } from './view.js';

const stores = {
  array: new ArrayStore(),
  local: new LocalStore(),
  cloud: new HttpStore('https://cloud.lean-stack.de/api/public/todos'),
  express: new HttpStore('http://localhost:3000/api/v1/todos'),
};

class TodoApp {
  constructor() {
    this.store = stores.express;
    this.model = new Model(this.store);
    this.view = new View(new Templates());
    this.controller = new Controller(this.model, this.view);
  }
}

const app = new TodoApp();

function initializeView() {
  app.controller.setView(document.location.hash);
}

// Initialize view and listen to hash changes
initializeView();
window.addEventListener('hashchange', initializeView);

fetch('http://localhost:3000/api/v1/author')
  .then(resp => resp.json())
  .then(author => {
    const elt = document.getElementById('authorInfo');
    elt.href = author.url;
    elt.textContent = author.name;
  })