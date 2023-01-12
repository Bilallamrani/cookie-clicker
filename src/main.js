import "./index.css";

let counter = 0;
const button = document.getElementById("cookie");
const counterSpan = document.getElementById("clicker-counter");

button.addEventListener("click", function() {
  counter++;
  counterSpan.textContent = counter;
});