const EDIT_BTN_CLASS = 'editBtn';
const DELETE_BTN_CLASS = 'deleteBtn';
const CONTACT_ITEM_SELECTOR = '.contactItem';
const FORM_DOM_EL = 0;

const $form = $('#contactForm');
const $inputs = $('.formInput');
const $contactContainer = $('#contactContainer');
let contactList = [];

$form.on('submit', onAddContactBtnClick);
$contactContainer
  .on('click', '.' + DELETE_BTN_CLASS, onContactDeleteClick)
  .on('click', '.' + EDIT_BTN_CLASS, onContactEditClick);

init();

function init() {
  ContactApi.getList()
    .then((list) => {
      contactList = list;
      renderContactList(list)
    })
    .catch(showError)
}

function onAddContactBtnClick(e) {
  e.preventDefault();

  const contact = getContact();

  if (!isContactValid(contact)) {
    showError(new Error('Wrong input data'));
    return;
  }

  saveContact(contact);
  clearForm();
}

function onContactDeleteClick(event) { // event.target === this
  const contactEl = findContactEl(this);
  const contact = findContactByContactEl(contactEl)

  if (contact) {
    contactEl.remove();
  }
}

function onContactEditClick(e) { // e.target === this
  const $contactEl = findContactEl($(this));
  const contact = findContactByContactEl($contactEl)

  if (contact) {
      setFormData(contact)
  }
}

function findContactEl($el) {
  return $el.closest(CONTACT_ITEM_SELECTOR);
}

function findContactByContactEl($contactEl) {
  const id = $contactEl.data('id');

  return findContactById(String(id));
}

function setFormData(contact) {
  for (const input of $inputs) {
    if (Object.hasOwn(contact, input.name)) {
      input.value = contact[input.name];
    }
  }
}

function getContact() {
  const contact = {};

  for (const { name, value } of $inputs) {
    contact[name] = value;
  }

  return contact;
}

function isContactValid(contact) {
  return !isEmpty(contact.firstName)
    && !isEmpty(contact.lastName)
    && !isEmpty(contact.phone)
    && isPhone(contact.phone);
}

function isEmpty(str) { // boolean
  return str === '';
}

function isPhone(phone) {
  return !isNaN(phone);
}

function saveContact(contact) {
  if (contact.id) {
    ContactApi.update(contact.id, contact)
      .then((newContact) => {
        updateKeys(contact.id, newContact);
        clearForm();
      })
      .catch(showError)

    replaceContact(contact.id, contact);
  } else {
    ContactApi.create(contact)
      .then((newContact) => {
        contactList.push(newContact);
        renderContact(newContact)
        clearForm();
      })
      .catch(showError)
  }

}

function renderContactList(contacts) {
  const htmlArr = contacts.map(generateHTML);

  $contactContainer.html(htmlArr);
}

function renderContact(contact) {
  const html = generateHTML(contact);

  $contactContainer.append(html);
}

function clearForm() {
  $form[FORM_DOM_EL].reset();
}

function showError(error) {
  alert(error.message)
}


function findContactById(id) {
  return contactList.find(item => item.id === id);
}

function updateKeys(id, changes) {
  const oldContact = findContactById(id)

  Object.keys(changes).forEach(key => oldContact[key] = changes[key]);
}

function replaceContact(id, contact) {
  const $oldTodoEl = $(`[data-id="${id}"]`);
  const html = generateHTML(contact);

  $oldTodoEl.replaceWith(html);
}

function generateHTML(contact) {
  return `
    <tr class="contactItem" data-id="${contact.id}">
      <td>${contact.firstName}</td>
      <td>${contact.lastName}</td>
      <td>${contact.phone}</td>
      <td>
        <span>
            <button type="button" class="editBtn">[Edit]</button>
            <button type="button" class="deleteBtn">[Delete]</button>
        </span>
      </td>
    </tr>
  `;
}