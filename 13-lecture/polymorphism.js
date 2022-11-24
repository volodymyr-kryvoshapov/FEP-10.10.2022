// const animal = {
//   voice() {
//     console.log('Hello!');
//   },
// }
//
//
// const dog = {
//   __proto__: animal,
//   voice() {
//     console.log('Barking dog!');
//   }
// }
//
// const duck = {
//   __proto__: animal,
//   voice() {
//     console.log('Quack duck!');
//   }
// }
//
// dog.voice(); // Barking dog!
// duck.voice(); // Quack duck!


function Animal() {}

Animal.prototype.voice = function () {
  console.log('Hello!');
}

function Dog() {}

Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

Dog.prototype.voice = function () {
  console.log('Barking dog!');
}

const dog = new Dog();

dog.voice(); // Barking dog!
console.log(dog)