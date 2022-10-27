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

// Array.isArray()

// console.log(Array.isArray('qwe')) // false
// console.log(Array.isArray(pets)) // true

// .includes()

// console.log(pets.includes('elephant')) // true
// console.log(pets.includes('rabbit')) // false

// .indexOf()

// console.log(pets.indexOf('elephant')) // 2
// console.log(pets.indexOf('rabbit')) // -1

// .join()

// console.log(pets.join(' ')) // 'cat dog elephant bat rat giraffe'

// .concat()

// console.log(pets.concat(beasts)) // ['cat', 'dog', 'elephant', 'bat', 'rat', 'giraffe', 'ant', 'bison', 'camel', 'duck', 'bison']
// console.log([...pets, ...beasts])

// .splice()

// let arr = ["one", "two", "three"];

// delete arr[1]
// console.log(arr); // ['one', undefined, 'three']
// arr.splice(1, 1); // ["two"] in place
// console.log(arr) // ["one", "three"]



// const pets = ['cat', 'dog', 'rat', 'giraffe'];

// pets.splice(2, 0, 'elephant', 'bat');
// pets.splice(2, 1, 'elephant');

// console.log(pets)


// .slice()
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// const animals2 = animals.slice();
// const animals2 = [...animals];

// console.log(animals)
// console.log(animals2)
// console.log(animals === animals2) // false

// console.log(animals.slice(0, 4))


// .sort() in place

// const myarray = ["Bob", "Bully", "Amy"]
//
// myarray.sort();
//
// console.log(myarray)


// const myarray = [25, 7, 50, 400]
//
// myarray.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (a === b) {
//     return 0
//   }
//
//   return -1;
// }) // 1, 0, -1
//
// console.log(myarray)


// .reverse()

const myarray = [25, 7, 50, 400]

console.log(myarray.reverse())