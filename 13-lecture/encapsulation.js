function Calculator(base) {
  this.base = base;
}

Calculator.prototype.add = function(num) {
  this.base += num;
}

Calculator.prototype.get = function() {
  return this.base;
}

const calc = new Calculator(17);

calc.add(3);

// calc.base = 42;

console.log(calc.get())