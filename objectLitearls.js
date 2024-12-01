// Enhanced object literals, introduced in ES6, make it easier and more concise to define and work with objects. They simplify syntax, support dynamic property names, and allow shorthand for methods and variables.

// const name = "Alice";
// const age = 25;
// // Without shorthand
// const person1 = { name: name, age: age };
// // With shorthand
// const person2 = { name, age };
// console.log(person2);
// console.log(person1);

// const person = {
//   name: "Bob",
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// person.greet();

// const key = "dynamicKey";
// const obj = {
//   [key]: "value",
//   [`computed-${key}`]: "anotherValue",
// };
// console.log(obj);

// const createUser = (id, name) => {
//   return {
//     id,
//     name,
//     [`user_${id}`]: true,
//   };
// };

// console.log(createUser(1, "Alice"));
// console.log(createUser(2, "Arfan"));
// console.log(createUser(3, "Aslam"));

