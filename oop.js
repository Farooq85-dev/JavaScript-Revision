// JavaScript supports Object-Oriented Programming (OOP) principles, including encapsulation, inheritance, and polymorphism.

// Object are literally object nothing other

// const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   start() {
//     console.log("Car started!");
//   },
// };

// console.log(car.brand); // Output: Toyota
// car.start(); // Output: Car started!

// class myClass {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }

//   start() {
//     console.log("Car started!");
//   }
// }

// const createInstance = new myClass("Toyota", "2024");
// console.log(createInstance);
// createInstance.start();

// Encapsulation
// Internal details hide kr lete hy
// class banAccount {
//   #balance;

//   constructor(initialBalance) {
//     this.#balance = initialBalance;
//   }

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const createAccount = new banAccount(1000);
// createAccount.deposit(20);
// console.log(createAccount.getBalance());

// // Inheritance
// class a {
//   getName() {
//     return "Muhammad Farooq";
//   }
// }

// class b extends a {
//   getClassName() {
//     return "10th";
//   }
// }

// const createClassA = new b();
// console.log(createClassA.getName());
// console.log(createClassA.getClassName());

function greet(userName, className) {
  this.userName = userName;
  this.className = className;
  return this;
}

const createFnInstance1 = new greet("Muhammad Farooq", "10th");
const createFnInstance2 = new greet("Muhammad Farooq", "11th");
console.log(createFnInstance2);
