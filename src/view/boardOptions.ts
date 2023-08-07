import Randomise from "./randomise";
const boardOptions = () => {
	const randomise = Randomise();
	const optionsContainer = document.createElement("div");
	optionsContainer.classList.add("flex");
	optionsContainer.setAttribute("id", "options-container");
	optionsContainer.appendChild(randomise.getBtn());

	const getBoardOptions = () => optionsContainer;

	return getBoardOptions;
};

export default boardOptions;
