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



// function Counter(base) {
//   this.base = base;
//
//   this.inc = function () {
//     this.base += 1;
//   }
//
//   this.dec = function () {
//     this.base -= 1;
//   }
//
//   this.get = function () {
//     return this.base;
//   }
// }

// const counter = new Counter(20);
//
// console.log(counter.inc()) // undefined
// console.log(counter.inc()) // undefined
// console.log(counter.inc()) // undefined
// console.log(counter.dec()) // undefined
// console.log(counter.get()) // 22


// const base = 42;

// class Counter {
//   #base;
//   qwe = 42;
//
//   static qwe2 = 88;
//
//   constructor(base) {
//     this.#base = base;
//   }
//
//   inc() {
//     this.#base += 1;
//   }
//
//   dec() {
//     this.#base -= 1;
//   }
//
//   get() {
//     return this.#base;
//   }
// }
//
// const counter = new Counter(20);
//
// counter.base = 42;
//
// console.log(counter.inc()) // undefined
// console.log(counter.inc()) // undefined
// console.log(counter.inc()) // undefined
// console.log(counter.dec()) // undefined
// console.log(counter.get()) // 22

