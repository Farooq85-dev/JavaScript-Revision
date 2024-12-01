// Destructuring is a convenient way of extracting values from arrays or objects and assigning them to variables.

// Array Destructuring

// Simple
// const fruits = ["apple", "mango", "banana"];
// const [a, b, c] = fruits;
// console.log(a);

// Skipping Values
// const students = ["Ahmed", "Farooq", "Ghous"];
// const [, , c] = students;
// console.log(c);

// Default Values
// const riders = [, "Arsaln", "faizan"];
// const [a = "Faiq", b, c] = riders;
// console.log(a);

// const riders = ["Arsaln", "faizan"];
// const [a = "Faiq", b, c] = riders;
// console.log(a);

// Rest operator
// const teachers = ["Fahad", "Aslam", "Khan"];
// const [a, ...b] = teachers;
// console.log(b);

// Object Destructuring

// Simple
// const person = { name: "Alice", age: 25, city: "New York" };
// const { name, age, city } = person;
// console.log(name);

// Renaming Variables
// const user = { username: "JohnDoe", email: "john@example.com" };
// const { username: userName, email: userEmail } = user;
// console.log(userName);
// console.log(userEmail);

// Default Values
// const students = {
//   a: undefined,
//   b: "Aslam",
// };
// const { a = "Faheem", b } = students;
// console.log(a);

// const obj = {
//   name: "Bob",
//   age: 40,
//   country: "USA",
// };
// const { a, ...b } = obj;
// console.log(b);

// Nested Destructuring

// const user = {
//   name: "Charlie",
//   address: {
//     city: "Chicago",
//     state: "Illinois",
//   },
// };

// const {
//   address: { city, state },
// } = user;

// console.log(city);
// console.log(state);

// const data = {
//   items: [10, 20, 30],
// };
// const {
//   items: [a, b, c],
// } = data;

// console.log(a);

// Functions poarams destructuring....
// function greet({ name, age }) {
//   return `Hy! ${name}. Your age is ${age}`;
// }

// console.log(greet({ name: "John", age: 20 }));

// Swapping Variables
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);

// Benefits
// Makes code more concise and readable.
// Reduces repetitive code.
