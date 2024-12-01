// A callback function is a function that is passed as an argument to another function and is executed after some operation or event.

function greetUser(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greetUser("Alice", sayGoodbye);
// Output:
// Hello, Alice!
// Goodbye!

// function fetchData(callback) {
//   const data = { a: "Farooq", b: "10th" };
//   const error = true;
//   if (error) {
//     callback("Error Occurred!", null);
//   } else {
//     callback("Data Fetched!", data);
//   }
// }

// function handler(error, data) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// }

// fetchData(handler);

setTimeout(() => {
  console.log("First task");
  setTimeout(() => {
    console.log("Second task");
    setTimeout(() => {
      console.log("Third task");
    }, 1000);
  }, 1000);
}, 1000);
