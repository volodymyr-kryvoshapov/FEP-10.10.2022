const DELETE_NOTE_SELECTOR = '.delete-note';
const EDIT_NOTE_CONTROL_SELECTOR = '.edit-note-control';
const NOTE_ITEM_SELECTOR = '.note';
const LIST_SELECTOR = '#list';
const ADD_NOTE_SELECTOR = '#addNoteBtn';

const EMPTY_NOTE = { description: '' };
let notesList = [];

const $noteListEl = $(LIST_SELECTOR)
  .on('click', DELETE_NOTE_SELECTOR, onDeleteClick)
  .on('focusout', EDIT_NOTE_CONTROL_SELECTOR, onListFocusout)
  .sortable({
    stop: function( event, ui ) {
    }
  })
;

$(ADD_NOTE_SELECTOR).on('click', onAddNoteBtnClick);


showList();


function onDeleteClick(e) {
  const $element = getNoteElByChild($(this)); // e.target
  const $elementIndex = getNoteElIndex($element);

  $element.fadeOut(400, () => deleteNote($elementIndex));
}

function onListFocusout(e) {
  const $element = $(this);

  updateNote(getNoteElIndex($element), {
    description: $element.val(),
  });
}

function onAddNoteBtnClick() {
  createNote(EMPTY_NOTE);
}

function showList() {
  StickersApi.getList()
    .then(setData)
    .then(renderList);
}

function setData(data) {
  return (notesList = data);
}

function getNoteElementById(id) {
  return $noteListEl.find(`[data-note-index="${id}"]`);
}

function createNote(note) {
  StickersApi.create(note)
    .then((newNote) => {
      notesList.push(newNote);
      renderNote(newNote);
    });
}

function updateNote(id, changes) {
  let note = notesList.find((el) => el.id == id);

  Object.keys(changes).forEach((key) => (note[key] = changes[key]));
  StickersApi.update(id, note);
}

function deleteNote(id) {
  setData(notesList.filter((el) => el.id != id))
  deleteNoteElement(id);
  StickersApi.delete(id);
}

function deleteNoteElement(id) {
  const $element = getNoteElementById(id);

  $element && $element.remove();
}

function renderList(notesList) {
  const $notesHTML = notesList.map(generateNoteEl);

  $noteListEl.append($notesHTML).fadeIn(1000);
}

function renderNote(note) {
  const $noteEl = $(getNoteHtml(note));

  $noteListEl.append($noteEl);
}

function generateNoteEl(note) {
  const $noteEl = $(getNoteHtml(note));

  $noteEl
    .css({
      // left: note.left,
      // top: note.top,
      // width: note.width,
      // height: note.height,
    })
    // .draggable({
    //   stop: function(event, ui) {
    //     StickersApi.update(note.id, ui.position);
    //   }
    // })
    // .resizable({
    //   stop: function(event, ui) {
    //     StickersApi.update(note.id, ui.size);
    //   }
    // })
  ;

  return $noteEl;
}

function getNoteHtml(note) {
  return `
    <div class="note" data-note-index="${note.id}">
      <span class="delete-note">x</span>
      <textarea class="edit-note-control" name="description" id="">${note.description}</textarea>
    </div>
  `;
}

function getNoteElIndex($el) {
  const $note = getNoteElByChild($el);
  return $note && $note.data('noteIndex');
}

function getNoteElByChild($child) {
  return $child.closest(NOTE_ITEM_SELECTOR);
}
