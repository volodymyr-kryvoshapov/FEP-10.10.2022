// const mazda = {
//   isLightOn: false,
//   model: 'Mazda',
//   toggleLight: function () {
//     this.isLightOn = !this.isLightOn;
//   }
// };
//
// const toyota = {
//   isLightOn: false,
//   model: 'Toyota',
//   toggleLight: function () {
//     this.isLightOn = !this.isLightOn;
//   }
// };



// const vehicle = {
//   // [[Prototype]]: Object
//   toggleLight: function () {
//     this.isLightOn = !this.isLightOn;
//   }
// }
//
// const mazda = {
//   __proto__: vehicle, // [[Prototype]]: vehicle
//   isLightOn: false,
//   model: 'Mazda',
//   toString: function () {
//     return 'Mazda vehicle object';
//   },
// };
//
// const toyota = {
//   __proto__: vehicle,
//   isLightOn: false,
//   model: 'Toyota',
// };

// console.log(mazda.toString())
// console.log(toyota)

// Object




// setPrototypeOf() / getPrototypeOf()

// const vehicle = {
//   toggleLight: function () {
//     this.isLightOn = !this.isLightOn;
//   }
// }
//
// const mazda = {
//   isLightOn: true,
//   model: 'Mazda',
//   toString: function () {
//     return 'Mazda vehicle object';
//   },
// };
//
// const toyota = {
//   isLightOn: false,
//   model: 'Toyota',
// };
//
//
// Object.setPrototypeOf(mazda, vehicle);
// Object.setPrototypeOf(toyota, vehicle);
//
// console.log(mazda.toString())
// console.log(toyota)



// FC

// function Vehicle(model, isLightOn) {
//   this.model = model;
//   this.isLightOn = isLightOn;
//
//   this.toggleLight = function () {
//     this.isLightOn = !this.isLightOn;
//   }
// }
//
// const mazda = new Vehicle('Mazda', true);
// const toyota = new Vehicle('Toyota', false);
//
// console.log(mazda)
// console.log(toyota)


// function Vehicle(model, isLightOn) {
//   this.model = model;
//   this.isLightOn = isLightOn;
// }

// // Vehicle.prototype = { constructor: Vehicle };

// Vehicle.prototype.toggleLight = function () {
//   this.isLightOn = !this.isLightOn;
// }
//
// Vehicle.prototype.fun = function () {
//   console.log('do some thing fun')
// }

// Vehicle.prototype = {
//   constructor: Vehicle,
//   toggleLight: function () {
//     this.isLightOn = !this.isLightOn;
//   },
// }

// const mazda = new Vehicle('Mazda', true);
// const toyota = new Vehicle('Toyota', false);
//
// console.log(mazda)
// console.log(toyota)




// inheritance between 2 FC

function Vehicle(model, isLightOn) {
  this.model = model;
  this.isLightOn = isLightOn;
}

Vehicle.prototype.toggleLight = function () {
  this.isLightOn = !this.isLightOn;
}

Vehicle.prototype.fun = function () {
  console.log('do some thing fun', `Migalka status: ${this.isMigalkaOn}`)
}


function Police() {
  this.isMigalkaOn = true;
}

Police.prototype = new Vehicle('Police', true);

Police.prototype.constructor = Police;

Police.prototype.toggleMigalka = function () {
  this.isMigalkaOn = !this.isMigalkaOn;
}

const police = new Police();
const police2 = new Police();

police.toggleLight();
police.toggleMigalka();
police.toggleMigalka();
police.fun();

console.log(police)





