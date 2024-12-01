// A Higher-Order Function (HOF) is a function that either:

// Takes another function as an argument.
// Returns a function.

// Functions like map(), filter(), and reduce() are higher-order functions because they accept other functions as arguments.

const greet = (greeting) => (name) => `${greeting}:- ${name}`;

const sayHello = greet("Hello");
console.log(sayHello("Alice")); // Hello, Alice!
console.log(sayHello("Bob")); // Hello, Bob!

const measureTime = (fn) => {
  return (...args) => {
    const start = Date.now();
    const result = fn(...args);
    const end = Date.now();
    console.log(`Execution time: ${end - start}ms`);
    return result;
  };
};

const add = (a, b) => a + b;
const timedAdd = measureTime(add);

console.log(timedAdd(5, 10));
