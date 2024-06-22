// Generate a Random Color
const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomValue = Math.floor(Math.random() * 16);
    color += hex[randomValue];
  }
  return color;
}

document.querySelector("#start").addEventListener("click", startChangingColor); document.querySelector("#stop").addEventListener("click", stopChangingColor);

let intervalId;
function startChangingColor() {
  if (!intervalId) {
    console.log("Started Changing Color");
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  } else {
    console.log("Already Changing Color");
  }

}
function stopChangingColor() {
  console.log("Stopped Changing Color");
  clearInterval(intervalId);
  intervalId = null;
}