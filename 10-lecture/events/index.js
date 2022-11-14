const msgButton = document.querySelector('#msgButton');
const ul = document.querySelector('#todoList');
const input = document.querySelector('#msgInput');

msgButton.addEventListener('click', onDocumentBodyClick);
ul.addEventListener('click', onUlClick);


createTodo('xxx');
createTodo('yyy');

function onDocumentBodyClick() {
  const message = getMessage();

  if (!isMessageValid(message)) {
    showError();
    return;
  }

  createTodo(message);
  clear();
}

function onUlClick(event) {
  if (event.target.classList.contains('editBtn')) {
    console.log('Edit button was clicked', event.target)
  }
  if (event.target.classList.contains('deleteBtn')) {
    const todoItem = event.target.closest('.todoItem');

    todoItem.remove()
  }
}

function getMessage() {
  return input.value;
}

function isMessageValid(message) {
  return message !== '';
}

function showError() {
  alert('Поле сообщение не должно быть пустым');
}

function createTodo(message) {
  const html = generateTemplate(message);

  ul.insertAdjacentHTML('beforeend', html)
}

function generateTemplate(message) {
  return `
    <li class="todoItem">
      <span>${message}</span>
      <button class="editBtn">[Edit]</button>
      <button class="deleteBtn">[Delete]</button>
    </li>
  `;
}

function clear() {
  input.value = '';
}
