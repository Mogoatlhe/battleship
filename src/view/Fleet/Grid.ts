import Label from "./GridLabel/labels";

const Grid = () => {
	const container = document.createElement("div");
	const numbersContainer = document.createElement("div");
	const numCoords = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
	const numbers = Label(numCoords, "number");

	container.setAttribute("id", "numbers-grid-container");
	numbersContainer.classList.add("numbers");

	numbersContainer.append(numbers.getLabels());
	container.append(numbersContainer);

	const getContainer = () => container;

	return { getContainer };
};

export default Grid;
