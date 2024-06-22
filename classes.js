// ! Classes

// ? ES6
// class User {
//   constructor(username, age, password) {
//     this.username = username;
//     this.age = age;
//     this.password = password;
//   }

//   encryptPassword() {
//     this.password = `!&84738975${this.password}ABC`;
//   }

//   changeUserName(newUsername) {
//     this.username = newUsername;
//   }

// }

// const user = new User("Hammad", 21, "1122");
// console.log(user.encryptPassword());
// console.log(user.changeUserName("M.Hammad"));
// console.log(user);

// ? Behind the Scenes
// function User(username, age, password) {
//   this.username = username;
//   this.age = age;
//   this.password = password;
// }

// User.prototype.encryptPassword = function () {
//   this.password = `!&84738975${this.password}ABC`;
// }

// User.prototype.changeUserName = function (newUsername) {
//   this.username = newUsername;
// }

// const user = new User("Hammad", 21, "1122");
// console.log(user.encryptPassword());
// console.log(user.changeUserName("M.Hammad"));
// console.log(user);