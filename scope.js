// Variable Scope

// Scope refers to where your variable access in your code

// Globlal Scope
// Local Scope
// Function Scope
// Local Scope
// Lexical Scope

// Global Scope variable access everywhere in our program

// const gl = "Muhammad Farooq";

// function userName() {
//   if (true) console.log(gl);
// }

// userName();

// Local Scope variables only access inside the respective scope like fn scope or block scope
// Function Scope

// function greet() {
//   var userName = "Muhammad Farooq";
//   console.log(userName);
// }

// greet();
// console.log(userName); // Error due to function scope of var

// {
//   var className = "12th";
// }

// console.log(className); // Access it becuase of var it is not block scope

// {
//   let rider = "Usman";
// }

// console.log(rider); // Error of not defined

// {
//   const bike = "Honda";
// }

// console.log(bike); // Error of not defined

// Lexical Scope

// function parent() {
//   let car = "Civic";

//   function child() {
//     console.log(car);
//   }
//   car = "Toyota";
//   child();
// }

// parent(); // output will be Toyota

// Var vs let vs const

// Stored In Global

// var ✔
// let ❌
// const ❌

// Function Scope

// var ✔
// let ✔
// const ✔

// Block Scope

// var ❌
// let ✔
// const ✔

// Hoisting Scope

// var ✔
// let ❌
// const ❌

// Reassigned

// var ✔
// let ✔
// const ❌

// Re-declareable

// var ✔
// let ❌
// const ❌
