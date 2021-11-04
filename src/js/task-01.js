//get access to the list with id '#categories'
const categories = document.querySelector("#categories");

//create pseudo array of the list items
const categoryItems = categories.children;

//show in console number of categories (li items in the list)
const showCategories = (pseudoArray) =>
	console.log(`Number of categories: ${pseudoArray.length}`);

//get access to header text and category list length and print it in console
const showItems = (pseudoArray) => {
	for (const el of pseudoArray) {
		const header = el.querySelector("h2").textContent;
		const items = el.querySelector("ul").children;
		console.log(`Category: ${header}`);
		console.log(`Elements: ${items.length}`);
	}
};

//function calls
showCategories(categoryItems);
showItems(categoryItems);
