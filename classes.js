// Classes in JavaScript are a blueprint for creating objects. They encapsulate data (properties) and behavior (methods) into a single construct. Introduced in ES6, classes provide a cleaner and more structured way to work with objects compared to traditional prototype-based inheritance.

// Constructor
// class myClass {
//   constructor(userName, className) {
//     this.userName = userName;
//     this.className = className;
//   }
// }
// const st1 = new myClass("Muhammad Ahmed", "10th");
// console.log(st1);

// Methods
// class myClass {
//   add(a, b) {
//     return a * b;
//   }
// }
// const doThat = new myClass();
// console.log(doThat.add(2, 5));

// Static Methods
// Call on the call itself
// class myClass {
//   static multiply(a, b) {
//     return a * b;
//   }
// }
// console.log(myClass.multiply(2, 5));

// Inheritance

// class a {
//   speak() {
//     return `I am from class (a)`;
//   }
// }
// class b extends a {
//   bark() {
//     return `I am from (d)`;
//   }
// }
// const instance = new b();
// console.log(instance.speak());
// console.log(instance.bark());

// class Person {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(newName) {
//     this._name = newName;
//   }
// }

// const person = new Person("John");
// console.log(person.name);
// person.name = "Doe";
// console.log(person.name);

// Practical Example

class BankAccount {
  constructor(accountNumber, balance = 0) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds!");
    } else {
      this.balance -= amount;
      console.log(`Withdrew: ${amount}. New balance: ${this.balance}`);
    }
  }
}

// Using the class
const account = new BankAccount("12345", 100);
account.deposit(50); // Output: Deposited: 50. New balance: 150
account.withdraw(30); // Output: Withdrew: 30. New balance: 120
