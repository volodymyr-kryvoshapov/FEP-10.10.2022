// 1. get list from server
// 2. show list
// 3. create contact
// 4. edit contact
// 5. delete contact

const $inputs = $('input');
const $contactForm = $('#contactForm')
  .on('submit', onContactFormSubmit);
const $contactContainer = $('#contactContainer')
  .on('click', '.editBtn', onEditBtnClick)
  .on('click', '.deleteBtn', onDeleteBtnClick);
const form = $contactForm[0];
let contactList = [];

ContactApi
  .getList()
  .then((list) => {
    renderContactList(list)
    contactList = list;
  })


// getFormData
// validate data
// send data to server
// clear form
function onContactFormSubmit(e) {
  e.preventDefault();

  const contact = getFormData();

  if (!isContactValid(contact)) {
    alert('Error contact data');
    return;
  }

  if (contact.id) { // update
    ContactApi
      .update(contact.id, contact)
      .then(() => {
        contactList = contactList.map(contactItem => {
          return contactItem.id === contact.id ? contact : contactItem;
        })
        replaceContact(contact.id, contact);
      })
  } else { // create
    ContactApi
      .create(contact)
      .then((conatctWithId) => {
        renderContact(conatctWithId)
        contactList.push(conatctWithId);
      })
  }

  console.log('onContactFormSubmit', contact)
}

function isContactValid(contact) {
  return contact.firstName !== ''
    && contact.lastName !== ''
    && contact.phone !== ''
    && !isNaN(contact.phone)
}

function onEditBtnClick(e) {
  const id = getContactElIdByEl(e.target);
  const contact = contactList.find(contact => contact.id === id);

  if (contact) {
    setFormData(contact);
  }
}

function onDeleteBtnClick(e) {
  const id = getContactElIdByEl(e.target);

  if (id) {
    ContactApi
      .delete(id)
      .then(() => {
        contactList = contactList.map(contact => contact.id !== id);
        removeContactElById(id);
      })
  }
}

function removeContactElById(id) {
  const $contactEl = getContactElById(id);

  $contactEl?.remove();
}

function getFormData() {
  // const contact = {
  //   firstName: form.firstName.value,
  //   lastName: form.lastName.value,
  // };

  const contact = {}

  for (const input of $inputs) {
    contact[input.name] = input.value;
  }

  return  contact;
}

function setFormData(contact) {
  for (const input of $inputs) {
    const inputName = input.name;

    if (inputName in contact) {
      input.value = contact[inputName];
    }
  }
}

function getContactElIdByEl(el) {
  return el.closest('.contactItem').dataset.id;
}

function renderContactList(contacts) {
  const htmlStr = contacts.map(contact => generateContactHtml(contact)).join('');

  $contactContainer.html(htmlStr);
}

function renderContact(contact) {
  const htmlStr = generateContactHtml(contact);

  $contactContainer.append(htmlStr);
}

function replaceContact(id, contact) {
  const $oldContactEl = getContactElById(id);
  const newContactHtml = generateContactHtml(contact);

  $oldContactEl.replaceWith(newContactHtml);
}

function getContactElById(id) {
  return $contactContainer.find(`[data-id="${id}"]`);
}

function generateContactHtml(contact) {
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
