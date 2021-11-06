function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//get access to input element
const input = document.querySelector(["input"]);
//get access to create and destroy buttons
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
//et acess to div element (boxes container)
const container = document.getElementById("boxes");
//callback to create a certain amount of div elements according to input value
function createBoxes(amount) {
	amount = input.value;
	const numbers = [];
	for (let i = 1; i < Number(amount) + 1; i += 1) {
		numbers.push(i * 10);
	}
	numbers.forEach((number) => {
		const box = document.createElement("div");
		box.style.width = box.style.height = `${number}px`;
		box.classList.add("box");
		box.style.backgroundColor = getRandomHexColor();
		container.append(box);
	});
}
//callback to destroy div elements appended to div container
function destroyBoxes() {
	const boxes = document.querySelectorAll(".box");
	for (let i = 0; i < boxes.length; i += 1) {
		boxes[i].remove();
	}
}
//add event listeners to buttons
createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
