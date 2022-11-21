'use strict'

const DELETE_BTN_CLASS = 'deleteBtn';
const TODO_ITEM_SELECTOR = '.todoItem';
const DONE_CLASS = 'done';
const HOVER_CLASS = 'hover';

const ul = document.querySelector('#todoList');
const input = document.querySelector('#msgInput');
const form = document.querySelector('#todoForm');

form.addEventListener('submit', onFormClick);
ul.addEventListener('click', onUlClick)
ul.addEventListener('mouseover', onUlMousover)
ul.addEventListener('mouseout', onUlMouseleave)

createTodo('xxx');
createTodo('yyy');

function onFormClick(e) {
  e.preventDefault();

  const message = getMessage();

  if (!isMessageValid(message)) {
    alert('Поле сообщение не должно быть пустым');
    return;
  }

  createTodo(message);
  clear();
}

function onUlClick(e) {
  const todoItem = getTodoEl(e.target);

  if (todoItem) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
      todoItem.remove()
      return;
    }

    todoItem.classList.toggle(DONE_CLASS);
  }
}

function onUlMousover(e) {
  const todoItem = getTodoEl(e.target);

  if (todoItem) {
    todoItem.classList.add(HOVER_CLASS);
  }
}

function onUlMouseleave(e) {
  const todoItem = getTodoEl(e.target);

  if (todoItem) {
    todoItem.classList.remove(HOVER_CLASS);
  }
}

function getTodoEl(el) {
  return el.closest(TODO_ITEM_SELECTOR);
}

function getMessage() {
  return input.value;
}

function isMessageValid(message) {
  return message !== '';
}

function createTodo(message) {
  const html = `
  <li class="todoItem">
    <span>${message}</span>
    <button class="deleteBtn">Delete</button>
  </li>
  `

  ul.insertAdjacentHTML('beforeend', html);
}

function clear() {
  form.reset()
}