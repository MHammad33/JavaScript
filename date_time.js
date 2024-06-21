// ! Date Object
// let myDate = new Date();
// console.log(myDate); // 2024-06-21T17:16:26.526Z
// console.log(typeof myDate); // Object

// ? Different ways to show data and time
// let myDate = new Date();
// console.log(myDate.toString());
// // Fri Jun 21 2024 22:17:34 GMT+0500 (Pakistan Standard Time)
// console.log(myDate.toISOString()); // 2024-06-21T17:18:13.342Z
// console.log(myDate.toUTCString()); // Fri, 21 Jun 2024 17:18:36 GMT
// console.log(myDate.toDateString()); // Fri Jun 21 2024
// console.log(myDate.toLocaleString()); // 21/06/2024, 10:22:03 pm
// console.log(myDate.toLocaleDateString()); // 21/06/2024
// console.log(myDate.toLocaleTimeString()); // 10:22:03 pm

// ? Create your own date
// let myCreatedDate = new Date(2024, 6, 12);
// let myCreatedDate2 = new Date("2024-06-21");
// console.log(myCreatedDate.toLocaleString()); // 12/07/2024, 12:00:00 am
// console.log(myCreatedDate2.toLocaleString()); // 21/06/2024, 5:00:00 am

// ? Timestamps
// const myTimeStamp = Date.now();
// const date = new Date();
// console.log(myTimeStamp); // 1718990735601

// ? Timestamps in Seconds
// console.log(Math.floor(Date.now() / 1000)); // 1718990852s

// ? Get Month, Day, Date
// const date = new Date();
// console.log(date.getDate()); // 21
// console.log(date.getDay()); // 5
// console.log(date.getMonth() + 1); // 6

// const date = new Date();
// const newDate = date.toLocaleDateString("Pakistan", {
//   weekday: "long",
// })
// console.log(newDate);

