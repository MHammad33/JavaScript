// ! Numbers
// const score = 488;
// console.log(score); // 488
// const balance = new Number(488);
// console.log(balance); // [Number: 488]

// ? Convert Number to String
// const num = 488;
// console.log(typeof (num.toString())); // "488" -- String
// console.log(num.toString().length); // 3

// ? Fixed Value after decimal point
// console.log(32.2233434.toFixed(2)); // 32.22
// const num = 123.8966;
// console.log(num.toPrecision(4));

// ? Commas in Numbers
// const num = 10000000;
// console.log(num.toLocaleString()); // 10,000,000 -- US
// console.log(num.toLocaleString("en-IN")); // 10,000,000 -- IN

// ? Max and Min Values in JS
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// ! Maths
// console.log(Math); // Object [Math] {}

// ? Negative to Positive Values
// console.log(Math.abs(-33));

// ? Round off decimals
// console.log(Math.round(4.59)); // 5
// console.log(Math.round(4.49)); // 5
// console.log(Math.floor(4.59)); // 4
// console.log(Math.ceil(4.49)); // 5

// ? Square Root
// console.log(Math.sqrt(16));

// ? Max and Min values from list of numbers
// console.log(Math.max(1, 2, 5, 2, 1, 58));
// console.log(Math.min(1, 2, 5, 2, 1, 58));

// ? Random Values -- IMPORTANT
// console.log(Math.random()); // [0 - 1]
// console.log(Math.random() * 10); // [0 - 9]
// console.log(Math.random() * 10 + 1); // [1 - 10]
// console.log(Math.floor(Math.random() * 10) + 1); // [1 - 10] (No Decimal)

// Formula
// const min = 10;
// const max = 20;
// const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
// // [1-9] + 10

// console.log(randomValue);
