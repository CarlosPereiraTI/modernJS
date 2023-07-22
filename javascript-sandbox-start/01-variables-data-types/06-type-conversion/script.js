// ! Type Conversion

let amount = 100;
let amountFloat = '99.5';

// * Ways to convert it to a number
// amount = parseInt(amount)
// amount = +amount;
amount = Number(amount);
amountFloat = parseFloat(amountFloat);

// * Change a number to a string
// amount = amount.toString();
amount = String(amount);

// * Convert number to a boolean
amount = Boolean(amount); // if amount is 0, the boolean will be false


console.log(amount, typeof amount);
console.log(amountFloat, typeof amountFloat);


