const action = prompt('Enter action + - / *');
const operandA = Number(prompt('Enter operand A'));
const operandB = Number(prompt('Enter operand B'));
let result;

switch (action) {
  case '+':
    result = operandA + operandB;
    break;
  case '-':
    result = operandA - operandB;
    break;
  case '/':
    result = operandA / operandB;
    break;
}

alert(`${operandA} ${action} ${operandB} = ${result}`);
