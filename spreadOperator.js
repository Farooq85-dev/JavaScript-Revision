// The spread operator (...) expands elements of an array, object, or iterable into individual elements. It is the opposite of the rest parameter, which gathers elements into an array.

// Basic

// const numbers = [1, 2, 3];
// const expanded = [...numbers, 4, 5];
// console.log(expanded); // Output: [1, 2, 3, 4, 5]

// const numbers = [[1, 2, 3]];
// const expanded = [...numbers, 4, 5];
// console.log(expanded); // Output: [[1, 2, 3], 4, 5]

// const array1 = [1, 2];
// const array2 = [3, 4];
// const combined = { ...array1, ...array2 };
// console.log(combined); // Output: {"0", 3, "1", 4}

// const array1 = [1, 2];
// const array2 = [3, 4];
// const combined = [...array1, ...array2];
// console.log(combined); // Output: [1, 2, 3, 4]

// const original = [1, 2, 3];
// const copy = [...original];
// console.log(copy); // Output: [1, 2, 3]

// const obj = {
//   userName: "Muhammad Farooq",
//   userEmail: "farooq@gmail.com",
// };
// const updatedObj = { ...obj, userEmail: "faiq@gmail.com" };
// console.log(updatedObj);

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const merged = { ...obj1, ...obj2 };
// console.log(merged); // Output: { a: 1, b: 3, c: 4 }

// const numbers = [10, 20, 30];
// console.log(Math.max(...numbers)); // Output: 30

// const numbers = [10, 20, 30];
// console.log(Math.min(...numbers)); // Output: 10

// Convert string into array
// const str = "Farooq";
// const splitIntoArray = [...str];
// console.log(splitIntoArray);


const original = [1, 2, 3];
const clone = [...original];

clone.push(4);
console.log(original); // Output: [1, 2, 3]
console.log(clone);    // Output: [1, 2, 3, 4]
