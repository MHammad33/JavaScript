// ! Control Flow

// ? If-else
// let isUserLoggedIn = true;
// if (isUserLoggedIn) {
//   console.log("Logged in");
// } else {
//   console.log("Not Authenticated");
// }

// ? Operators
// console.log(2 < 3); // true
// console.log(2 > 3); // false
// console.log(2 <= 3); // true
// console.log(2 >= 3); // false
// console.log(2 == 3); // false
// console.log(2 != 3); // true

// console.log(2 == "2"); // true
// console.log(2 === "2"); // false -- Also Compare Types

// console.log(2 != "2"); // false
// console.log(2 !== "2"); // true -- Also Compare Types

// * <, >, <=, >=, ==, !=, ===, !==

// ? Block Scope
// const score = 200;
// if (score > 100) {
//   const power = "fly"
//   console.log(`User Power: ${power}`);
// }
// console.log(power); // Error

// ? Shorthand notation of if-else
// const balance = 1000;
// if (balance > 500) console.log("Test1") // readable

// if (balance > 500) console.log("Test1"), // not readable
//   console.log("Test2");

// ? Nested If-else
// const balance = 1000;
// if (balance < 500) {
//   console.log("Less than 500");
// } else if (balance < 750) {
//   console.log("Less than 750");
// } else if (balance < 900) {
//   console.log("Less than 900");
// } else {
//   console.log("Greater than 900");
// }

// ? Logical Operators
// const userLoggedIn = true;
// const debitCard = true;
// const loggedInFromGoogle = true;
// const loggedInFromEmail = false;

// if (userLoggedIn && debitCard) console.log("Allow to buy courses");
// if ((loggedInFromEmail || loggedInFromGoogle)) console.log("User Logged In");

// * [&&, ||, !]