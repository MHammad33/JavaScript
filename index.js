// ! Events

// ? Click Event

// attachEvent()
// jQuery -- on

// document.getElementById("owl").onclick = () => { };
// TODO: Find out the differences between onclick and addEventListener

// document.getElementById("owl").addEventListener("click", () => { }, false);
// document.getElementById("owl").addEventListener("click", (e) => {
//   // console.log(e.target.width);
//   // console.log(e.timeStamp);
// });

// * Notes -- Study about these
// type, timeStamp, preventDefault
// target, toElement, srcElement (IMP), currentTarget
// clientX, clientY,  screenX, screenY
// ctrlkey, altkey, shiftkey, keyCode

// ? False argument in addEventListener
// document.getElementById("images").addEventListener("click", () => {
//   console.log("Clicked inside the ul");
// }, true);

// document.getElementById("images").addEventListener("click", () => {
//   console.log("Clicked inside the ul");
// }, false);

// document.getElementById("owl").addEventListener("click", (e) => {
//   console.log("Clicked Owl");
//   e.stopPropagation();
// }, false);

// document.getElementById("google").addEventListener("click", (e) => {
//   e.preventDefault();
//   e.stopPropagation();
//   console.log("Clicked Google");
// }, false);


// * Notes
// Event Bubbling  --> child to parent
// Event Capturing --> parent to child
// Stop Propagation

// * Exercise
// document.querySelector("#images").addEventListener("click", (e) => {
//   if (e.target.tagName === "IMG") {
//     // const parentNode = e.target.parentNode;
//     // console.log(parentNode);
//     // parentNode.remove();

//     const parentNode = e.target.parentNode;
//     console.log(parentNode);
//     parentNode.parentNode.removeChild(parentNode);
//   }
// });