function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//get access to button element
const btn = document.querySelector(".change-color");
//get access to body element
const body = document.body;
//get access to span element
const span = document.querySelector(".color");
//call back function sets background color to body and shows it's hex alue in span
const changeBodyColor = () =>
	(span.textContent = body.style.backgroundColor = getRandomHexColor());
//add event listener to button element
btn.addEventListener("click", changeBodyColor);
