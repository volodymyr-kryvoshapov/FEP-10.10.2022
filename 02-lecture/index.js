// Boolean
// String
// Number (Number.NaN Number.Infinity)
// BigInt
// Undefined
// Null
// Symbol
// Object

// let name; // undefined
//
// console.log(typeof name) // 'undefined'
//
// let lastName = null;
//
// console.log(typeof lastName) // 'object'
// console.log(lastName === null) // true


// const numberA = prompt('Enter number A', 3); // string
// const numberB = prompt('Enter number B', 5); // string

// alert(Number(numberA) + Number(numberB)) // 8

// console.log(+'42') // 42
//
//
// console.log(String(123)); // '123'
// console.log(typeof String(-12.3)); // '-12.3'
// console.log(String(null)); // 'null'
// console.log(String(undefined)); // 'undefined'
// console.log(String(true)); // 'true'
// console.log(String({ name: 'John' })); // '[object Object]'
//
// console.log('' + 123); // '123'
// console.log(`${123}`); // '123'
//
//
// // console.log(+'3' + 5); // 8
// console.log(Number('3') + 5); // 8

// Into Boolean true/false

// console.log(Boolean('')) // false
// console.log(Boolean('0')) // true
// console.log(Boolean(0)) // false
// console.log(Boolean(NaN)) // false
// console.log(Boolean({})) // true
// console.log(Boolean([])) // true
// console.log(Boolean({ name: 'John' })) // true

// 7 false value
// console.log(Boolean(''))
// console.log(Boolean(0))
// console.log(Boolean(-0))
// console.log(Boolean(NaN))
// console.log(Boolean(false))
// console.log(Boolean(null))
// console.log(Boolean(undefined))



// Into Number
// console.log(Number(null)) // 0
// console.log(Number(undefined)) // NaN
// console.log(Number(true)) // 1
// console.log(Number(false)) // 0
// console.log(Number('3')) // 3
// console.log(Number('')) // 0
// console.log(Number('qwe')) // NaN


// Number.isNaN(val);

// const numberA = prompt('Enter number A', 'qwe'); // 'qwe'
// console.log(Number.isNaN(numberA)) // false

// isNaN(); // Number() -> Number.isNaN()
// const numberB = prompt('Enter number B', 'qwe'); // 'qwe'
// console.log(isNaN(numberB)) // true

// let name;
//
// console.log(name === undefined) // true
// console.log(name === null) // false


// ==, ===

// console.log('0' == 0) // Number('0') == 0 -> true
// console.log('' == 0) // Number('') == 0 -> true
//
// console.log('0' === 0) // false
// console.log('' === 0) // false

// &&

// console.log(true && true) // true
// console.log(false && true) // false
// console.log(true && false) // false
// console.log(true && 'Hello World') // 'Hello World'
// console.log(false && 'Hello World') // false
// console.log(42 && 'Hello World') // 'Hello World'

// // ||
// console.log(true || true) // true
// console.log(false || true) // true
// console.log(true || false) // true
// console.log(1 || false) // 1
// console.log(false || 42) // 42

// !
// console.log(!42) // !Boolean(42) -> !true -> false
// console.log(!'') // !Boolean('') -> !false -> true

// !!

// Boolean(42) // true
// !!42 // true
// !!Boolean(42) -> !!true -> !false -> true


// const num = prompt('Enter number', '42'); // '42'
//
// if (num) { // Boolean('42') -> true
//   alert(`You enter: ${num}`);
// }

// const num = prompt('Enter number', ''); // ''
//
// if (num) { // Boolean('') -> false
//   alert(`You enter: ${num}`);
// } else {
//   alert(`You enter wrong value`);
// }

// const num = prompt('Enter number', ''); // ''
//
// if (!isNaN(num)) { // !(Number('qwe') -> NaN) -> !true -> false
//   alert(`You enter: ${num}`);
// } else {
//   alert(`You enter wrong value`);
// }

// const a = 8;
// const b = 8;

// if (a > b) { // === < > <= >=
//   console.log(`${a} > ${b}`)
// }

// if (a - b) { // Boolean(0) -> false
//   console.log(`${a} - ${b}`)
// }

// const a = 100;
// const b = 20;
//
// if (a === 10 && b === 20) {
//   console.log('a = 10')
// } else if (a === 20) {
//   console.log('a = 20')
// } else if (a === 30) {
//   console.log('a = 30')
// } else {
//   console.log('Another case')
// }

// if (a === 10) {
//   console.log('a = 10')
// } else if (a === 20) {
//   console.log('a = 20')
// } else if (a === 30) {
//   console.log('a = 30')
// }

// const a = 20;
//
// switch (a) {
//   case 10:
//   case 20:
//     console.log('a = 10 or a = 20');
//     break;
//     // return 'a = 10 or a = 20';
//   case 30:
//     console.log('a = 30');
//     break;
//   default:
//     console.log('Another case')
// }

// const result = sayHi('John');
// console.log(result) // undefined
// console.log(getNumber(10))

// function sayHi(name) {
//   alert(`Hello ${name}`)
// } // undefined

// function getNumber(num) {
//   switch (num) {
//     case 10:
//     case 20: return 'a = 10 or a = 20';
//     case 30: return 'a = 30';
//     default: return 'Another case';
//   }
//
//   // if (a === 10) {
//   //   return 'a = 10';
//   // }
//   // if (a === 20) {
//   //   return 'a = 20';
//   // }
//   // if (a === 30) {
//   //   return 'a = 30';
//   // }
//   //
//   // return 'Another case'
// }

const result = add(3, 5, 5,7,7,8,9,10); // 8

console.log(result + 42) // 50


function add(numA, numB) {
  return numA + numB;
}

// const sub = function (numA, numB) {
//   return numA - numB;
// }
//
// const sub = (numA, numB) => numA - numB;

