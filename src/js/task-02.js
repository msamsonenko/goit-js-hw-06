const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

//get access to the list "ingredients"
const ingredientsList = document.querySelector("#ingredients");

//create li item, add text content, add class
const createListItem = (array) => {
	const list = [];
	array.forEach((arr) => {
		const element = document.createElement("li");
		element.textContent = arr;
		element.classList.add("item");
		list.push(element);
	});

	return list;
};

//create list of li items
const listItems = createListItem(ingredients);

//adds array of children items to a parent
const addListItems = (list, items) => list.append(...items);

//call function to add items (li) to list (ul)
addListItems(ingredientsList, listItems);
