// ! Classes and Object Oriented (OOP)

// ? Object Literals
// const user = {
//   username: "Hammad",
//   loginCount: 8,
//   signedIn: true,

//   getUserDetails: function () {
//     console.log(`Got user details from database: ${this.username}`)
//     console.log(this); // ? this -> whole object reference
//   }
// };

// console.log(user.username);
// console.log(user.getUserDetails());

// ? Constructor Function -- new keyword
// function User(username, loginCount, isLoggedIn) {
//   this.username = username;
//   this.loginCount = loginCount;
//   this.isLoggedIn = isLoggedIn;

//   this.greeting = function () {
//     console.log(`Welcome ${this.username}`);
//   }

//   return this;
// }

// const user = new User("Hammad", 12, true);
// console.log(user.constructor);


// * Without using Constructor
// const user1 = User("Hammad", 7, true);
// const user2 = User("Ali", 17, false);
// console.log(user1.username); // Ali
// console.log(user2.username); // Ali

// * Using Constructor
// const user1 = new User("Hammad", 7, true);
// const user2 = new User("Ali", 17, false);
// console.log(user1.username); // Hammad
// console.log(user2.username); // Ali


