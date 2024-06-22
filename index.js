const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get elements
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const result = document.getElementById("result");
  result.innerHTML = "";

  // Validate Data
  if (height === "" || height < 0 || isNaN(height)) {
    result.appendChild(
      document.createTextNode(`Please give a valid height: ${height}`)
    );
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.appendChild(
      document.createTextNode(`Please give a valid weight: ${weight}`)
    );
  } else {
    result.style.color = "rgb(241, 241, 241)";
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    result.appendChild(document.createTextNode(BMI));
    // Display aresult and reset inputs
    document.getElementById("height").value = "";
    document.getElementById("weight").value = ""
  }

})