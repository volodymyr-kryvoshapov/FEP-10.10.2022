// const rabbit = {
//   name: 'Bob',
//   color: 'white',
//   maxSpeed: 8,
//   eats: true,
//   sayName() {
//     console.log(`My name is ${this.name}`);
//   },
//   run() {
//     console.log(`I am running with speed ${this.maxSpeed}`);
//   },
// }
//
// const rabbit2 = {
//   name: 'Jessika',
//   color: 'brown',
//   maxSpeed: 17,
//   eats: true,
//   sayName() {
//     console.log(`My name is ${this.name}`);
//   },
//   run() {
//     console.log(`I am running with speed ${this.maxSpeed}`);
//   },
// }
//
// const rabbit3 = {
//   name: 'Eric',
//   color: 'red',
//   maxSpeed: 37,
//   eats: true,
//   sayName() {
//     console.log(`My name is ${this.name}`);
//   },
//   run() {
//     console.log(`I am running with speed ${this.maxSpeed}`);
//   },
// }

'use strict'

function Wolf() {

}

function Rabbit(name, color, maxSpeed, eats, habitat) {
  // 1. this = {};
  // 2. added props into this
  this.name = name;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.eats = eats;
  this.habitat = habitat;

  this.sayName = function () {
    console.log(`My name is ${this.name}`);
  }
  this.run = function () {
    console.log(`I am running with speed ${this.maxSpeed}`);
  }

  // 3. this[[Prototype]] = F.prototype
  // 4. return this;
} // undefined

const rabbit = new Rabbit('Bob', 'white', 8, true);
const rabbit2 = new Rabbit('Jessika', 'brown', 17, true, 'brick house');
const rabbit3 = new Rabbit('Eric', 'red', 37, true);

console.log(rabbit)
console.log(rabbit2)
console.log(rabbit3) // undefined


console.log(rabbit3 instanceof Rabbit) // true
console.log(rabbit3 instanceof Wolf) // false



