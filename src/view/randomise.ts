import Player from "../logic/player";
import Grid from "./Fleet/Grid";

const Randomise = (grid: typeof Grid) => {
	let shipsPlaced = false;
	const currGrid = grid(Player);
	const randomiseBtn = document.createElement("button");
	randomiseBtn.classList.add("randomise");
	randomiseBtn.textContent = "Randomise";

	randomiseBtn.addEventListener("click", randomiseShips);

	function randomiseShips() {
		if (shipsPlaced) return;
		const gridItem = currGrid.getGridItem();
		gridItem.randomiseShipPlacement();
		shipsPlaced = true;
	}

	const getBtn = () => randomiseBtn;

	return { getBtn };
};

export default Randomise;
