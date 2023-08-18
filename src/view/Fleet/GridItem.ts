import Player from "../../logic/player";

const GridItem = (gridContainer: HTMLDivElement, player: typeof Player) => {
	const currPlayer = player("");

	(() => {
		for (let i = 0; i < 10; i++) {
			const row = document.createElement("div");
			row.classList.add("grid-row");
			for (let j = 0; j < 10; j++) {
				const item = document.createElement("div");
				item.setAttribute("data-y", `${i}`);
				item.setAttribute("data-x", `${j}`);
				row.append(item);
				item.addEventListener("click", (e) => attack(e));
			}
			gridContainer.append(row);
		}
	})();

	const randomiseShipPlacement = () => {
		// if (shipsPlaced) return;

		let shipLength: number;
		const ships = currPlayer.randomiseShipPlacement();

		for (let i = 0; i < ships.length; i++) {
			if (i < 1) shipLength = 4; // 0
			else if (i < 3) shipLength = 3; // 1 2
			else if (i < 6) shipLength = 2; // 3 4 5
			else shipLength = 1; // 6 7 8 9

			const ship = ships[i];
			let row = ship.coords.row;
			let col = ship.coords.col;

			for (let j = 0; j < shipLength; j++) {
				const cell = document.querySelector(
					`${getFleet()} [data-x="${row}"][data-y="${col}"]`
				);

				cell.classList.add("ship");
				if (ships[i].direction === "horizontal") {
					col += 1;
				} else if (ship.direction === "vertical") {
					row += 1;
				}
			}
		}

		// shipsPlaced = true;
	};

	function attack(e: MouseEvent) {
		const cell = e.target as HTMLDivElement;

		// prevent human from attacking own ship
		if (currPlayer.getName() === "human" && e.clientX !== 0) return;

		// prevent attacking same spot twice
		if (cell.classList.contains("miss") || cell.classList.contains("hit"))
			return;

		if (cell.classList.contains("ship")) cell.classList.add("hit");
		else cell.classList.add("miss");

		const col = parseInt(cell.dataset.col);
		const row = parseInt(cell.dataset.row);

		console.log(cell.dataset.x, cell.dataset.y);
	}

	const getFleet = () => {
		let fleet: string;
		if (currPlayer.getName() === "human") fleet = "#human";
		else fleet = "#computer";

		return fleet;
	};

	return { randomiseShipPlacement };
};

export default GridItem;
