// const fruits = [
//   "Apple",
//   "Orange",
//   "Plum",
// ];

// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])

// fruits[1] = 'Grape';
// fruits[3] = 'Lemon';
// console.log(fruits)


// let arr = [
//   'Apple',                          // 0
//   { name: 'John', 'qwe asd': 'xxx' },// 1
//   true,                             // 2
//   function(name) { console.log(`Hi ${name}`); }, // 3
//   function(name) { // 4
//     return { name: 'Tom' };
//   }
// ];

// console.log(arr[1]['qwe asd'])
// console.log(arr[1].name)
// console.log(arr[3]('John'))
// console.log(arr[4]().name)


// push / unshift

// const fruits = [
//   "Apple",
//   "Orange",
//   "Plum",
// ];
//
// fruits.push('Lemon');
// fruits.unshift('Banana');

// console.log(fruits)



// pop / shift

// const fruits = [
//   'Banana',
//   "Apple",
//   "Orange",
//   "Plum",
//   'Lemon',
// ];
//
// const lem = fruits.pop();
//
// fruits.pop()
// fruits.pop()
// fruits.pop()
//
// console.log(lem, fruits)
//
// let matrix = [
//   [1, 2, 3], // 0
//   [4, 5, 6], // 1
//   [7, 8, 9]  // 2
// ];
//
// console.log(matrix[1][1]) // 5

const fruits = [
  'Banana',
  "Apple",
  "Plum",
  'Lemon',
];

console.log(fruits.includes("Orange")) // false
console.log(fruits.includes("Apple")) // true

console.log(fruits.join('; '));

