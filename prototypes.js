// ! Prototypes

// const name = "Hammad      ";
// console.log(name.length); // 12
// console.log(name.trim().length); // 6

// ? Create Object Prototypes
// let myHeroes = ["Hero1", "Hero2"];
// let heroPower = {
//   hero1: "hammer",
//   hero2: "sling",
//   getHero2Power: function () {
//     console.log(`Hero2 Power is ${this.hero2}`);
//   }
// }
// Object.prototype.Hammad = function () {
//   console.log("Hammad is present in all objects");
// }
// heroPower.Hammad();

// ? Create Prototypes for all objects
// const obj = {};
// const arr = [];

// Object.prototype.Hammad = function () {
//   console.log("Hammad is present in all objects");
// }

// Array.prototype.Ali = function () {
//   console.log("Ali is present in only arrays");
// }

// obj.Hammad();
// // obj.Ali(); // error

// arr.Hammad();
// arr.Ali();

// ? Inheritance
// const User = { name: "Hammad", age: 21 };
// const Teacher = { makeVideo: true };
// const TeachingSupport = { isAvailabe: true };
// const TASupport = {
//   makeAssignment: "JS",
//   fullTime: true,
//   __proto__: TeachingSupport // Inherits properties from Teaching Support
// };

// // * Old Syntax
// Teacher.__proto__ = User; // Inherits properties from User

// // * Modern Syntax
// Object.setPrototypeOf(TeachingSupport, Teacher);

// console.log(User);
// console.log(TASupport);
// console.log(TeachingSupport);