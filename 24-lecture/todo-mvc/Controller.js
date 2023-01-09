class Controller {
  constructor($root) {
    this.collection = new Collection();
    this.formView = new FormView({
      onSubmit: (todo) => this.save(todo),
    });
    this.listView = new ListView({
      onEdit: id => this.formView.setFormData(this.collection.get(id)),
      onDelete: id => this.delete(id),
    });

    this.formView.appendTo($root);
    this.listView.appendTo($root);

    this.collection
      .fetch()
      .then((list) => {
        this.listView.renderList(list);
      })
  }

  save(todo) {
    this.collection
      .save(todo)
      .then((newTodo) => {
        if (todo.id) {
          this.listView.replaceTodo(newTodo.id, newTodo);
        } else {
          this.listView.renderTodo(newTodo);
        }
      });
  }

  delete(id) {
    this.collection
      .delete(id)
      .then(() => {
        this.listView.remove(id);
      })
  }
}