// const pets = ['cat', 'dog', 'elephant', 'bat', 'rat', 'giraffe'];
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// const elements = ['Fire', 'Air', 'Water'];
// const names = ["Bob", "Sally", "Amy"]
// const numbers = [50, 7, 400];
// let users = [
//   { name: 'Sara', age: 42 },
//   { name: 'Bob', age: 38 },
//   { name: 'Amy', age: 75 },
//   { name: 'Bob', age: 89 },
// ];

// const numbers = [4, 5, 6];

// const result = numbers.reduce((acc, current)  => {
//   const nextNumberSumm = acc + current;
//
//   return nextNumberSumm;
// });

// const result = numbers.reduce((acc, current)  => {
//   return acc + current;
// });

// const result = numbers.reduce((acc, current)  => acc + current);

// const result = numbers.reduce((acc, current, index)  => {
//   const nextNumberSumm = acc + current;
//
//   if (index === 2) {
//     return 'reduce возвращает то что возвращает последняя итерация';
//   }
//
//   return nextNumberSumm;
// });

// console.log(result)


// const patients = [
//   { name: 'John', temperature: 36.6 },
//   { name: 'Tom', temperature: 37 },
//   { name: 'Sara', temperature: 38.2 },
// ];
//
// const temperatureSum = patients.reduce((acc, patient) => {
//   const nextSum = acc + patient.temperature;
//
//   return nextSum;
// }, 0)
//
// console.log(temperatureSum / patients.length)



// .find(): one

// const patients = [
//   { name: 'John', temperature: 36.6 },
//   { name: 'Tom', temperature: 37 },
//   { name: 'Sara', temperature: 38.2 },
// ];

// const emergencyPatient = patients.find(patient => patient.temperature > 36.6);
// console.log(emergencyPatient)




// .filter(): arr
// const arr = patients.filter(patient => patient.temperature > 36.6);
// console.log(arr)





// .forEach()

// patients.forEach(patient => {
//   patient.date = new Date();
// });
//
// console.log(patients)



// .map(): new []

const patients = [
  { name: 'John', temperature: 36.6 },
  { name: 'Tom', temperature: 37 },
  { name: 'Sara', temperature: 38.2 },
];

const names = patients.map(patient => patient.name);

console.log(names)