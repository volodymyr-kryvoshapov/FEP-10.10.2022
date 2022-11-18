const addContactBtn = document.querySelector('#addContactBtn');
const nameInput = document.querySelector('#nameInput');
const surnameInput = document.querySelector('#surnameInput');
const phoneInput = document.querySelector('#phoneInput');
const contactTpl = document.querySelector('#contactTemplate').innerHTML;
const contactContainer = document.querySelector('#contactContainer');

addContactBtn.addEventListener('click', onAddContactBtnClick);


function onAddContactBtnClick() {
  const name = nameInput.value;
  const surname = surnameInput.value;
  const phone = phoneInput.value;

  if (!name || !surname || !phone || isNaN(phone)) {
    alert('Wrong input data');
  }

  const html = contactTpl
    .replace('{{name}}', name)
    .replace('{{surname}}', surname)
    .replace('{{phone}}', phone)

  contactContainer.insertAdjacentHTML('beforeend', html);

  nameInput.value = '';
  surnameInput.value = '';
  phoneInput.value = '';
}