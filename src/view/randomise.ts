const Randomise = () => {
	const randomiseBtn = document.createElement("button");
	randomiseBtn.classList.add("randomise");
	randomiseBtn.textContent = "Randomise";

	randomiseBtn.addEventListener("click", () => {});

	const randomiseShips = (grid: any) => {
		grid.randomiseShipPlacement();
	};

	const getBtn = () => randomiseBtn;

	return { getBtn };
};

export default Randomise;
