// function Article(format, title) {
//   this.format = format;
//   this.title = title;
// }
//
// Article.FORMAT_1_COLUMN = {
//   text: 'bold',
//   color: 'red'
// };
//
// Article.FORMAT_2_COLUMN = {
//   text: 'bold',
//   color: 'green'
// };
//
// Article.compare = function(article1, article2) {
//
// }
//
// const art = new Article(Article.FORMAT_1_COLUMN, 'xxx');
// const art2 = new Article(Article.FORMAT_2_COLUMN, 'yyy');
//
// console.log(art)
// console.log(art2)
//
// console.dir(Article)

// Article.compare(article1, article2)


// function Person(name) {
//   this.name = name;
// }

// const person = {
//   name: 'Harry',
// };
// const person = new Person('John');
//
// console.log(Object.keys(person))







function Hamburger(size) {
  // implement
}

Hamburger.SIZE_SMALL = {
  price: 100,
  callories: 8888,
}

Hamburger.TOPPING_MAYO = {
  price: 20,
  callories: 42,
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);


console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Callories with sauce: ' + hamburger.getCallories());