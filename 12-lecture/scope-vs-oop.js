// function createCounter(base) {
//   // let counts = base;
//
//   return {
//     inc: () => {
//       base += 1;
//     },
//     dec: () => {
//       base -= 1;
//     },
//     get: () => base,
//   }
// }
//
// const counter = createCounter(10);
//
// console.log(counter.inc()) // undefined
// console.log(counter.inc()) // undefined
// console.log(counter.inc()) // undefined
// console.log(counter.dec()) // undefined
// console.log(counter.get()) // 12



function Counter(base) {
  this.base = base;

  this.inc = function () {
    this.base += 1;
  }

  this.dec = function () {
    this.base -= 1;
  }

  this.get = function () {
    return this.base;
  }
}

const counter = new Counter(20);

console.log(counter.inc()) // undefined
console.log(counter.inc()) // undefined
console.log(counter.inc()) // undefined
console.log(counter.dec()) // undefined
console.log(counter.get()) // 22