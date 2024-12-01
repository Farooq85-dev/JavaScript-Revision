// An iterator is an object that provides a way to traverse through a collection, one element at a time. It implements a specific interface, including a next() method that returns an object with:

// const myIterator = {
//   items: [1, 2, 3],
//   currentIndex: 0,
//   next() {
//     if (this.currentIndex < this.items.length) {
//       return { value: this.items[this.currentIndex++], done: false };
//     } else {
//       return { value: undefined, done: true };
//     }
//   },
// };

// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());

// for ... of

// Array
// const numbers = [1, 2, 3];
// for (const num of numbers) {
//   console.log(num);
// }

// String
// const text = "hello";
// for (const char of text) {
//   console.log(char);
// }

// Maps
// const myMap = new Map([
//   ["name", "Alice"],
//   ["age", 25],
// ]);

// for (const [key, value] of myMap) {
//   console.log(`${key}: ${value}`);
// }

// Sets
// const mySet = new Set(["name", "Alice"], ["age", 25]);
// for (const [key, value] of mySet) {
//   console.log(key, value);
// }

// for ... in

// The for...in loop is used to iterate over the enumerable properties (keys) of an object. It works for objects and arrays but is best suited for objects.

// Object
// const obj = {
//   name: "Farooq",
//   className: "10th",
// };
// for (const key in obj) {
//   console.log(key, obj[key]);
// }

// Arrray
// const arr = ["apple", "banana", "cherry"];
// for (const index in arr) {
//   console.log(`Index: ${index}, Value: ${arr[index]}`);
// }
