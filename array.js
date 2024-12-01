// JavaScript arrays come with a plethora of built-in methods that make manipulating, iterating, and transforming data simple and efficient.

// Array.from
// console.log(Array.from("hello")); // ['h', 'e', 'l', 'l', 'o']

// isArray
// console.log(Array.isArray([1, 2, 3])); // true

// push
// const arr = [1, 2];
// arr.push(3); // Returns updated length
// console.log(arr);

// pop
// const removed = arr.pop();
// console.log(removed); // [1, 2]

// unshift
// const added = arr.unshift(0);
// console.log(added); // [0, 1, 2]

// shift
// arr.shift();
// console.log(arr); // [1, 2]

// concat

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// console.log(arr1.concat(arr2)); // [1, 2, 3, 4]

// slice
// Returns Shallow Copy
// const arr = [1, 2, 3, 4];
// console.log(arr.slice(1, 3)); // [2, 3]

// splice
// arr.splice(1, 1, 99);
// console.log(arr); // [1, 99, 3, 4]

// join
// const arr = ["a", "b", "c"];
// console.log(arr.join(", ")); // 'a-b-c'

// indexOf
// Returns the index of the first occurrence of a value.
// const arr = [1, 2, 3];
// console.log(arr.indexOf(1)); // 1

// lastIndexOf
// Returns the index of the last occurrence of a value.
// const arr = [1, 2, 65, 654, 484, 484, 484];
// console.log(arr.lastIndexOf(484));

// includes
// Return true or false
// console.log(arr.includes(2)); // true

// find
// Returns the first element that satisfies a condition.
// const arr = [1, 2, 3];
// console.log(arr.find((num) => num > 1)); // 2

// findIndex
// console.log(arr.findIndex((num) => num > 1)); // 1

// filter
// const arr = [1, 2, 3];
// console.log(arr.filter((num) => num > 1)); // [2, 3]

// const users = [
//   {
//     name: "Farooq",
//     className: "12th",
//   },
//   {
//     name: "Arslan",
//     className: "8th",
//   },
//   {
//     name: "Faizan",
//     className: "9th",
//   },
//   {
//     name: "Farooq",
//     className: "9th",
//   },
// ];

// // User ka index maloom krna chahte hy jo "Farooq" ke name se first ho
// console.log(users.findIndex((user) => user.name === "Farooq"));
// // aik user ko le aye ga first pe hy
// console.log(users.find((user) => user.name === "Farooq"));
// // returns array of satisfy condition
// console.log(users.filter((user) => user.name === "Farooq"));

// forEach
// const arr = [1, 2, 3];
// arr.forEach((num) => console.log(num));

// map
// const arr = [1, 2, 3];
// const squared = arr.map((num) => num * num);
// console.log(squared); // [1, 4, 9]

// const arr = [1, 2, 3];
// const sum = arr.reduce((acc, num) => acc + num, 1);
// console.log(sum); // 6

// const arr = [1, 2, 3];
// const sum = arr.reduce((acc, num) => acc + num, 2);
// console.log(sum); // 6

// sort
// const arr = [3, 1, 0, 2];
// console.log(arr.sort()); // [1, 2, 3]

// reverse
// console.log(arr.reverse()); // [3, 2, 1]

// some
// const arr = [1, 2, 3];
// console.log(arr.some((num) => num > 2)); // true

// every
// console.log(arr.every((num) => num > 1)); // true

// toString

// const arr = [1, 2, 3];
// console.log(arr.toString()); // '1,2,3'

// const arr = [1, [2, [3]]];
// console.log(arr.flat(2)); // [1, 2, 3]

// const arr = [1, 2, 3];
// console.log(arr.flatMap((num) => [num, num * 2]));
