// ! Scopes in Functions

// var d = 300;

// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
//   var d = 30; // Override
// }

// console.log(a); // error a is not defined
// console.log(b); // error b is not defined
// console.log(c); // 30
// console.log(d); // 30

// TODO: Find out difference between global object in node and browser

// ? Scope in Functions
// function one() {
//   const username = "Hammad";
//   function two() {
//     const website = "Youtube";
//     console.log(username);
//   }
//   // console.log(website); // Error -- scope issue
//   two();
// }
// one();

// ? Line by Line execution of errors
// if (true) {
//   const username = "Hammad";
//   if (username === "Hammad") {
//     const website = "YouTube";
//     console.log(username, website); // Hammad YouTube
//   }
//   console.log(website); // Error
// }
// console.log(username); // Could Not reach this line due to error

// ? Mini Hoisting
// console.log(addOne(3)); // 4
// function addOne(num) { return num + 1 };

// console.log(addTwo(3)); // Error
// const addTwo = function (num) { return num + 2 }