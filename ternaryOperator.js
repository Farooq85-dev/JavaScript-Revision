// The ternary operator is a concise way to write conditional statements in JavaScript. It's a one-liner replacement for simple if-else statements.

const age = 18;
const message = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(message); // Output: You are an adult.

const isLoggedIn = true;
console.log(isLoggedIn ? "Welcome back!" : "Please log in.");
// Output: Welcome back!

const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";

console.log(grade); // Output: B
