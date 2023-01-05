class FormDialog {
  constructor($modalEl, saveContact) {
    this.$inputs = $('input');
    this.dialog = $modalEl.dialog({
      autoOpen: false,
      height: 400,
      width: 350,
      modal: true,
      buttons: {
        Save: () => {
          const contact = this.getFormData();

          if (!isContactValid(contact)) {
            alert('Error contact data');
            return;
          }

          saveContact(contact);
        },
        Cancel: this.close.bind(this)
      },
      close: this.close.bind(this)
    });
  }

  getFormData() {
    const contact = {}

    for (const input of this.$inputs) {
      contact[input.name] = input.value;
    }

    return  contact;
  }

  setFormData(contact) {
    for (const input of this.$inputs) {
      const inputName = input.name;

      if (inputName in contact) {
        input.value = contact[inputName];
      }
    }
  }

  open(contact) {
    if (contact) {
      this.setFormData(contact);
    }

    this.dialog.dialog("open");
  }

  close() {
    this.dialog.dialog("close");
    this.formReset();
  }

  formReset() {
    this.$inputs.val('');
  }
}