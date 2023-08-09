import Player from "../logic/player";
import Grid from "./Fleet/Grid";
import Reset from "./reset";

const Randomise = (grid: typeof Grid) => {
	const currGrid = grid(Player);
	const randomiseBtn = document.createElement("button");
	randomiseBtn.classList.add("randomise");
	randomiseBtn.textContent = "Randomise";

	randomiseBtn.addEventListener("click", randomiseShips);

	function randomiseShips() {
		const portContainer = document.querySelector("#port-container");

		if (portContainer !== null) portContainer.classList.add("hidden");

		const reset = Reset();
		reset.resetGrid(undefined);
		const gridItem = currGrid.getGridItem();
		gridItem.randomiseShipPlacement();
	}

	const getBtn = () => randomiseBtn;

	return { getBtn };
};

export default Randomise;
