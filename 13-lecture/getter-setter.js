// setter / getter


const person = {
  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    }
  },

  get name() {
    return this._name;
  }
}

person.name = 42;

console.log(person.name)

