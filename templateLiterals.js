// Template literals are introduced in ES6 (2015). The allow us to enmbed expressions, string interpolation and multiline string.

// Syntax
// Templae literals use backitcs instead of single or double quotes.

// String Interpolation
const userName = "Alice";
const userAge = 25;
const greeting = `Hello, my name is ${userName} and I am ${userAge} years old.`;
console.log(greeting);

// Multiline String
const multiline = `This is a 
multiline string.`;
console.log(multiline);

// Expression Evaluation
const a = 10,
  b = 20;
const sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum);
