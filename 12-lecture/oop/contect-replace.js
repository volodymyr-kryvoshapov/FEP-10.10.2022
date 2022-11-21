'use strict'

const wolf = { type: 'Wolf' };
const cat = { type: 'Cat' };
const monkey = { type: 'Monkey' };

function run() {
  console.log(this.type);
}

function run2(speed, isJump = false) {
  console.log(`${this.type} runing with speed ${speed}${isJump ? ' and jumping' : ''}`);
}

// console.dir(run)
//
// run2.call(cat, 35, false)
// run2.call({ type: 'Monkey' }, 35, true)

// const wolf = {
//   type: 'Wolf',
//   run() {
//     console.log(this.type);
//   }
// };
//
// wolf.run();


// run.apply()
// run2.apply(cat, [35, false])
// run2.apply({ type: 'Monkey' }, [35, true])

// run.bind()

const run2WithWolfContext = run2.bind(wolf, 50, false); // create new Fn
run2WithWolfContext()

// run2WithWolfContext.call(cat, 20); // Wolf runing with speed 50