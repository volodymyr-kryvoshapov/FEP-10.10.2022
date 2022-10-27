// let i = 0;

// while (i < 3) { // true
//   console.log(i);
//   // i = i + 1;
//   // i += 1;
//   i++
// }

// let i = 3;
//
// do {
//   console.log(i);
//   i += 1;
// } while (i < 3);

// let num;
//
// do {
//   num = prompt('Enter number');
// } while (isNaN(num) || num === '');
//
// console.log(num);


// for (let i = 1, k = 2; i < 100; i += 2, k += 2) {
//   console.log(i, k);
// }


// const pets = ['cat', 'dog', 'elephant', 'bat', 'rat'];
//
// for (let i = 0; i < pets.length; i++) {
//   console.log(i, pets[i]);
// }

// const pets = ['cat', 'dog', 'elephant', 'bat', 'rat'];
//
// for (const pet of pets) {
//   console.log(pet);
// }

// const user = {
//   type: 'admin',
// }
//
// const person = {
//   __proto__: user,
//   name: 'Tom',
//   age: 42,
// };
//
//
// for (const propName in person) {
//   if (Object.hasOwn(person, propName)) {
//     console.log(propName, person[propName])
//   }
// }

// // break
//
// for (let i = 1; i < 100; i += 2) {
//   if (i === 51) {
//     console.log('break', i);
//     break;
//   }
//   console.log(i);
// }
//
// console.log('code after break');



// for (let i = 1; i < 100; i += 2) {
//   if (i === 51) {
//     console.log('continue');
//     continue;
//   }
//   console.log(i);
// }
//
// console.log('code after break');