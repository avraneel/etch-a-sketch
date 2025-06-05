"use strict";

let body = document.querySelector("body");

const button = document.createElement("button");
let container = document.createElement("div");

button.textContent = "Reset Me";
button.classList.toggle("reset-button");
button.addEventListener("click", getInput);

container.classList.toggle("container");

function drawGrid(x) {
    for(let i = 1; i <= x; i++) {
        let rowContainer = document.createElement("div");
        rowContainer.classList.toggle("row-container");
        for(let j = 1; j <= x; j++) {
            let myDiv = document.createElement("div");
            myDiv.classList.toggle("row-item");
            myDiv.addEventListener("mouseover", function () {
                this.style.backgroundColor = "red";
            });
            rowContainer.appendChild(myDiv);
        }
        container.appendChild(rowContainer);
    }
}

function getInput() {
    let x = "";
    do {
        x = prompt("Enter number of squares per size. Must be < 100.");
    } while(x > 100);
    drawGrid(x);
}

body.appendChild(button);
body.appendChild(container);

drawGrid(16);
