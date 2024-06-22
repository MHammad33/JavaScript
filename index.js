// ! DOM Selectors

// ? Query Selector, children, and Inner Html
// const parent = document.querySelector(".parent");
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[0].innerHTML);

// ? Loop through children array
// for (let i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i].innerHTML);
// }

// ? Find first and last child element
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

// ? Parent Element and Next Sibling Element
// const dayOne = document.querySelector(".day");
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

// ? Query Selector All
// const days = document.querySelectorAll(".day");
// days.forEach(day => console.log(day))


// ? Child Nodes
// const parent = document.querySelector(".parent");
// console.log(parent.childNodes);

// ? Create Element
// const divContainer = document.querySelector(".parent");

// // Create Div Element
// const div = document.createElement("div");

// // Modify properties of our new element
// div.className = "day";
// div.id = Math.round(Math.random() * 10 + 1);
// div.setAttribute("title", "Saturday");
// div.style.backgroundColor = "green";
// div.style.padding = "12px";

// // Create text node and add it in our new div
// const divText = document.createTextNode("Saturday");
// div.appendChild(divText);

// // Add new div in our parent div container
// divContainer.appendChild(div);
