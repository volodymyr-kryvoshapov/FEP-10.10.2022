// 'use strict'

// const message = 'From global scope';
//
// {
//   const message = 'Hello with var';
// }
//
//
// console.log(message)
//
// for (let i = 1; i < 10; i++) { // i === 10
//   const c = 'hello';
// }

// console.log(i)

// console.log(qwe) // undefined
//
// sayHi();
//
// function sayHi() {
//   console.log(message)
// }
//
// var qwe = 'XXX';
// let b = 'YYY';
//
// console.log(qwe) // XXX

// window.message = 'XXX';

// function a() {
//   // console.log(message)
//   message = 'XXX';
// }
//
//
// a(); // undefined
//
// console.log(message) // XXX

window.y = 10;

(() => {
  let x = (y = 10);
})()

console.log(typeof x) // undefined
console.log(typeof y) // number