// class Article {
//   static FORMAT_1_COLUMN = {
//     text: 'bold',
//     color: 'red'
//   };
//
//   static FORMAT_2_COLUMN = {
//     text: 'bold',
//     color: 'green'
//   };
//
//   constructor(format, title) {
//     this.format = format;
//     this.title = title;
//   }
//
//   static compare (article1, article2) {
//
//   }
// }
//
// const art = new Article(Article.FORMAT_1_COLUMN, 'xxx');
// const art2 = new Article(Article.FORMAT_2_COLUMN, 'yyy');
//
// console.log(art)
// console.log(art2)
//
// console.dir(Article)
//
// Article.compare(article1, article2)




'use strict';

class Hamburger {
  static SIZE_SMALL = {
    price: 100,
    callories: 8888,
  }

  static TOPPING_MAYO = {
    price: 20,
    callories: 42,
  }

  constructor({ price, callories }) {
    this.price = price;
    this.callories = callories;
  }

  addTopping({ price, callories }) {
    this.price += price;
    this.callories += callories;
  }

  getPrice() {
    return this.price;
  }

  getCallories() {
    return this.callories;
  }

  showSomeStaticProp() {
    console.log(Hamburger.SIZE_SMALL)
  }
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
hamburger.addTopping(Hamburger.TOPPING_MAYO);

const hamburger2 = new Hamburger(Hamburger.SIZE_SMALL);
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// hamburger.addTopping(Hamburger.TOPPING_POTATO);
// hamburger.addTopping(Hamburger.TOPPING_POTATO);


console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Callories with sauce: ' + hamburger.getCallories());