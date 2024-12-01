// Default parameters in JavaScript allow you to initialize function parameters with default values if no value or undefined is explicitly passed during the function call.

// If no value or value is null or value is undefined. Then, default params shows their responsibility.

// function greet(name = "Guest") {
//   console.log(`Hello, ${name}!`);
// }

// greet(null); // Output: Hello, Guest!
// greet("Alice"); // Output: Hello, Alice!

// function multiply(a = 1, b = 1) {
//   return a * b;
// }

// console.log(multiply()); // Output: 1
// console.log(multiply(5)); // Output: 5
// console.log(multiply(5, 3)); // Output: 15

// function calculateTotal(price, tax = price * 0.1) {
//   return price + tax;
// }

// console.log(calculateTotal(100, 15));

// function displayUser({ name = "Anonymous", age = 18 }={}) {
//   console.log(`Name: ${name}, Age: ${age}`);
// }

// displayUser(); // Output: Name: Anonymous, Age: 18
// displayUser({ name: "John" }); // Output: Name: John, Age: 18

// function describePerson(name, role = `${name} is a student`) {
//   return role;
// }

// console.log(describePerson("Alice")); // Output: Alice is a student

// function sum(a, b = 0, ...rest) {
//   return a + b + rest.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(sum(5)); // Output: 5
// console.log(sum(5, 10, 15, 20)); // Output: 50
