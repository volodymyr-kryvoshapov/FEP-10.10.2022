const form = document.querySelector('#contactForm');
const inputs = document.querySelectorAll('.formInput');
const contactTpl = document.querySelector('#contactTemplate').innerHTML;
const contactContainer = document.querySelector('#contactContainer');

form.addEventListener('submit', onAddContactBtnClick);


function onAddContactBtnClick(e) {
  e.preventDefault();

  const contact = {};


  // for (let i = 0; i < inputs.length; i++) {
  //   const input = inputs[i];
  //
  //   contact[input.name] = input.value;
  // }
  //
  // for (const input of inputs) {
  //   contact[input.name] = input.value;
  // }

  for (const { name, value } of inputs) {
    contact[name] = value;
  }

  console.log(contact);

  // const name = nameInput.value;
  // const surname = surnameInput.value;
  // const phone = phoneInput.value;
  //
  // if (!name || !surname || !phone || isNaN(phone)) {
  //   alert('Wrong input data');
  // }
  //
  // const html = contactTpl
  //   .replace('{{name}}', name)
  //   .replace('{{surname}}', surname)
  //   .replace('{{phone}}', phone)
  //
  // contactContainer.insertAdjacentHTML('beforeend', html);
  //
  // nameInput.value = '';
  // surnameInput.value = '';
  // phoneInput.value = '';
}