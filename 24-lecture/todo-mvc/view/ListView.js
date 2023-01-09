class ListView {
  static TODO_ITEM_SELECTOR = '.todoItem';

  constructor(options) {
    this.options = options;
    this.$root = this.initView();
  }

  initView() {
    return $('<ul id="todoList"></ul>')
      .on('click', '.editBtn', this.onEditBtnClick.bind(this))
      .on('click', '.deleteBtn', this.onDeleteBtnClick.bind(this))
  }

  onEditBtnClick(e) {
    const todoItem = this.getTodoEl(e.target);
    const id = this.getTodoElId(todoItem);

    this.options.onEdit(id);
  }

  onDeleteBtnClick(e) {
    const todoItem = this.getTodoEl(e.target);
    const id = this.getTodoElId(todoItem);

    this.options.onDelete(id);
  }

  appendTo($container) {
    $container.append(this.$root)
  }

  renderList(list) {
    const html = list.map(this.generateTodoHtml).join('');

    this.$root.html(html);
  }

  renderTodo(todo) {
    const html = this.generateTodoHtml(todo);

    this.$root.append(html);
  }

  replaceTodo(id, todo) {
    const oldTodoEl = this.getTodoElById(id)
    const todoHtml = this.generateTodoHtml(todo);

    oldTodoEl.outerHTML = todoHtml;
  }

  remove(id) {
    const todoEl = this.getTodoElById(id)

    todoEl.remove();
  }

  generateTodoHtml(todo) {
    const done = todo.done ? ' done' : '';

    return `
      <li class="todoItem" data-id="${todo.id}">
        <span class="title${done}">${todo.title}</span>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
      </li>
    `;
  }

  getTodoEl(el) {
    return el.closest(ListView.TODO_ITEM_SELECTOR);
  }

  getTodoElId(todoEl) {
    return todoEl.dataset.id;
  }

  getTodoElById(id) {
    return document.querySelector(`[data-id="${id}"]`);
  }
}