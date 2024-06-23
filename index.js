// ! Lexical Scoping and Closures

// ? Scope
// function outer() {
//   let username = "Hammad";
// }
// console.log(username); // error


// ? Lexical Scoping (inner functions have access to outer function)
// function init() {
//   let name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms the closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

// * Another Example
// function outer() {
//   let username = "Hammad";
//   // console.log("secretInnerOne", secretInnerOne); // error
//   function innerOne() {
//     let secretInnerOne = "secretInnerOne";
//     console.log("Inner One", username);
//   }

//   function innerTwo() {
//     console.log("Inner Two", username);
//   }

//   innerOne();
//   innerTwo();
// }
// outer();

// ? Closures
// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();