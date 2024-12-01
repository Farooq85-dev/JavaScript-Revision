// JavaScript is a single-threaded language, meaning it processes tasks one at a time. However, it supports asynchronous programming, allowing non-blocking operations.

// Synchronus Execution:-
// Definition: Tasks are executed one after another, in the order they appear in the code.
// Behavior: A task must complete before the next one starts.
// Blocking: If a task takes time (e.g., reading a large file), it blocks further execution.

// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");

// Definition: Tasks can start and run in the background while the rest of the code continues executing.
// Behavior: Once the asynchronous task is complete, its result is handled (e.g., via a callback, promise, or async/await).
// Non-Blocking: Does not block the execution of subsequent code.

// console.log("Task 1");
// setTimeout(() => console.log("Task 2 (Asynchronous)"), 2000);
// console.log("Task 3");

// Sync
// const fetchDataSync = () => {
//   for (let i = 0; i < 1e9; i++) {} // Simulating a heavy computation
//   console.log("Data fetched (Sync)");
// };

// console.log("Start");
// fetchDataSync();
// console.log("End");

// const fetchDataAsync = () => {
//   setTimeout(() => console.log("Data fetched (Async)"), 2000);
// };

// console.log("Start");
// fetchDataAsync();
// console.log("End");
