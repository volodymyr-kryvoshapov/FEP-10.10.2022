// for (let i = 5; i > 0; i--) {
//   console.log(i)
// }

// decrement(5);
//
// function decrement(n) {
//   console.log(n);
//
//   if (n > 1) {
//     decrement(n - 1);
//   }
// }

// sayHi('John')
//
// function sayHi(name) {
//   console.log(`Hello World ${name}`)
// }


console.log(sum(3)); // 3 + 2 + 1 = 6
// sum(3) // 3 + 3
// sum(2) // 2 + 1
// sum(1) // 1

// function sum(n) {
//   if (n === 1) {
//     return 1;
//   }
//
//   return n + sum(n - 1);
// }

function sum(n) {
  return n === 1 ? 1 : n + sum(n - 1);
}