// const name = 'John';
//
// function sayHi() {
//   console.log(`Hi ${name}`);
// }
//
// sayHi();




// let counts = 0;
//
// function counter() {
//   counts++
// }
//
// counter();
// counter();





// let counts = 0;
// let counts2 = 0;
// let counts3 = 0;
//
// function counter() {
//   counts++
// }
// function counter2() {
//   counts2++
// }
// function counter3() {
//   counts3++
// }
//
// counter();
// counter2();
// counter3();
//
// console.log(counts)



// function createCounter() {
//   let counts = 0;
//
//   function counter() {
//     return counts++
//   }
//
//   return counter;
// }
//
// let counterFn = createCounter([5,6,7,8]);
// let counterFn2 = createCounter([5,6,7,8]);
//
// counterFn = null;
// counterFn2 = null;


// const counter2Fn = createCounter();
//
// console.log(counterFn())
// console.log(counterFn())
// console.log(counterFn())
// console.log(counter2Fn())




// function createLogger(name) {
//   return (message) => {
//     console.log(`[${name}] ${message}`)
//   }
// }
//
// const userLoggerFn = createLogger('user');
// const cartLoggerFn = createLogger('cart');
//
// userLoggerFn('created');
// userLoggerFn('deleted');
// cartLoggerFn('product with id = 42 was added');




// function createLogger(name) {
//   function info(message) {
//     console.log(`[${name}] info ${message}`)
//   }
//
//   function error(message) {
//     console.log(`[${name}] error ${message}`)
//   }
//
//   return {
//     info,
//     error,
//   }
// }
//
// const userLogger = createLogger('user');
//
// userLogger.info('created');
// userLogger.error('not created');



// function createLogger(name) {
//   return {
//     info: (message) => {
//       console.log(`[${name}] info ${message}`)
//     },
//     error: (message) => {
//       console.log(`[${name}] error ${message}`)
//     },
//   }
// }
//
// const userLogger = createLogger('user');
//
// userLogger.info('created');
// userLogger.error('not created');

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
// console.log(counter.get()) // 12