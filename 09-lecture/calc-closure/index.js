function createCalculator(base) {
  const initialBase = base;

  if (!isNumber(base)) {
    throw new Error('base must be a number');
  }

  return {
    add: (num) => {
      if (isNumber(num)) {
        base += num;
      }
    },
    sub: (num) => {
      if (isNumber(num)) {
        base -= num;
      }
    },
    set: (num) => {
      if (isNumber(num)) {
        base = num;
      }
    },
    get: () => base,
    reset: () => {
      base = initialBase;
    },
}
}

function isNumber(num) {
  return !isNaN(num) && num !== '' && num !== null;
}

const calculator = createCalculator(100);

calculator.add(10); // 110 - это текущее значение base
calculator.add(10);
calculator.sub(20);

calculator.set(20);
calculator.add(10);
calculator.add(10);
calculator.add('qwe'); // NaN и значение 40 не менять

console.log(calculator.get() === 40) // 40

calculator.reset();
console.log(calculator.get() === 100) // 100



