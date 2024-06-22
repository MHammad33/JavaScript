// ! Higher Order Loops

// ? For of Loop
// const arr = [1, 2, 3, 4, 5];
// for (const item of arr) {
//   console.log(item); // 1, 2, 3, 4, 5
// }

// ? For in Loop
// const arr = [1, 2, 3];
// for (const item in arr) {
//   console.log(item, ":", arr[item]); // 0:1, 1:2, 2:3
// }

// ? For Each Loop
// const codingLanguages = ["JS", "Python", "C++", "JavaScript", "Ruby"];
// codingLanguages.forEach((codingLanguage, index, arr) => {
//   console.log(`[${arr}] -- ${index}: ${codingLanguage}`); // JS, Python, C++, JavaScript, Ruby
// })

// ? Loop through Maps
// const map = new Map();
// map.set("PK", "Pakistan");
// map.set("USA", "America");
// map.set("FRA", "France");

// for (const [key, value] of map) {
//   console.log(key, ":-", value);
// }

// * Note
// const map = new Map();
// map.set("PK", "Pakistan");
// map.set("USA", "America");
// map.set("FRA", "France");
// for (const key in map) {
//   console.log(key); // Map is not iterable
// }

// ? Loop through Objects
// const user = { name: "Hammad", age: 21 };
// for (const key in user) {
//   console.log(key, ":-", user[key]);
// }

// * Note
// const user = { name: "Hammad", age: 21 };
// for (const key of user) {
//   console.log(key); // Objects are not iterable in this way
// }

// ? Loop through array of objects
// const codingLanguages = [
//   { name: "JavaScript", extension: ".js" },
//   { name: "Python", extension: ".py" },
//   { name: "C", extension: ".c" },
//   { name: "C++", extension: ".c++" },
//   { name: "Java", extension: ".java" },
// ]

// codingLanguages.forEach(({ name, extension }) => {
//   console.table(`${name} : ${extension}`)
// })