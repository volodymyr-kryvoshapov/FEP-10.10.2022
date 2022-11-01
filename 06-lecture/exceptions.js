// const res = first('file');
//
// if (res instanceof Error) {
//   // show Error
// } else {
//   // show Success
// }
//
// function first(file) {
//   return second(file)
// }
//
// function second(file) {
//   return third(file);
// }
//
// function third(file) {
//   // file upload
//   console.log('Hello world')
//   return Error('');
// }


// first('file');

try {
  first('file');
  console.log('After F first call')
} catch (error) {

}

console.log('Code After try-catch')



function first(file) {
  second(file)
}

function second(file) {
  third(file);
}

function third(file) {
  // file upload
  throw new Error('File incorrect');
  console.log('third Hello world')
}
