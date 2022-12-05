document.querySelector('#increment-btn').addEventListener('click', onIncBtnClick)
document.querySelector('#heavy-btn').addEventListener('click', onHeavyBtnClick)

let clicksQuantity = 0;

function onIncBtnClick(e) {
  clicksQuantity += 1;
  document.querySelector('#container').textContent = clicksQuantity;
}

function onHeavyBtnClick(e) {
  heavyWork(400000); // 8 sec
  console.log('heavy finished');
}


function heavyWork(n) {
  const numbers = [];

  nextPrime:
    for (let i = 2; i <= n; i++) {
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          continue nextPrime;
        }
      }

      numbers.push(i);
    }
}
