// ! Call and this keyword

// ? this keyword

// window = {this: window}
// node = {this: {}}

// ? call
// function setUsername(username) {
//   // complex DB calls
//   this.username = username;
// }

// function createUser(username, email, password) {
//   // setUsername.call(username);
//   setUsername.call(this, username);

//   this.email = email;
//   this.password = password;
// }

// const user = new createUser("Hammad", "hammad@gmail.com", "1122");
// console.log(user);

// TODO: Explore more about call and bind methods