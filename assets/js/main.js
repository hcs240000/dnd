// main.js

console.log("Hello, World!");

let targetElement = document.querySelector("h2");

console.log(targetElement.outerHTML);

targetElement.addEventListener("mouseover", function() {
    console.log(this.innerText);
    this.innerText = "Crit!";
    this.style = "cursor: wait";
});

targetElement.addEventListener("mouseout", function () {
    this.innerText = "Fight";
    this.style = "cursor: pointer";
});