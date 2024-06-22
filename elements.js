// ? Add Languages by creating elements
// function addLanguage(language) {
//   const languageDiv = document.querySelector(".language");

//   const li = document.createElement("li");

//   const liText = document.createTextNode(language);
//   li.appendChild(liText);

//   languageDiv.appendChild(li);
// }
// addLanguage("Python");
// addLanguage("TypeScript");

// ? Optimized Code
// function addLanguageOptimized(language) {
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode(language));
//   document.querySelector(".language").appendChild(li);
// }

// addLanguageOptimized("Python");
// addLanguageOptimized("TypeScript");

// ? Edit Language
// function editLanguage(language, num) {
//   const secondLanguage = document.querySelector(`li:nth-child(${num})`);
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode(language));
//   secondLanguage.replaceWith(li);
// }

// editLanguage("Java", 2);

// ? Remove Language
// const lastLanguage = document.querySelector("li:last-child");
// lastLanguage.remove();