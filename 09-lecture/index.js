// window.document - точка входа в DOM

// console.dir(document.children[0].children[1].children[0].textContent)

// console.dir(document.body.children[0].textContent)

// const h1 = document.querySelector('#h1'); // hi - object
//
// console.log(h1.textContent)
//
// h1.textContent = 'XXX';

// const divList = document.querySelectorAll('div'); // NodeList
// const divListArr = Array.from(divList); // Array
//
// console.log(divList);
// console.log(divListArr);

// .closest();
// const liFifthEl = document.querySelector('#fifthEl');
//
// console.log(liFifthEl.closest('.container'))


// const input = document.querySelector('#inputComment');
//
// console.dir(input);

// input.className = 'inputComment red';

// input.classList.add('green');
// input.classList.remove('green');
// input.classList.contains('green');

// input.style.color = 'red';

// console.log(input.dataset.id)
// console.log(input.dataset.user)
// console.log(input.dataset.dateOfBirth)


const btn = document.querySelector('#btn');
const divContainer = document.querySelector('#divContainer');
const input = document.querySelector('#inputComment');
const liFifthEl = document.querySelector('#fifthEl');

btn.addEventListener('click', onBtnClick)

function onBtnClick() {
  const span = document.createElement('span');

  span.textContent = input.value;
  span.classList.add('green');

  input.value = '';

  divContainer.append(span);

  // liFifthEl.classList.toggle('red')
  // liFifthEl.classList.add('hide')
  // liFifthEl.style.display = 'none';
}


