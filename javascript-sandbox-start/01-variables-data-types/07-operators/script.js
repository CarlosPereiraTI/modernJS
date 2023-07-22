// * 1. Arithmetic Operators
let x;
x = 5 + 5; // 10
x = 5 - 5; // 0
x = 5 * 5; // 25
x = 5 / 5; // 1
x = 5 % 5; // 0

// Concatenation
x = 'Hello' + ' ' + 'World';
// Exponent
x = 2 ** 3; // 8

// Increment
x++;

// Decrement
x--;

console.log(x);



// * 2. Assignment Operators

let y = 5;

y += 5; // 5
y -= 5; // 5
y *= 5; // 25
y /= 5; // 5
y %= 5; // 0
y **= 5; // 0


console.log(y);


// * 3. Comparison Operators

// Note triple = also compare the type

let z;
z = 2 == 2; // true
z = 2 === 2 // true

// Note triple = also compare the type

z = 2 == 2; // true
z = 2 === '2'; // false

z = 2 != 2; // false
z = 2 !== '2'; // true

z = 10 > 5; // true
z = 10 < 5; // false
z = 10 >= 5; // true
z = 10 <= 5; // false

console.log(z);