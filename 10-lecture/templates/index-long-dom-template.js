const msgButton = document.querySelector('#msgButton');
const ul = document.querySelector('#todoList');
const input = document.querySelector('#msgInput');
const todoItemTemplate = document.querySelector('#todoItemTemplate');

msgButton.addEventListener('click', onMsgButtonClick);

createTodo('xxx');
createTodo('yyy');

function onMsgButtonClick() {
  const message = getMessage();

  if (!isMessageValid(message)) {
    alert('Поле сообщение не должно быть пустым');
    return;
  }

  createTodo(message);
  clear();
}

function getMessage() {
  return input.value;
}

function isMessageValid(message) {
  return message !== '';
}

function createTodo(message) {
  const li = document.createElement('li');
  li.textContent = message + ' ';

  const editBtn = document.createElement('button');
  editBtn.textContent = '[Edit]';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '[Delete]';

  deleteBtn.addEventListener('click', () => {})

  li.append(editBtn);
  li.append(deleteBtn);
  ul.append(li);
}

function clear() {
  input.value = '';
}