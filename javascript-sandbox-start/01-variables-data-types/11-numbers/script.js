
// ! Working with numbers

let x;

const num = new Number(5);

x = num.toString();

x = num.toString().length;

x = num.toFixed(2); // 5.00

x = num.toPrecision(2);

console.log(num.__proto__);

console.log(x);
console.log(typeof x);