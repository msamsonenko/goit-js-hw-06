//get access to input
const input = document.getElementById("font-size-control");
//get access to span
const text = document.getElementById("text");
//check input value and return it into text font size style
const changeTextSize = (event) =>
	(text.style.fontSize = `${event.currentTarget.value}px`);
//add event listener to input
input.addEventListener("input", changeTextSize);
