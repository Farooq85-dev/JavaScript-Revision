// Closure is just a combinatoion of function and its lexical scope (a scope where it is created). Closure remember and access the variables from its scope howevere the outer function has been executed.

// How Works?
// When a function created inside another function innere function has access to outer but outer have not.

// Why outer not?
// because innere closes it variables and creaes a closure.

// Basic Cosure

// function parent() {
//   let userName = "Farooq";

//   function child() {
//     console.log(userName);
//   }
//   child();
// }
// console.log(parent());

// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     return count;
//   };
// }
// const inner = outer();
// console.log(inner());

// Private varaibles

// function a() {
//   let count = 0;
//   return {
//     increment: () => count++,
//     decrement: () => count--,
//   };
// }
// const call = a();
// console.log(call.increment());

//Use cases:-

// Creating Private Varialbes
// Maintaining State
// Reuseable Code
