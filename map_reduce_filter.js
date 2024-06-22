// ! MAP, REDUCE, FILTER

// * Map, Reduce, and Filter

// ? Filter
// const nums = [1, 2, 3, 4, 5, 6, 7];
// const newNums = nums.filter(num => num > 3); // [4, 5, 6, 7]
// console.log(newNums);

// * Note -- Same operation with forEach
// const nums = [1, 2, 3, 4, 5, 6, 7];
// const newNums = [];
// nums.forEach(num => {
//   if (num > 3) newNums.push(num);
// })
// console.log(newNums); // [4, 5, 6, 7]

// * Exercise for Filter
// const books = [
//   { title: "Book One", genre: "Fiction", published: 1981 },
//   { title: "Book Two", genre: "Non-Fiction", published: 1992 },
//   { title: "Book Three", genre: "Science", published: 1999 },
//   { title: "Book Four", genre: "Non-Fiction", published: 2008 },
//   { title: "Book Five", genre: "Fiction", published: 2009 },
// ]

// const userBooks = books.filter(book => book.genre === "Fiction");
// const userBooks = books.filter(book => book.published >= 2000);
// console.log(userBooks);

// ? Map
// const nums = [1, 2, 3, 4, 5, 6, 7];
// const newNums = nums.map(num => num + 10); // [11, 12, 13, 14, 15, 16, 17]
// console.log(newNums);

// ? Chaining
// const nums = [1, 2, 3, 4, 5, 6, 7];
// const newNums = nums
//   .map(num => num * 10)
//   .map(num => num + 10)
//   .filter(num => num > 40); // [50, 60, 70, 80]

// console.log(newNums);


// ? 
