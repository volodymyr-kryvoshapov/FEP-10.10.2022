const ACTIONS = { '+': add, '-': sub, '/': div };
const ACTION_LIST = Object.keys(ACTIONS);
const action = getAction();
const operandA = getOperand('A');
const operandB = getOperand('B');

if (
  isValidAction(action)
  && isValidOperand(operandA)
  && isValidOperand(operandB)
) {
  let result = calculate(action, operandA, operandB);

  showResult(action, operandA, operandB, result);
} else {
  showError();
}


function getAction() {
  return prompt(`Enter action ${ACTION_LIST.join(', ')}`);
}

function getOperand(operandName) {
  return Number(prompt(`Enter operand ${operandName}`));
}

function isValidAction(action) {
  return ACTION_LIST.includes(action);
}

function isValidOperand(num) {
  return !isNaN(num);
}

function calculate(operator, numA, numB) {
  // switch (operator) {
  //   case '+': return add(numA, numB);
  //   case '-': return sub(numA, numB);
  //   case '/': return div(numA, numB);
  // }

  return ACTIONS[operator](numA, numB);
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

function showResult(operator, numA, numB, result) {
  alert(`${numA} ${operator} ${numB} = ${result}`);
}


function showError() {
  alert('Invalid some input data');
}



// К предыдущему ДЗ добавить валидацию оператора и операндов.
//   Оператор должен быть только один из тех, которые мы обрабатываем.
//   Операнд - обязательно число.
//
//   Разбиваем программу на переиспользуемые блоки кода (функции), названия функций придумываем сами:
//   - ф. получить арифметический оператор
// - ф. получить операнд
// - ф. посчитать
// - ф. показать результат
//
// (!) Каждая ф. должна быть независимой от внешних переменных т.е. принимать аргументы и возвращать результат.
// (!) Переписываем свою домашку, а не мою.
// (!) Соблюдаем стиль кода: функции размещаем внизу, а вызовы функций вверху.
// (!) Валидация должна быть самой простой. Используем isNaN для валидации числа.
//
// Порядок работы программы:
// 1. получаем значения всех переменных
// 2. валидируем данные:
//   оператор - один из разрешенных, как вариант используйте массив + .includes()
// операнд - число, используйте isNaN()
// 3. Если данные валидны то все считаем и показываем результат иначе показываем alert c общей ошибкой: 'Вы ввели неверные данные'. Детализиировать ошибку не надо!