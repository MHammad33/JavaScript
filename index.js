const clock = document.getElementById("clock");

setInterval(() => {
  const date = new Date();
  const localTime = date.toLocaleTimeString();
  clock.innerHTML = localTime
}, 1000);