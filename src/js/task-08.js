//get acces to form element
const form = document.querySelector(".login-form");
//add event listener to form element
form.addEventListener("submit", handleSubmit);
//callback function, checks value of form fields, returns object of input data
function handleSubmit(event) {
	event.preventDefault();
	const {
		elements: { email, password },
	} = event.currentTarget;

	if (email.value === "" || password.value === "") {
		return alert("Please fill in all the form fields!");
	}
	return (
		console.log({
			email: email.value,
			password: password.value,
		}),
		event.currentTarget.reset()
	);
}
