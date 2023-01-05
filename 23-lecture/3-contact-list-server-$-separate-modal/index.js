const $createContactBtn = $('#createContactBtn')
  .on('click', onCreateBtnClick);
const $contactContainer = $('#contactContainer')
  .on('click', '.editBtn', onEditBtnClick)
  .on('click', '.deleteBtn', onDeleteBtnClick);
let contactList = [];

const dialog = new FormDialog($("#dialogForm"), saveContact);

ContactApi
  .getList()
  .then((list) => {
    renderContactList(list)
    contactList = list;
  })

function onCreateBtnClick(e) {
  dialog.open();
}

function saveContact(contact) {
  if (contact.id) { // update
    ContactApi
      .update(contact.id, contact)
      .then(() => {
        contactList = contactList.map(contactItem => {
          return contactItem.id === contact.id ? contact : contactItem;
        })
        replaceContact(contact.id, contact);
        dialog.close();
      })
  } else { // create
    ContactApi
      .create(contact)
      .then((conatctWithId) => {
        renderContact(conatctWithId)
        contactList.push(conatctWithId);
        dialog.close();
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
    dialog.open(contact);
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
