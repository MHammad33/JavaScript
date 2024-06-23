// ! GETTERS AND SETTERS

// TODO: Get some more in-depth knowledge about getters and setters in JS

// ? New Syntax -- Classes
// class User {
//   constructor(username, password) {
//     this.username = username;
//     this.password = password;
//   }

//   get username() {
//     return this._username.toUpperCase();
//   }

//   set username(value) {
//     this._username = value;
//   }

//   get password() {
//     return this._password.toUpperCase();
//   }

//   set password(value) {
//     this._password = value;
//   }

//   logMe() {
//     console.log(`USERNAME: ${this.username}`);
//   }
// }

// const user = new User("Hammad", 1122);
// // console.log(user.password); // error

// // console.log(user.password()); // error
// console.log(user._password);

// ? Old Syntax -- functions
// function User(email, password) {
//   this._email = email;
//   this._password = password;

//   Object.defineProperty(this, "email", {
//     get: function () {
//       this._email.toUpperCase();
//     },
//     set: function (value) {
//       this._email = value;
//     }
//   });
// }

// const user = new User("Hammad", 1122);
// // console.log(user.password); // undefined
// // console.log(user.password()); // error
// console.log(user._password);

// ? Old Syntax -- Objects
// const User = {
//   _email: "hammad@gmail.com",
//   _password: "1122",

//   get email() {
//     return this._email.toUpperCase();
//   },

//   set email(value) {
//     this._email = value
//   }
// }

// const user = Object.create(User);
// console.log(user.email);
// // console.log(user.email()); // error
// console.log(user._email);