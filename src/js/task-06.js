//receive input value
const inputString = document.getElementById("validation-input");
//input event listener
inputString.addEventListener("blur", focusOff);
//add/remove classes according to input value length
function focusOff() {
	const inputClass = inputString.classList;
	if (inputString.value.length === 6) {
		inputClass.contains("invalid")
			? inputClass.replace("invalid", "valid")
			: inputClass.add("valid");
	} else {
		inputClass.contains("valid")
			? inputClass.replace("valid", "invalid")
			: inputClass.add("invalid");
	}
}
