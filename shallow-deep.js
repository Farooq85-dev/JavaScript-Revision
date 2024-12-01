// Deep Copy
// A completely new copy is created so nested is also copied not referenced.
// Deep copy doesn't affect the original.

// const original = {
//   name: "Alice",
//   age: 25,
//   address: { city: "New York", zip: 10001 },
// };

// const deepCopy = JSON.parse(JSON.stringify(original));

// deepCopy.name = "Bob";
// deepCopy.address.city = "London";
// console.log(original);
// console.log(deepCopy);

// Shallow Copy
// Only outer structure is copied but nested still referenced. So refrenced part affect in original and also copy

// const original = {
//   name: "Alice",
//   age: 25,
//   address: { city: "New York", zip: 10001 },
// };

// const shallowCopy = { ...original };
// shallowCopy.name = "Bob";
// shallowCopy.address.city = "London";
// console.log(original);
// console.log(shallowCopy);
