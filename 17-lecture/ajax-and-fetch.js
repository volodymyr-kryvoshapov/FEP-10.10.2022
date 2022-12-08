// XMLHttpRequest
// const req = new XMLHttpRequest();
//
// req.addEventListener("load", reqListener);
// req.open("GET", "https://jsonplaceholder.typicode.com/posts");
// req.send();
//
// function reqListener () {
//   console.log(JSON.parse(this.responseText));
// }

// fetch()

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     response.json().then((data) => {
//       console.log(data)
//     })
//   })

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data)
//   })

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then((data) => console.log(data))