//get access to input
const textInput = document.getElementById("name-input");
//get access to output
const output = document.getElementById("name-output");
//check value of input and add corresponding string
const handleInput = (event) =>
	textInput.value === ""
		? (output.textContent = "Anonymous")
		: (output.textContent = event.currentTarget.value);
//add eventListener to input
textInput.addEventListener("input", handleInput);
