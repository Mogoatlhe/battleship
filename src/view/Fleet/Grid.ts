import Label from "./GridLabel/labels";
import GridItem from "./GridItem";
import Player from "../../logic/player";

const Grid = (player: typeof Player) => {
	const grid = document.createElement("div");
	const container = document.createElement("div");
	const numbersGridContainer = document.createElement("div");
	const gridContainer = document.createElement("div");
	const numbersContainer = document.createElement("div");
	const numCoords = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
	const numbers = Label(numCoords, "number");

	grid.classList.add("grid");
	container.classList.add("port-numbers-grid-container");
	numbersGridContainer.classList.add("numbers-grid-container");
	numbersContainer.classList.add("numbers");
	gridContainer.classList.add("grid-container");

	numbersContainer.append(numbers.getLabels());
	numbersGridContainer.append(numbersContainer);
	numbersGridContainer.append(gridContainer);
	grid.append(numbersGridContainer);
	container.append(grid);

	const gridItem = GridItem(gridContainer, player);
	const getContainer = () => container;
	const getGridItem = () => gridItem;

	return { getContainer, getGridItem };
};

export default Grid;
