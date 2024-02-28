let a;
let b;
let c;

// a = window.prompt("Enter side A");
// a = Number(a);

// b = window.prompt("Enter side B");
// b = Number(b);

// c = Math.pow(a, 2) + Math.pow(b, 2);
// c = Math.sqrt(c);

// console.log("Side C:", c);

// Simple theme changer using Ternary Operator
const themeSelect = document.getElementById("themeSelect");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

themeSelect.addEventListener("change", () =>
  themeSelect.value === "black"
    ? update("black", "white")
    : update("white", "black")
);


// Simple Weather change values

const select = document.getElementById("weather"); // Corrected selection
const para = document.querySelector("p");
let temperature = 0; // Initialize temperature

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent =
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      para.textContent =
        "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
      break;
    case "snowing":
      para.textContent =
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      break;
    case "overcast":
      para.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      para.textContent = "";
  }

  // Check temperature and update text accordingly
  if (choice === "sunny" && temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (choice === "sunny" && temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}

document.getElementById("tempButton").onclick = function() {
  temperature = document.getElementById("tempBox").value;
  temperature = Number(temperature);

  setWeather();
}





// Hypotenuse Calculator

document.getElementById("submitButton").onclick = function() {
a = document.getElementById("aTextBox").value;
a = Number(a);

b = document.getElementById("bTextBox").value;
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);

document.getElementById("cLabel")
.innerHTML = "Side C: " + c;
}

// Counter Program

let count = 0;

document.getElementById("decreaseBtn").onclick = function() {
    count-=1
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function() {
    count=0
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function() {
    count+=1
    document.getElementById("countLabel").innerHTML = count;
}

// RNG! (20 sided dice simulation for DND - 3 copies)
let x;
let y;
let z;

document.getElementById("rollButton").onclick = function() {
 x = Math.floor(Math.random() * 20) + 1;
 y = Math.floor(Math.random() * 20) + 1;
 z = Math.floor(Math.random() * 20) + 1;

document.getElementById("xLabel").innerHTML = x;
document.getElementById("yLabel").innerHTML = y;
document.getElementById("zLabel").innerHTML = z;
}
let rollCount = 0;

console.log(x);
console.log(y);
console.log(z);