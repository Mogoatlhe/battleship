const Reset = () => {
	const resetBtn = document.createElement("button");

	resetBtn.textContent = "Reset";
	resetBtn.classList.add("reset");
	resetBtn.addEventListener("click", resetGrid);

	function resetGrid(e: MouseEvent) {
		const ships = document.querySelectorAll("#human .ship");
		ships.forEach((ship) => {
			ship.removeAttribute("class");
		});

		if (e !== undefined) showPort();
	}

	const showPort = () => {
		const portContainer = document.querySelector("#port-container");

		if (portContainer !== null) {
			portContainer.classList.remove("hidden");
			return;
		}

		createPort();
	};

	const createPort = () => {
		const portNumbersGridContainer = document.querySelector(
			".port-numbers-grid-container"
		);
		const portContainer = document.createElement("div");
		const portInstructions = document.createElement("p");
		const portLines = document.createElement("div");

		portContainer.setAttribute("id", "port-container");
		portInstructions.setAttribute("id", "port-instructions");
		portInstructions.textContent =
			"Drag the ships to the grid, and then click to rotate: ";
		portLines.setAttribute("id", "port-lines");

		for (let i = 0; i < 4; i++) {
			const portLine = document.createElement("div");

			portLine.classList.add("port-line");

			for (let i = 0; i < 10; i++) {
				const ship = document.createElement("span");
				if (i < 1) ship.style.width = "120px";
				else if (i < 3) ship.style.width = "90px";
				else if (i < 6) ship.style.width = "60px";
				else ship.style.width = "30px";

				ship.style.height = "30px";
				ship.classList.add("ship");
				portLine.appendChild(ship);
			}

			portLines.appendChild(portLine);
		}

		portContainer.appendChild(portInstructions);
		portContainer.appendChild(portLines);
		portNumbersGridContainer.prepend(portContainer);
	};

	const getResetBtn = () => resetBtn;

	return { getResetBtn, resetGrid };
};

export default Reset;
