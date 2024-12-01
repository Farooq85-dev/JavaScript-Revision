// A Map is a built-in JavaScript object that holds key-value pairs where both the keys and values can be any data type (primitive or objects). Unlike objects, where keys are typically strings or symbols, in a Map, keys can be of any type, including objects, functions, and primitive types.

const myMap = new Map([
  ["name", "Farooq"],
  ["className", "12th"],
]);

// myMap.set("id", "2024");
// console.log(myMap.get("id"));
// console.log(myMap.has("className"));
// console.log(myMap.delete("id"));
// console.log(myMap.has("className"));
// myMap.clear();

// for (let [key, value] of myMap) {
//   console.log(key, value);
// }

myMap.forEach((value, key) => {
  console.log(key, value);
});
