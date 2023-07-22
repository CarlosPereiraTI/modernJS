// ! Data types

// * Primitive Data Types
// String
// Numbers
// Boolean
// Null
// Undefined
// Symbol
// BigInt



// String
const firstName = 'Sara';

// Number
const age = 35;
const temp = 36.5;

// Boolean
const hasKids = false;

// Null
const aptNumber = null;

// Undefined
let score;

// Symbol
const id = Symbol('id');

// BigInt
const numberBig = 656564646323232;

const output = firstName;
console.log(output, typeof output);


// * Reference Types (Objects)
// literalls
// arrays
// functions

// JS is dynamic typed
// TS is a superset of JS with typing

const numbers = [1,2,3,4,5];

const person = {
    name: 'Marti',
    age: 4
};
console.log(person);