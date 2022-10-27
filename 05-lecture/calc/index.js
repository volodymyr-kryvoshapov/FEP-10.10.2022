const ACTIONS = { '+': add, '-': sub, '/': div };
const ACTION_LIST = Object.keys(ACTIONS);
const action = getAction();
const operandsCount = getOperandsCount();
const operands = getOperands();
let result = calculate(action, operands);

showResult(action, operands, result);


function getAction() {
  let action;

  do {
    action = prompt(`Enter action ${ACTION_LIST.join(', ')}`);
  } while (!isValidAction(action));

  return action;
}

function isValidAction(action) {
  return ACTION_LIST.includes(action);
}

function getOperandsCount() {
  let num;

  do {
    num = prompt(`Enter operands county`);
  } while (!isOperandsCountValid(num));

  return num;
}

function isOperandsCountValid(num) {
  return !isNaN(num) && num !== '' && num < 5 && num > 1;
}

function getOperands() {
  const res = [];

  for(let i = 1; i <= operandsCount; i++) {
    res.push(getOperand(i));
  }

  return res;
}

function getOperand(operandName) {
  let num;

  do {
    num = prompt(`Enter operand ${operandName}`);
  } while (!isValidOperand(num));

  return Number(num);
}

function isValidOperand(num) {
  return !isNaN(num) && num !== '';
}

function calculate(operator, operands) { // '+', [3, 5, 9]
  let number = operands[0]; // 3

  for (let i = 1; i < operands.length; i++) {
    // switch (operator) {
    //   case '+':
    //     number = add(number, operands[i]);
    //     break;
    //   case '-':
    //     number = sub(number, operands[i]);
    //     break;
    //   case '/':
    //     number = div(number, operands[i]);
    //     break;
    // }

    number = ACTIONS[operator](number, operands[i]);
  }

  return number;
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b;
}

function showResult(operator, operands, result) { // '+', [3, 5, 9], 17
  alert(`${operands.join(` ${operator} `)} = ${result}`);
}
