const DELETE_BTN_CLASS = 'deleteBtn';
const SOME_ANCHOR_BTN_CLASS = 'someAnchorBtn';
const CONTACT_ITEM_SELECTOR = '.contactItem';

const form = document.querySelector('#contactForm');
const inputs = document.querySelectorAll('.formInput');
const contactContainer = document.querySelector('#contactContainer');

form.addEventListener('submit', onAddContactBtnClick);
contactContainer.addEventListener('click', onContactContainerClick);

addContact({name: 'xxx', surname: 'yyy', phone: '888'});
addContact({name: 'xxx 2', surname: 'yyy 2', phone: '999'});


function onAddContactBtnClick(e) {
  e.preventDefault();

  const contact = getContact();

  if (!isContactValid(contact)) {
    alert('Wrong input data');
    return;
  }

  addContact(contact);
  clearForm();
}

function onContactContainerClick(e) {
  if (e.target.classList.contains(DELETE_BTN_CLASS)) {
    const contactEl = e.target.closest(CONTACT_ITEM_SELECTOR)

    contactEl.remove();
  } else if (e.target.classList.contains(SOME_ANCHOR_BTN_CLASS)) {
    e.preventDefault();

    e.target.style.color = 'green';

    console.log('some anchor button clicked')
  }
}

function getContact() {
  const contact = {};

  for (const { name, value } of inputs) {
    contact[name] = value;
  }

  return contact;
}

function isContactValid(contact) {
  return !isEmpty(contact.name)
    && !isEmpty(contact.surname)
    && !isEmpty(contact.phone)
    && isPhone(contact.phone);
}

function isEmpty(str) { // boolean
  return str === '';
}

function isPhone(phone) {
  return !isNaN(phone);
}

function addContact(contact) {
  const html = generateHTML(contact);

  contactContainer.insertAdjacentHTML('beforeend', html);
}

function generateHTML(contact) {
  return `
    <tr class="contactItem">
      <td>${contact.name}</td>
      <td>${contact.surname}</td>
      <td>${contact.phone}</td>
      <td>
        <span>
            <a href="https://gist.github.com/volodymyr-kryvoshapov/d8493b9b634b607559624857af02959d" class="someAnchorBtn">Some anchor</a>
            <button type="button" class="deleteBtn">[Delete]</button>
        </span>
      </td>
    </tr>
  `;
}

function clearForm() {
  form.reset();
}