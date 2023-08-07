import Grid from "./Fleet/Grid";
import Randomise from "./randomise";

const BoardOptions = (grid: typeof Grid) => {
	const randomise = Randomise(grid);
	const optionsContainer = document.createElement("div");
	optionsContainer.classList.add("flex");
	optionsContainer.setAttribute("id", "options-container");
	optionsContainer.appendChild(randomise.getBtn());

	const getBoardOptions = () => optionsContainer;

	return { getBoardOptions };
};

export default BoardOptions;
