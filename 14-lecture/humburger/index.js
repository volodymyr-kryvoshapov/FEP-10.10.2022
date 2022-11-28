'use strict';

function Hamburger({ price, callories }) {
  this.price = price;
  this.callories = callories;
}

Hamburger.prototype.addTopping = function ({ price, callories }) {
  this.price += price;
  this.callories += callories;
}

Hamburger.prototype.getPrice = function () {
  return this.price;
}

Hamburger.prototype.getCallories = function () {
  return this.callories;
}

Hamburger.SIZE_SMALL = {
  price: 100,
  callories: 8888,
}

Hamburger.TOPPING_MAYO = {
  price: 20,
  callories: 42,
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// hamburger.addTopping(Hamburger.TOPPING_POTATO);
// hamburger.addTopping(Hamburger.TOPPING_POTATO);


console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Callories with sauce: ' + hamburger.getCallories());