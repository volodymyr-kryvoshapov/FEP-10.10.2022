// console.log(max([8]), 'one element test, must return 8');
// console.log(max([1, 8, 37, 5, 17]), '5 elements test, must return 37');
// console.log(max([8, 17]), '2 elements test, must return 17');

const arr = [1, 8, 37, 5, 17]

console.log(max3([8]), 'one element test, must return 8');
console.log(max3(arr), '5 elements test, must return 37');
console.log(max3([8, 17]), '2 elements test, must return 17');

console.log('after max()', arr);


function max(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    if (currentNumber > max) {
      max = currentNumber;
    }
  }

  return max;
}

function max2(numbers) {
  if (numbers.length === 1) {
    return numbers[0];
  }

  const possibleMax = numbers[0];
  const possibleMax2 = max2(numbers.slice(1));

  return possibleMax > possibleMax2 ? possibleMax : possibleMax2;
}

function max3(numbers) {
  if (numbers.length === 1) {
    return numbers[0];
  }

  const possibleMax = numbers.pop(); // in place
  const possibleMax2 = max3(numbers);

  return possibleMax > possibleMax2 ? possibleMax : possibleMax2;
}

// const age = 42;
// let allowAlcohol;
//
// if (age > 18) {
//   allowAlcohol = true;
// } else {
//   allowAlcohol = false;
// }

// let allowAlcohol = age > 18 ? true : false;

// variant 2:
// return someCondition ? 2 : 1;

function isAllowAlcohol(age) { // boolean
// if (age > 18) {
//   return true;
// }
//
// return false;

  return age > 18 ? 1 : 0;
}

// variant 2:
// return someCondition ? 2 : 1;
