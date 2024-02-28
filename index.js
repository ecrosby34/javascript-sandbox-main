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
let x = Math.floor(Math.random() * 20) + 1;
let y = Math.floor(Math.random() * 20) + 1;
let z = Math.floor(Math.random() * 20) + 1;

document.getElementById("xLabel").innerHTML = x;
document.getElementById("yLabel").innerHTML = y;
document.getElementById("zLabel").innerHTML = z;
}
let rollCount = 0;

console.log(x);
console.log(y);
console.log(z);