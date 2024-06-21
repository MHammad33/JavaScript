// ! Arrays
// const arr = new Array(0, 1, 2, 3, 4, 5);
// console.log("Array:", arr); // [0, 1, 2, 3, 4, 5]

// ? Access elements in an array
// const arr = [0, 1, 2, 3, 4, 5];
// console.log(arr[0]); // 0

// ? Add Elements in an array
// const arr = [1, 2, 3, 4, 5];
// arr.push(6); // Adds value at end: [1, 2, 3, 4, 5, 6]
// arr.unshift(0); // Adds value at start: [0, 1, 2, 3, 4, 5, 6]
// console.log(arr);

// ? Remove Elements in an array
// const arr = [1, 2, 3, 4, 5];
// arr.pop(); // Removes value from end: [1, 2, 3, 4]
// arr.shift(); // Removes value from start: [0, 1, 2, 3, 4, 5, 6]
// console.log(arr);

// ? Check if element is included in the array
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(1)); // true
// console.log(arr.includes(1111)); // false

// ? Find index of element
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.indexOf(3)); // 2
// console.log(arr.indexOf(33)); // -1

// ? Arrays to String (join)
// const arr = [1, 2, 3, 4, 5];
// const strArr = arr.join("-");
// console.log(strArr); // 1-2-3-4-5 -- String

// ? slice and splice -- IMPORTANT
// const arr = [1, 2, 3, 4, 5]; // [1, 2, 3, 4, 5]
// const sliceArr = arr.slice(1, 3); // [2, 3]
// const spliceArr = arr.splice(1, 3); // ! [2, 3, 4] but arr: [1, 5]
// console.log(sliceArr);
// console.log(spliceArr);
// console.log(arr);

// ? Add Array in an array
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// arr1.push(arr2); // [1, 2, 3, [4, 5, 6]]
// console.log(arr1);
// console.log(arr1[3][1]); // 5

// ? Concate Arrays
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = arr1.concat(arr2); // [1, 2, 3, 4, 5, 6] (Returns array)
// console.log(arr3);

// ? Spread Operator
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
// console.log(arr3);

// ? Flat Array
// const arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];
// const realArr = arr.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// console.log(realArr);

// ? Check if variable is an array
// console.log(Array.isArray("Hammad")); // false
// console.log(Array.isArray([])); // true
// console.log(Array.isArray({})); // false

// ? Convert Objects, Strings to Array
// console.log(Array.from("Hammad")); // [H, a, m, m, a, d] -- String Conversion
// console.log(Object.keys({ name: 1, age: 12 })); // [name , age]
// console.log(Object.values({ name: 1, age: 12 })); // [1, 12]
// console.log(Object.entries({ name: 1, age: 12 })); // [ [ 'name', 1 ], [ 'age', 1 ] ]
// console.log(Object.fromEntries([['name', 1], ['age', 1]])); // { name: 1, age: 1 }

// ? Convert Variables to Array
// const num1 = 100;
// const num2 = 200;
// const num3 = 300;
// console.log(Array.of(num1, num2, num3)); // [100, 200, 300]


// ? Shallow Copies (Reference)
// ? Deep Copies (Without Reference)