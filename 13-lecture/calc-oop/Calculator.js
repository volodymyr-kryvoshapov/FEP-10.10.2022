'use strict'

function Calculator(base) {
  if (!isNumber(base)) {
    throw new Error('xxxx');
  }

  this.base = base;

  this.add = function (num) {
    if (isNumber(num)) {
      this.base += num;
    }
  }

  this.sub = function (num) {
    if (isNumber(num)) {
      this.base -= num;
    }
  }

  this.set = function (num) {
    if (!isNumber(num)) {
      return;
    }
    this.base = num;
  }

  this.get = function () {
    return this.base;
  }
}