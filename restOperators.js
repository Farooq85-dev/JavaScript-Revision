// The rest parameter syntax (...) allows a function to accept an indefinite number of arguments as an array. It provides a cleaner and more flexible way to work with variable numbers of arguments.

// Basic Sytnax

// function student(...students) {
//   return students; // Returns an array that contains students
// }

// console.log(student("arslan", "faizan", "faiq"));

// function a(b, c, ...d) {
//   return d;
// }

// console.log(a(1, 2));

// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3, 4)); // Output: 10
// console.log(sum(10, 20)); // Output: 30

// function logDetails(id, ...details) {
//   console.log(`ID: ${id}`);
//   console.log(`Details:`, details);
// }

// logDetails(101, "John Doe", "john@example.com", 25);
// // Output:
// // ID: 101
// // Details: [ 'John Doe', 'john@example.com', 25 ]

// function multiply(multiplier = 1, ...numbers) {
//     return numbers.map(num => num * multiplier);
//   }

//   console.log(multiply(2, 3, 4, 5)); // Output: [6, 8, 10]
//   console.log(multiply(undefined, 3, 4, 5)); // Output: [3, 4, 5]
