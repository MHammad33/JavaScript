// ! Async JS

// ? Set Timeout
// const sayHello = () => {
//   console.log("Hammad");
// }

// const changeH1 = () => {
//   document.querySelector("h1").innerHTML = "Changed Heading";
// }

// setTimeout(sayHello, 2000);
// setTimeout(changeH1, 2000);

// ? How to stop setTimeout
// const changeHeading = setTimeout(() => (
//   document.querySelector("h1").innerHTML = "Changed Heading"
// ), 2000);

// document.querySelector("#stop").addEventListener("click", () => {
//   clearTimeout(changeHeading);
//   console.log("STOPPED");
// });

// ? Set Interval
// setInterval(() => {
//   document.querySelector("h1").innerHTML = `Hammad -- ${Date.now()}`
// }, 1000)

// ? Parameters in set interval
// const sayHi = (str) => {
//   document.querySelector("h1").innerHTML = `${str || "Hello"} -- ${Date.now()}`
// }
// setInterval(sayHi, 1000, "Hey")

// ? How to Stop set interval?
const sayHello = (str) => {
  document.querySelector("h1").innerHTML = `${str || "Hello"} -- ${Date.now()}`
}

let sayHi = setInterval(sayHello, 1000, "Hey");

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(sayHi);
  console.log("Stopped");
})

document.querySelector("#start").addEventListener("click", () => {
  sayHi = setInterval(sayHello, 1000);
  console.log("Started Again");
})