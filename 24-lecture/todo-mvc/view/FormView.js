class FormView {
  static INPUTS_SELECTOR = 'input, textarea';

  constructor(options) {
    this.options = options;
    this.$root = this.initView();
    this.$inputs = this.$root.find(FormView.INPUTS_SELECTOR);
  }

  initView() {
    return $(`
      <form id="todoForm">
          <input id="id" type="hidden"/>
          <input id="title" type="text" placeholder="Введіть текст"/>
          <button>Зберегти</button>
      </form>
    `)
      // .on('submit', (e) => this.onFormSubmit(e));
      .on('submit', this.onFormSubmit.bind(this));
  }

  onFormSubmit(e) {
    e.preventDefault();

    const data = this.getFormData();

    // validate

    this.options.onSubmit(data);
  }

  appendTo($container) {
    $container.append(this.$root)
  }

  getFormData() {
    const contact = {}

    for (const input of this.$inputs) {
      contact[input.id] = input.value;
    }

    return  contact;
  }

  setFormData(contact) {
    for (const input of this.$inputs) {
      const inputId = input.id;

      if (inputId in contact) {
        input.value = contact[inputId];
      }
    }
  }
}