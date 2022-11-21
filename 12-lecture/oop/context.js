// // f(o)
// const name = 'Jhon';
//
// function sayHi(name) {
//   console.log(`Hi ${name}`);
// }
//
// sayHi(name);
//
// // o.f()
// const person = {
//   name: 'Jhon',
//   sayHi: function() {
//     console.log(`Hi ${this.name}`);
//   },
//   sayBy() {
//     console.log(`By ${this.name}`);
//   }
// };
//
// person.sayHi();
// person.sayBy();

// 'use strict'
//
// const person = {
//   sayHi() {
//     console.log(this);
//   }
// }
//
// person.sayHi() // undefined

// console.log(this === window)

// 'use strict'

// this.name = 'Potter';
//
// const person = {
//   name: 'Ron',
//   sayHi: function() {
//     console.log(`Hi ${this.name}`);
//   },
//   sayBy: () => {
//     console.log(`By ${this.name}`);
//   }
// };
//
// person.sayHi(); // Ron
// person.sayBy(); // Potter




