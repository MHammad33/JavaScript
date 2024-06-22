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

// ? Objects in Objects
// const user = {};
// user.id = 123;
// user.name = "Hammad";
// user.data = { age: 21, isLoggedIn: false };
// user.fullname = { userFullName: { firstName: "Hammad", lastName: "Afzal" } }
// console.log(user.fullname.userFullName.firstName); // Hammad
// console.log(user.fullname.userFullName.lastName); // Afzal

// ? Merge 2 objects
// const user1 = { name1: "Hammad", age1: 21 };
// const user2 = { name3: "Ali", age4: 22 };
// const user3 = { user1, user2 }; // adds objects, not merge them
// const user4 = Object.assign({}, user1, user2);
// const user5 = { ...user1, ...user2 };

// console.log(user3);
// console.log(user4);
// console.log(user5);

// ? Array of Objects
// const users = [
//   { id: 1, name: "Hammad" }, { id: 2, name: "Ali" }
// ];
// console.log(users[0].name);

// ? Keys and Values in Objects
// const user = { name: "Hammad", age: 21 };
// console.log(Object.keys(user)); // [ 'name', 'age' ]
// console.log(Object.values(user)); // [ 'Hammad', 21 ]
// console.log(Object.entries(user)); // [ [ 'name', 'Hammad' ], [ 'age', 21 ] ]

// ? Check if key is present in object
// const user = { name: "Hammad", age: 21 };
// console.log(user.hasOwnProperty("name")); // true
// console.log(user.hasOwnProperty("email")); // false

// ? Singleton (When object made using constructor)
// const user = Object.create()