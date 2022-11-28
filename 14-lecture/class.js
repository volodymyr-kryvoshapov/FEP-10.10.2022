// function Vehicle(model, isLightOn) {
//   this.model = model;
//   this.isLightOn = isLightOn;
//
//   this.details = function () {
//     console.log(`Vechicle model: ${this.model}`);
//   }
// }
//
// Vehicle.prototype.toggleLight = function () {
//   this.isLightOn = !this.isLightOn;
// }
//
// Vehicle.prototype.fun = function () {
//   console.log('do some thing fun', `Migalka status: ${this.isMigalkaOn}`)
// }


class Vehicle { // function
  color = 'no color';

  constructor(model, isLightOn) {
    this.model = model;
    this.isLightOn = isLightOn;

    this.details = function () {
      console.log(`
        Vechicle details
        model: ${this.model}
        color: ${this.color}
        isMigalkaOn: ${this.isMigalkaOn}
      `);
    }
  }

  toggleLight() {
    this.isLightOn = !this.isLightOn;
  }

  fun() {
    console.log('do some thing fun', `Migalka status: ${this.isMigalkaOn}`)
  }
}

console.log(typeof Vehicle === 'function') // true
console.dir(Vehicle)

// class Police extends Vehicle {
//   constructor(model, isLightOn, isMigalkaOn = false) {
//     super(model, isLightOn);
//     this.isMigalkaOn = isMigalkaOn;
//   }
// }
// const police = new Police('Bugatti', true, true);

class Police extends Vehicle {}
// class Taxi extends Vehicle {}
// class Plane extends Vehicle {}
const police = new Police('Bugatti', true);

// const mazda = new Vehicle('Mazda', true);

// console.log(police.details())