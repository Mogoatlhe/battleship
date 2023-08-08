import Grid from "./Fleet/Grid";
import Randomise from "./randomise";
import Reset from "./reset";

const BoardOptions = (grid: typeof Grid) => {
	const randomise = Randomise(grid);
	const reset = Reset();

	const optionsContainer = document.createElement("div");
	optionsContainer.classList.add("flex");
	optionsContainer.setAttribute("id", "options-container");
	optionsContainer.append(randomise.getBtn());
	optionsContainer.append(reset.getResetBtn());

	const getBoardOptions = () => optionsContainer;

	return { getBoardOptions };
};

export default BoardOptions;
