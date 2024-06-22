// ! Promises

// Three states of Promises:
// 1. Resolve
// 2. Reject
// 3. Pending

// ? creating promises
// const promiseOne = new Promise(function (resolve, reject) {
//   // Do an async task
//   // Db Calls, network calls
//   setTimeout(() => {
//     console.log("Async Task Completed");
//     resolve(); // Connects with ".then()"
//   }, 1000)
// });

// promiseOne.then(function () {
//   console.log("Promise Consumed");
// });

// ? Another Way to create promises
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Async Task Completed");
//     resolve(); // Connects with ".then()"
//   }, 1000)
// }).then(() => {
//   console.log("Promise Consumed");
// });

// ? Get values from Promises
// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Async Task Completed");
//     resolve({ name: "Hammad", age: 21 }); // Connects with ".then()"
//   }, 1000)
// });

// promiseThree.then(user => {
//   console.log(user); // { name: "Hammad", age: 21 }
// })

// ? Catch in Promises
// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       console.log("Async Task Completed");
//       resolve({ name: "Hammad", age: 21 }); // Connects with ".then()"
//     } else {
//       console.log("Async Task :: Error");
//       reject(new Error("Task not completed :: Error")); // Connects with ".catch()"
//     }
//   }, 1000)
// });

// promiseFour
//   .then(user => console.log(user))
//   .catch(error => console.log(error)); // Error: Task not completed :: Error

// ? How to get data from Promises?
// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Async Task Completed");
//     resolve({ name: "Hammad", age: 21 }); // Connects with ".then()"
//   }, 1000)
// });

// promiseFive
//   .then(user => user.name)
//   .then(data => console.log(data)); // Hammad

// ? Finally Keyword
// const promiseSix = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Async Task Completed");
//     resolve({ name: "Hammad", age: 21 }); // Connects with ".then()"
//   }, 1000)
// });

// promiseSix
//   .then(user => user.name)
//   .then(data => console.log(data)) // Hammad
//   .finally(() => console.log("Promise Resolved or Rejected"));

// ? Async/Await in Promises
// const promiseSeven = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = true;
//     if (error) {
//       reject("Error :: Promise Seven");
//       return;
//     }

//     console.log("Async Task Completed");
//     resolve({ name: "Hammad", age: 21 }); // Connects with ".then()"
//   }, 1000)
// });

// const consumePromiseSeven = async () => {
//   try {
//     const response = await promiseSeven;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromiseSeven();

// * Exercise
// ? async/await
// async function getAllUsers() {
//   console.log("Getting Users...");
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUsers();

// ? .then, .catch
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


// TODO: Callback Hell?