"use strict";

let body = document.querySelector("body");
let container = document.createElement("div");
body.appendChild(container);

let divArray = [];

for(let i = 1; i <= 16; i++) {
    let myDiv = document.createElement("div");
    container.appendChild(myDiv);
}

