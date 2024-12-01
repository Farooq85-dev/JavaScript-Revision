// A generator is a special type of function in JavaScript that can return multiple values over time, pausing and resuming its execution.

// Generators are defined using the function* syntax and use the yield keyword to return values from the function.

// Generators are defined using the function* syntax and use the yield keyword to return values from the function.

// Basic Syntax
function* generatorFunction() {
  yield value1;
  yield value2;
  return finalValue;
}

// function* — This defines a generator function.
// yield — This pauses the function and returns a value.
// return — This finishes the generator function and optionally returns a final value.

// function* genrate() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const gen = genrate();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// Passing values to generator function

// function* generate() {
//   const x = yield "Enter a Number...";
//   const y = yield x * 2;
//   return y;
// }

// const gen = generate();
// console.log(gen.next());
// console.log(gen.next(5));
