const userInput = document.querySelector('#inputComment');
const btn = document.querySelector('#btn');
const ul = document.querySelector('#data-list')
const li = document.createElement('li');

btn.addEventListener('click',onBtnClick)

function onBtnClick(input){
  if (input != null || input !=='') {
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value = '';
  }
}