// function createUser(name, lastName, age) {
//   return {
//     name,
//     lastName,
//     age,
//     signIn: false,
//   };
// }
//
// createUser('John', 'Snow', 42)

// const person = [undefined, 'Smith', 42, 'Ukraine', 'Kyiv'];
//
// const firstName = person[0] || 'Unknown';
// const lastName = person[1];
// const age = person[2];

// const [firstName = 'Unknown',, age, ...rest] = person;

// console.log(firstName, age)

//
// const person = {
//   name: 'Tom',
//   lastName: 'Smith',
//   age: 42,
// };
//
// const name = 'John';
// const { name: firstName, age } = person;
//
// console.log(firstName, age)


// const person = {
//   name: 'Tom',
//   lastName: 'Smith',
//   age: 42,
//   address: {
//     country: 'Ukraine',
//     city: 'Kyiv',
//     phone: {
//       type: 'mobile',
//       number: 123456789,
//     },
//   },
// };
//
// const name = 'John';
// const { name: firstName, age, address: { country, phone: { number } } } = person;
// const { name: firstName, age, ...anyVarName } = person;
// const number = person.address.phone.number

// console.log(firstName, age, anyVarName)

// sayHello(person);
//
// function sayHello1(person) {
//   console.log(`${person.name} ${person.lastName}, hello!`)
// }
//
// function sayHello2(person) {
//   const { name } = person;
//   console.log(`${name}, hello!`)
// }
//
// function sayHello({ name, lastName }) {
//   console.log(`${name} ${lastName}, hello!`)
// }



// sum(1, 2, 3, 4)
//
// function sum(first, ...rest) {
//   console.log(first, Array.isArray(rest)) // [1, 2, 3, 4]
// }

// const pets = ['cat', 'dog'];
// const pets2 = ['elephant', 'bat', 'rat', ['racoon']];
// const allAnimal = [...pets, ...pets2];
//
// console.log(pets, pets2, allAnimal)
//
// allAnimal[5][0] = '42'
// console.log(pets2)


// Declaration
// add(4, 4) // 8

function add(numA, numB) {
  return numA + numB;
}

// Expression
// sub(20, 3); // ReferenceError

// const add = function(numA, numB) {
//   return numA + numB;
// }

// const sub = function (numA, numB) {
//   return numA - numB;
// }

// sub(20, 3); // 17

// (function (numA, numB) {
//   return numA - numB;
// })(20, 3)

// Arrow F
// const mul = (numA, numB) => numA * numB;

// const sayHello = (name) => {
//   return `${name}, hello!`
// };

// const sayHello = name => `${name}, hello!`;

// const add = (numA, numB) => numA + numB;