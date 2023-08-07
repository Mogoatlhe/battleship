import Label from "./GridLabel/labels";

const Grid = () => {
	const container = document.createElement("div");
	const gridContainer = document.createElement("div");
	const numbersContainer = document.createElement("div");
	const numCoords = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
	const numbers = Label(numCoords, "number");

	container.classList.add("numbers-grid-container");
	numbersContainer.classList.add("numbers");
	gridContainer.classList.add("grid-container");

	numbersContainer.append(numbers.getLabels());
	container.append(numbersContainer);
	container.append(gridContainer);

	const getContainer = () => container;

	return { getContainer };
};

export default Grid;
