// setter / getter


// const person = {
//   set name(value) {
//     if (typeof value === 'string') {
//       this._name = value;
//     }
//   },
//
//   get name() {
//     return this._name;
//   }
// }
//
// person.name = 42;
//
// console.log(person.name)




// class Person {
//   age = 42;
//
//   constructor(name) {
//     this._name = name;
//   }
//
//   set name(value) {
//     if (value.length < 4) {
//       throw new Error(`Name too short`);
//     }
//
//     this._name = value;
//   }
//
//   get name() {
//     return this._name;
//   }
// }
//
// const person = new Person('John');
//
// person.name = 'Harry';
//
// console.log(person.name);




class Person {
  age = 42;
  #name;

  constructor(name) {
    this.#name = name;
  }

  // set name(value) {
  //   if (value.length < 4) {
  //     throw new Error(`Name too short`);
  //   }
  //
  //   this.#name = value;
  // }

  get name() {
    return this.#name;
  }

  // setName(value) {
  //   if (value.length < 4) {
  //     throw new Error(`Name too short`);
  //   }
  //
  //   this.#name = value;
  // }
  //
  // getName() {
  //   return this.#name;
  // }
}

const person = new Person('John');

person.name = 'Harry';
// person.#name = 'qwewqe';

console.log(person.name);

// person.setName('Harry')
//
// console.log(person.getName());