// 1) С помощью prompt спрашиваем у пользователя что он хочет сделать (+ - / *).
// 2) С помощью prompt спрашиваем у пользователя первое число.
// 3) С помощью prompt спрашиваем у пользователя второе число.
// 4) С помощью alert выводим результат действия со всеми операндами (Например "2 + 3 = 5" )

const action = prompt('Enter action + - / *');
const operandA = prompt('Enter operand A');
const operandB = prompt('Enter operand B');

if (action === '+') {
  alert(`${operandA} ${action} ${operandB} = ${Number(operandA) + Number(operandB)}`);
} else if (action === '-') {
  alert(`${operandA} ${action} ${operandB} = ${Number(operandA) - Number(operandB)}`);
} else if (action === '/') {
  alert(`${operandA} ${action} ${operandB} = ${Number(operandA) / Number(operandB)}`);
}