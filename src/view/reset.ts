const Reset = () => {
	const resetBtn = document.createElement("button");

	resetBtn.textContent = "Reset";
	resetBtn.classList.add("reset");
	resetBtn.addEventListener("click", resetGrid);

	function resetGrid() {
		const ships = document.querySelectorAll("#human .ship");
		ships.forEach((ship) => {
			ship.removeAttribute("class");
		});
	}

	const getResetBtn = () => resetBtn;

	return { getResetBtn };
};

export default Reset;
