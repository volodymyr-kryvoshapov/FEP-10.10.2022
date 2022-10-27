const action = prompt('Enter action + - / *');
const operandA = getOperand('A');
const operandB = getOperand('B');
let result = calculate(action, operandA, operandB);

showResult(action, operandA, operandB, result);


function getOperand(operandName) {
  return Number(prompt(`Enter operand ${operandName}`));
}

function calculate(operator, numA, numB) {
  switch (operator) {
    case '+': return add(numA, numB);
    case '-': return sub(numA, numB);
    case '/': return div(numA, numB);
  }
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a + b;
}

function div(a, b) {
  return a + b;
}

function showResult(operator, numA, numB, result) {
  alert(`${numA} ${operator} ${numB} = ${result}`);
}
