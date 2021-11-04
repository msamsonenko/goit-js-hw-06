//get access to span with id "#value"
let counter = document.querySelector("#value");
//create variable for storing clicks counter
let counterValue = 0;

//get access to decrement btn
const decrementBtn = document.querySelector('button[data-action="decrement"]');
//get access to increment btn
const incrementBtn = document.querySelector('button[data-action="increment"]');

//decreases counter by 1 if decrement btn clicked
const decreaseCount = () => {
	counterValue -= 1;
	counter.textContent = counterValue;
};

//increases counter by 1 if increment btn clicked
const increaseValue = () => {
	counterValue += 1;
	counter.textContent = counterValue;
};

//add eventListener to buttons
decrementBtn.addEventListener("click", decreaseCount);
incrementBtn.addEventListener("click", increaseValue);
