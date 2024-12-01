// const myPromise = new Promise((resolve, reject) => {
//   const isSuccess = false;
//   isSuccess ? resolve("Ok!") : reject("Fail!");
// });

// myPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// const fetchData = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => {
//       if (!res.ok) return console.log("Network error!");
//       return res.json();
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };

// fetchData();

// const promise1 = Promise.resolve(10);
// const promise2 = new Promise((resolve) => setTimeout(() => resolve(20), 2000));
// const promise3 = Promise.resolve(30);

// Promise.all([promise1, promise2, promise3])
//   .then((results) => console.log(results))
//   .catch((error) => console.error(error));

// const promiseA = new Promise((resolve) => setTimeout(() => resolve("A"), 2000));
// const promiseB = new Promise((resolve) => setTimeout(() => resolve("B"), 1000));

// Promise.race([promiseA, promiseB]).then((result) => console.log(result)); // "B"
