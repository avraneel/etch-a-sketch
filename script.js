"use strict";

let body = document.querySelector("body");
let container = document.createElement("div");
container.classList.toggle("container");
body.appendChild(container);

for(let i = 1; i <= 16; i++) {
    let rowContainer = document.createElement("div");
    rowContainer.classList.toggle("row-container");
    for(let j = 1; j <= 16; j++) {
        let myDiv = document.createElement("div");
        myDiv.classList.toggle("row-item");
        myDiv.addEventListener("mouseover", (myDiv) => {
            myDiv.style.backgroundColor = "red";
        });
        rowContainer.appendChild(myDiv);
    }
    container.appendChild(rowContainer);
}
