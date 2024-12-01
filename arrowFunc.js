// Arrow functions are a concise syntax for writing functions introduced in ES6. They use the => syntax and provide a shorter, more readable way to write function expressions.

// Syntax

// const add = (a, b) => {
//   return a * b;
// };
// console.log(5, 5);

// Concise Syntax

// Single-line functions with implicit return:
// const square = (x) => x * x;
// console.log(square(4));

// Multi-line functions use curly braces with an explicit return:
// const multiply = (a, b) => {
//   const result = a * b;
//   return result;
// };
// console.log(multiply(3, 4)); // Output: 12

// function TraditionalFunction() {
//   this.value = 42;

//   setTimeout(function () {
//     console.log(this.value); // Output: undefined (depends on the caller context)
//   }, 1000);
// }

// function ArrowFunction() {
//   this.value = 42;

//   setTimeout(() => {
//     console.log(this.value); // Output: 42 (inherited from surrounding scope)
//   }, 1000);
// }

// new ArrowFunction();

// const showArguments = (a, b, c) => {
//   console.log(a, b, c);
// };
// showArguments(1, 2, 3);

// function regularFunction() {
//   console.log(arguments);
// }
// regularFunction(1, 2, 3);
