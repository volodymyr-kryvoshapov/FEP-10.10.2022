// setTimeout, setInterval

// console.log('before setTimeout')
//
// setTimeout(() => {
//   console.log('setTimeout executed')
// }, 1000) // ms
//
// // alert();
//
// console.log('after setTimeout')

// const intervalId = setInterval(() => {
//   console.log('setInterval executed')
// }, 1000) // ms



// clearTimeout, clearInterval

// clearInterval(intervalId);

function createTimer() {
  let num = 0;
  let intervalId;

  return {
    start: () => {
      console.log('timer started')
      intervalId = setInterval(() => {
        num += 1;
      }, 1000)
    },
    stop: () => {
      clearInterval(intervalId);
    },
    get: () => num,
  };
}

// const timer = createTimer();

// timer.start();
// timer.stop();
// timer.get();