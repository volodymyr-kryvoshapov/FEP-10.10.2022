const msgButton = document.querySelector('#msgButton');
const ul = document.querySelector('#todoList');
const input = document.querySelector('#msgInput');
const todoItemTemplate = document.querySelector('#todoItemTemplate').innerHTML;

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
  const html = generateTemplate(message);

  ul.insertAdjacentHTML('beforeend', html)
}

function generateTemplate(message) {
  return todoItemTemplate.replace('$message$', message);
}

function clear() {
  input.value = '';
}