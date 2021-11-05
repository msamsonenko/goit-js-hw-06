//receive input value
const inputString = document.getElementById("validation-input");

console.log(inputString.value.length);
// const requiredSymbols = document.querySelector('input[data-length="6"]');

// console.log(typeof requiredSymbols);
inputString.addEventListener("change", focusOff);

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
