// ключ (key) === свойство (property)

const user = {
  name: "John",
  age: 35,
  8: 'qwe',
  'is likes birds': true,
  address: {
    country: 'Ukraine',
    city: 'Kyiv',
  },
  sayHi: function () {
    alert('Hello World');
  }
}

// user.sayHi();

// console.log(user.name)
// console.log(user.address.country)

// user.age = 42;
// user.address = 'XXX';
//
// user['is likes birds'] = false;

// console.log(user['is likes birds'])

// const propName = 'description';

// user[propName] = 'qwe qw eqwe q weqwe  kjh k hk jh';

// console.log(user)

// in

// console.log('age' in user) // true
// console.log('qwe' in user) // false




const user = {
  name: "John",
  age: 35,
  8: 'qwe',
  '01': 'xxx',
  'is likes birds': true,
  address: {
    country: 'Ukraine',
    city: 'Kyiv',
  },
  sayHi: function () {
    alert('Hello World');
  }
}

// const user2 = user;

// user2.name = 'Tom';

// console.log(user)
// console.log(user2)
// console.log(user === user2)

// Array
// Function
// Data
// Error
// RegExp

console.log(Object.keys(user))
console.log(Object.values(user))

// sayHi(user);
//
// function sayHi(user) {
//   user.name = 'Tom'
// }