// Синхронно: 1,2,3
// alert(1);
// alert(2);
// alert(3);

// Асинхронно: 1,3,2

const a = 42;

console.log(1);
setTimeout(() => console.log(2), 1000);
console.log(3);