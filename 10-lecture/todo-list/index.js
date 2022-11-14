const msgButton = document.querySelector('#msgButton');
const ul = document.querySelector('#todoList');
const input = document.querySelector('#msgInput');

msgButton.addEventListener('click', onMsgButtonClick);

createTodo('xxx');
createTodo('yyy');

// 1. getMessage
// 2. validate
// 3. create task
// 4. clear value

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
  li.textContent = message;

  ul.append(li);
}

function clear() {
  input.value = '';
}