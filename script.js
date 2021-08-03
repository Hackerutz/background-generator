const _ = require("lodash");

const array = [1,2,3,4,5,6,7,8];
console.log(_.without(array, 3));
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.body;
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

function setGradient() {
	body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
	css.textContent = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);