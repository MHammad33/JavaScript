// ! Functions

// function defFun() { }
// defFun // reference
// defFun() // calling

// ? Parameters -- Add 2 numbers
// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// ? Arguments -- When Calling function
// addTwoNumbers(); // NaN
// addTwoNumbers(1); // NaN
// addTwoNumbers(1, 1); // 2
// addTwoNumbers(1, "1"); // 11
// addTwoNumbers(1, "a"); // 1a
// addTwoNumbers(1, null); // 1
// addTwoNumbers(1, 1, 1); // 2

// ? Return Values
// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }
// console.log("Result:", addTwoNumbers(3, 5)); // 8

// ? If no argument passed, but parameter is used
// function loginUserMessage(username) {
//   return `${username} just logged in`;
// }
// console.log(loginUserMessage("Hammad")); // Hammad just logged in
// console.log(loginUserMessage()); // undefined just logged in

// ? Default values in parameters
// function loginUserMessage(username = "Someone") {
//   return `${username} just logged in`;
// }
// console.log(loginUserMessage("Hammad")); // Hammad just logged in
// console.log(loginUserMessage()); // Someone just logged in

// ? Rest Operator for functions
// function calculateCartPrice(val1, val2, ...nums) {
//   console.log(nums); // [400, 500]
// }
// calculateCartPrice(200, 300, 400, 500);

// ? Objects in Functions
// const user = { name: "Hammad", age: 21 };
// function handleObject(anyObj) {
//   console.log(`Username is ${anyObj.name} and age is ${anyObj.age}`);
// }
// handleObject(user); // Username is Hammad and age is 21

// ? Arrays in Functions
// const arr = [1, 2, 3, 4, 5];
// function getSecondElemOfArr(anyArr) { return anyArr[1] };
// console.log(getSecondElemOfArr(arr)); // 2