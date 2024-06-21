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
console.table(data);

