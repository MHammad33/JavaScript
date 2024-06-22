// ! Objects

// ? Object Literals
// const jsUser = {
//   name: "Hammad",
//   age: 21,
//   location: "Pasrur",
//   email: "hammad@gmail.com",
//   isLoggedIn: false,
//   lastLoginDays: ["Saturday", "Sunday"]
// };
// console.table(jsUser);

// ? Accessing Object Values
// const user = { "full name": "Hammad", age: 21 };
// console.log(user.age); // 21
// console.log(user["full name"]); // Hammad -- full name should be in strings in this format

// ? Using symbols in Objects
// const objSymbol = Symbol("Hammad");
// const user = { name: "Hammad", age: 21, [objSymbol]: "Ham" };
// console.table(user[objSymbol]); // string -- Ham
// console.log(user); // { name: 'Hammad', age: 21, [Symbol(Hammad)]: 'Ham' }

// ? Access and Change values
// const user = { name: "Hammad", age: 21 };
// user.name = "Ali";
// console.table(user);

// ? Lock Values
// const user = { name: "Hammad", age: 21 };
// Object.freeze(user);
// user.name = "Ali"; // No Change but no error
// console.log(user);

// ? Functions in Objects
// const user = { name: "Hammad", age: 21 };
// user.greeting = () => console.log("Hello, world!");
// Arrow functions cannot access this keyword

// console.log(user.greeting); // Refers function
// console.log(user.greeting()); // Calls function

// ? Regerring object values in functions
// const user = { name: "Hammad", age: 21 };
// user.greeting = function () { console.log(`Hello, ${this.name}`); }
// console.log(user.greeting());


// ? Singleton (When object made using constructor)
// const user = Object.create()