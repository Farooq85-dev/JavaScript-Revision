// const fetchData = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     return resolve("Ok!");
//   } else {
//     return reject("Ok!");
//   }
// });

// const handler = async () => {
//   const fetch = await fetchData();
//   console.log(fetch);
// };

// handler();

// fetchData
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     const success = true;
//     setTimeout(() => {
//       success ? resolve("Data fetched!") : reject("Failed to fetch data");
//     }, 2000);
//   });
// };

// const getData = async () => {
//   try {
//     const data = await fetchData(); // Waits for the promise
//     console.log(data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// getData();

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/2"
    );
    if (!response.ok) throw new Error("Network response was not ok!");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();
