const Reset = () => {
	const resetBtn = document.createElement("button");

	resetBtn.textContent = "Reset";
	resetBtn.classList.add("reset");
	resetBtn.addEventListener("click", resetGrid);

	function resetGrid(e: MouseEvent) {
		const ships = document.querySelectorAll("#human .grid-container .ship");
		ships.forEach((ship) => {
			ship.removeAttribute("class");
		});

		if (e !== undefined) showPort();
	}

	const showPort = () => {
		const portContainer = document.querySelector("#port-container");

		if (portContainer !== null) {
			portContainer.removeAttribute("style");
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

			if (i < 1) portLine.append(...attachShips(1, 4));
			else if (i < 2) portLine.append(...attachShips(2, 3));
			else if (i < 3) portLine.append(...attachShips(3, 2));
			else portLine.append(...attachShips(4, 1));

			portLines.appendChild(portLine);
		}

		portContainer.appendChild(portInstructions);
		portContainer.appendChild(portLines);
		portNumbersGridContainer.prepend(portContainer);
	};

	const attachShips = (count: number, length: number) => {
		const ships: Node[] = [];
		const width = `${30 * length}px`;

		for (let i = 0; i < count; i++) {
			const ship = document.createElement("div");
			ship.classList.add("ship");
			ship.style.width = width;
			ship.style.height = "30px";
			ships.push(ship);
		}

		return ships;
	};

	const getResetBtn = () => resetBtn;

	return { getResetBtn, resetGrid };
};

export default Reset;
