// Optional chaining (?.) is a feature introduced in ES11 (ECMAScript 2020). It provides a safe way to access nested properties of an object without having to manually check for null or undefined at each level.

// const user = {
//   profile: {
//     name: "Alice",
//   },
// };

// Safe property access
// console.log(user.profile?.name); // Output: Alice
// console.log(user.profile?.age); // Output: undefined

// const user = {
//   greet: () => "Hello!",
// };

// console.log(user.greet?.()); // Output: Hello!
// console.log(user?.farewell?.()); // Output: undefined

// Nullish Operator

// const user = {
//   profile: null,
// };
// console.log(user.profile?.name ?? "Guest");

let userName = null;
console.log(userName ?? "Fahad");
