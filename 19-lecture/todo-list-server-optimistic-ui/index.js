'use strict'

const EDIT_BTN_CLASS = 'editBtn';
const DELETE_BTN_CLASS = 'deleteBtn';
const TITLE_CLASS = 'title';
const TODO_ITEM_SELECTOR = '.todoItem';
const DONE_CLASS = 'done';

const ul = document.querySelector('#todoList');
const idInput = document.querySelector('#id');
const titleInput = document.querySelector('#title');
const form = document.querySelector('#todoForm');
let todoList = [];

form.addEventListener('submit', onFormSubmit);
ul.addEventListener('click', onUlClick)

main()


function main() {
  TodoApi.getList()
    .then((list) => {
      todoList = list;
      renderTodoList(list);
    })
}

function onFormSubmit(e) {
  e.preventDefault();

  const todo = getTodo();

  if (!isMessageValid(todo)) {
    alert('Поле сообщение не должно быть пустым');
    return;
  }

  if (todo.id) {
    TodoApi.update(todo.id, todo)
      .then((newTodo) => {
        updateTodoKeys(todo.id, newTodo);
        clear();
      })
      .catch(showError)

    replaceTodo(todo.id, todo);
  } else {
    TodoApi.create(todo)
      .then((newTodo) => {
        todoList.push(newTodo);
        renderTodo(newTodo);
        clear();
      })
      .catch(showError)
  }
}

function onUlClick(e) {
  const todoItem = getTodoEl(e.target);
  const id = getTodoElId(todoItem);
  const todo = findTodoById(id);

  if (todoItem) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
      TodoApi.delete(id);
      todoItem.remove();
    } else if (e.target.classList.contains(EDIT_BTN_CLASS)) {
      fillForm(todo);
    } else if (e.target.classList.contains(TITLE_CLASS)) {
      TodoApi.update(id, { done: !todo.done });
      toggleDone(todoItem);
    }
  }
}

function toggleDone(todoItem) {
  todoItem.querySelector('.' + TITLE_CLASS).classList.toggle(DONE_CLASS);
}

function fillForm(todo) {
  idInput.value = todo.id;
  titleInput.value = todo.title;
}

function getTodoEl(el) {
  return el.closest(TODO_ITEM_SELECTOR);
}

function getTodo() {
  const id = idInput.value;
  const todo = findTodoById(id) || {};

  return {
    id: idInput.value,
    done: false,
    ...todo,
    title: titleInput.value,
  };
}

function isMessageValid(todo) {
  return todo.title !== '';
}

function renderTodoList(list) {
  const html = list.map(generateTodoHtml).join('');

  ul.innerHTML = html;
}

function replaceTodo(id, todo) {
  const oldTodoEl = document.querySelector(`[data-id="${id}"]`);
  const todoHtml = generateTodoHtml(todo);

  oldTodoEl.outerHTML = todoHtml;
}

function renderTodo(todo) {
  const html = generateTodoHtml(todo);

  ul.insertAdjacentHTML('beforeend', html);
}

function generateTodoHtml(todo) {
  const done = todo.done ? ' done' : '';

  return `
    <li class="todoItem" data-id="${todo.id}">
      <span class="title${done}">${todo.title}</span>
      <button class="editBtn">Edit</button>
      <button class="deleteBtn">Delete</button>
    </li>
  `;
}

function clear() {
  idInput.value = '';
  titleInput.value = '';
}

function getTodoElId(todoEl) {
  return todoEl.dataset.id;
}

function findTodoById(id) {
  return todoList.find(item => item.id === id);
}

function updateTodoKeys(id, changes) {
  const oldTodo = findTodoById(id)

  Object.keys(changes).forEach(key => oldTodo[key] = changes[key]);
}

function showError(error) {
  alert(error.message);
}