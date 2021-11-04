const categories = document.querySelector("#categories");
const categoryItems = categories.children;

const showCategories = (pseudoArray) =>
	console.log(`Number of categories: ${pseudoArray.length}`);

const showItems = (pseudoArray) => {
	for (const el of pseudoArray) {
		const header = el.querySelector("h2").textContent;
		const items = el.querySelector("ul").children;
		console.log(`Category: ${header}`);
		console.log(`Elements: ${items.length}`);
	}
};

showCategories(categoryItems);
showItems(categoryItems);
