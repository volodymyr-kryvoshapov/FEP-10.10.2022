String.prototype.show = function () {
  alert(this);
}

String.prototype.ucFirst = function () {
  return this[0].toUpperCase() + this.slice(1);
}

// Object
// Function
// String
// Number
// Array
// Date
// Error
// RegExp