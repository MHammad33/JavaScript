const accountId = 1332; // Cannot be changed

let accountEmail = "a11@gmail.com";
var accountPassword = "12345";
accountCity = "Pasrur";


// Same name variables in this function as above
function A() {
  const accountEmail = "hammad@gmail.com";
  var accountCity = "Sialkot";
  var accountPassword = "54321";
  console.table([accountId, accountEmail, accountPassword, accountCity]);
}

A();

console.table([accountId, accountEmail, accountPassword, accountCity]);