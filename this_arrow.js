// ! Arrow Functions and this keyword

// const user = {
//   name: "Hammad",
//   price: 999,
//   welcomeMessage: function () {
//     console.log(`Welcome ${this.name}`); // Welcome Hammad
//   },
//   welcomeMessage2: () => {
//     console.log(`Welcome ${this.name}`); // Welcome undefined
//   }
// }
// user.welcomeMessage();
// user.welcomeMessage2();

// ? this keyword
// function check1() {
//   let username = "Hammad";
//   console.log(this.username); // undefined
//   console.log(this); // Object
// }

// const check2 = () => {
//   let username = "Hammad";
//   console.log(this.username); // undefined
//   console.log(this); // Object -- {}
// }
// check1();
// check2();

// TODO: Find out difference between arrow and other functions

// ? Arrow Functions
// const addTwo = (num1) => (num1 + 2);
// const returnObj = () => ({ name: "Hammad" });
// console.log(addTwo(1));
// console.log(returnObj());


// * Notes
// this is {} in arrow functions
// Window is the global object in the browser (console "this" in browser)
