class Collection {
  #list = [];

  fetch() {
    return TodoApi.getList()
      .then((list) => {
        this.#list = list;

        return this.#list;
      })
  }

  save(todo) {
    if (todo.id) {
      return TodoApi.update(todo.id, todo)
        .then((newTodo) => {
          this.updateTodoKeys(todo.id, newTodo);

          return newTodo;
        })
    }

    return TodoApi.create(todo)
      .then((newTodo) => {
        this.#list.push(newTodo);

        return newTodo;
      })
  }

  delete(id) {
    return TodoApi.delete(id);
  }

  updateTodoKeys(id, changes) {
    const oldTodo = this.get(id)

    Object.keys(changes).forEach(key => oldTodo[key] = changes[key]);
  }

  get(id) {
    return this.#list.find(item => item.id === id);
  }
}