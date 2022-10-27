const action = prompt('Enter action + - / *');
const operandA = Number(prompt('Enter operand A'));
const operandB = Number(prompt('Enter operand B'));
let result;

if (action === '+') {
  result = operandA + operandB;
} else if (action === '-') {
  result = operandA - operandB;
} else if (action === '/') {
  result = operandA / operandB;
}

alert(`${operandA} ${action} ${operandB} = ${result}`);