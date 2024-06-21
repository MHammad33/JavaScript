"use strict"; // treal all JS code as newer version of JS

// alert("Hello"); // * Work in browsers only, not in node

let name = "Hammad"; // String Data Type
let age = 21; // Number Data Type -->  BigInt (for big numbers)
let isLoggedIn = false; // Boolean Data Type
let user = null; // object data type -- standalone value
let anotherUser = undefined; // undefined data type -- Value not assigned
let unique = Symbol("foo"); // Symbol Data Type

// ? How to check data types?
const data = {
  name: typeof name,
  age: typeof age,
  isLoggedIn: typeof isLoggedIn,
  user: typeof user,
  anotherUser: typeof anotherUser,
  unique: typeof unique,
}

// console.table(data); // ! Comment this out to see above data results

let score = "33abc";
let scoreInNumber = Number(score);
let isLogin = true;
let isLoginInNUmber = Number(isLogin);
let isLoginInBoolean = Boolean(isLoginInNUmber);

// ! Comment out the below code to know abut data type conversions
// console.log("Score:", typeof score); // 33abc -- string
// console.log("Score in numbers:", typeof scoreInNumber); // NAN
// // NAN (Not a number) -- number

// console.log("isLogin:", isLogin); // true -- boolean
// console.log("isLogin in numbers:", isLoginInNUmber); // 1 -- number
// console.log("isLogin in boolean:", isLoginInBoolean); // true -- boolean

// * Notes
// 1 (other than 0) => true; 0 => false,
// "" => false; "hammad" => true

// ! Comment out below code to see String to Number Conversions
// console.log(1 + "2"); // 12 -- string
// console.log("1" + 2 + 2); // 122 -- string
// console.log(1 + 2 + "2"); // 32 -- string


// console.log(+true); // 1 -- number
// console.log(+""); // 0 -- number

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2;
// console.log(num1, num2, num3);






