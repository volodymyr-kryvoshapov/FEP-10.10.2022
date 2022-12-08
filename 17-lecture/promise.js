// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // console.log('Second passed away');
//     // resolve();
//     reject(new Error('Some error text'));
//   }, 1000)
// });
//
// promise
//   .then(() => {
//     console.log('Job done');
//   })
//   .catch((e) => {
//     console.log(e.message);
//   })

// 1. resolve (fulfilled)
// 2. reject
// 3. pending




// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve({ name: 'John' });
//     // reject(new Error('Some error text'));
//   }, 1000)
// });
//
// promise
//   .then((data) => {
//     console.log('Job done', data);
//   })
//   .catch((e) => {
//     console.log(e.message);
//   })


// loadScript('react.js')
//   .then((scriptData) => {
//     console.log(scriptData);
//
//     loadScript('Accordion.js')
//       .then((scriptData) => {
//         console.log(scriptData);
//
//         loadScript('index.js')
//           .then((scriptData) => {
//             console.log(scriptData);
//
//
//           })
//           .catch((e) => {
//             console.log(e.message);
//           })
//       })
//       .catch((e) => {
//         console.log(e.message);
//       })
//   })
//   .catch((e) => {
//     console.log(e.message);
//   })


// loadScript('react.js')
//   .then((scriptData) => {
//     console.log(scriptData);
//
//     return loadScript('Accordion.js')
//   })
//   .then((accordionScriptData) => {
//     console.log(accordionScriptData);
//
//     return loadScript('index.js')
//   })
//   .catch((e) => {
//     console.log(e.message);
//   })
//
//
// function loadScript(path) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => { // some async action
//       if (path === 'Accordion.js') {
//         reject(new Error('Some accordion script error'));
//       } else {
//         resolve(`'${path}' script data loaded`);
//       }
//     }, 1000)
//   });
// }


// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(8);
//   }, 1000)
// })
// .then((data) => { // 8
//   console.log(data)
//
//   return data * 2;
// })
// .then((data) => { // 16
//   console.log(data)
//
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(data * 5);
//     }, 1000)
//   });
// })
// .then((data) => { // 80
//   console.log(data)
// })


// .then() всегда возвращает новый промис (объект)


// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 1000)
// });

// promise
//   .then(() => 42)
//   .then((data) => {
//     console.log(data)
//   })
//   .then((data) => {
//
//   })
//   .then(() => {})
//   .then(() => {})