// ! Strings
let x;

const firstName = 'Charlie';
const age = 35;

// Classic method
x = 'Hello, my name is ' + firstName + ', and I am ' + age + ' years old';

// Template literals
x = `Hello, my name is ${firstName} and I'm ${age} years old`;

// String propoerties and methods
const s = 'Hello World';

x = s.length;

// Access key by value
x = s[1];

// Access prototypes with all available string methods
x = s.__proto__;

x = s.toLowerCase(); // hello world
x = s.toUpperCase(); // HELLO WORLD

x = s.charAt(0); // H

x = s.indexOf('d'); // 10

x = s.substring(0, 4); // Hell

x = s.slice(0, 5); // Hello
x = s.slice(-9, -5) // llo

x = '                Hello World';

x = s.trim(); // Hello World
// Note: esto elimina los espacios

x = s.replace('World', 'JavaScript'); // Hello JavaScript

x = s.includes('Pepe');

x = s.split(''); // return an array
// x = s.split(''); // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
x = s.split(' ');   // ['Hello', 'World']
x = s.split();      // ['Hello World']



console.log(x);