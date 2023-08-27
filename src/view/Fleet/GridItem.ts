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
				item.classList.add("cell");
				row.append(item);
				item.addEventListener("click", (e) => attack(e));
			}
			gridContainer.append(row);
		}
	})();

	const randomiseShipPlacement = () => {
		const ships = currPlayer.randomiseShipPlacement();

		if (currPlayer.getName() === "human") showHumanShips(ships);
	};

	const showHumanShips = (
		ships: {
			coords: Coordinates;
			direction: string;
		}[]
	) => {
		for (let i = 0; i < ships.length; i++) {
			let shipLength: number;

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
	};

	function attack(e: MouseEvent) {
		const cell = e.target as HTMLDivElement;

		// prevent human from attacking own ship
		if (currPlayer.getName() === "human" && e.clientX !== 0) return;

		// prevent attacking same spot twice
		if (cell.classList.contains("miss") || cell.classList.contains("hit"))
			return;

		const col = parseInt(cell.dataset.x);
		const row = parseInt(cell.dataset.y);

		const { shipInfo, isAllSunk } = currPlayer.receiveAttack({
			row,
			col,
		});

		if (shipInfo !== undefined) {
			cell.classList.add("hit");
			if (shipInfo.isSunk)
				surround(shipInfo.direction, shipInfo.length, shipInfo.coordinates);
		} else cell.classList.add("miss");

		if (isAllSunk) {
			const cells = gridContainer.querySelectorAll(".cell");
			const gridRow = gridContainer.querySelectorAll(".grid-row");
			cells.forEach((cell) => {
				cell.classList.add("done");
			});

			gridRow.forEach((row) => {
				row.classList.add("hide-border");
			});
		}
	}

	const getFleet = () => {
		let fleet: string;
		if (currPlayer.getName() === "human") fleet = "#human";
		else fleet = "#computer";

		return fleet;
	};

	const surround = (direction: string, length: number, start: Coordinates) => {
		let rowIncrement: number, colIncrement: number;
		let before: Coordinates, middle: Coordinates, after: Coordinates;
		if (direction === "horizontal") {
			before = { row: start.row - 1, col: start.col - 1 };
			middle = { row: start.row, col: start.col - 1 };
			after = { row: start.row + 1, col: start.col - 1 };
			rowIncrement = 0;
			colIncrement = 1;
		} else {
			before = { row: start.row - 1, col: start.col - 1 };
			middle = { row: start.row - 1, col: start.col };
			after = { row: start.row - 1, col: start.col + 1 };
			rowIncrement = 1;
			colIncrement = 0;
		}

		for (let i = 0; i <= length + 1; i++) {
			const beforeGrid = document.querySelector(
				`${getFleet()} [data-x="${before.col}"][data-y="${before.row}"]`
			);
			const middleGrid = document.querySelector(
				`${getFleet()} [data-x="${middle.col}"][data-y="${middle.row}"]`
			);
			const afterGrid = document.querySelector(
				`${getFleet()} [data-x="${after.col}"][data-y="${after.row}"]`
			);

			if (beforeGrid !== null) beforeGrid.classList.add("miss");
			if (middleGrid !== null && !middleGrid.classList.contains("hit"))
				middleGrid.classList.add("miss");
			if (afterGrid !== null) afterGrid.classList.add("miss");

			before.col += colIncrement;
			before.row += rowIncrement;

			middle.col += colIncrement;
			middle.row += rowIncrement;

			after.col += colIncrement;
			after.row += rowIncrement;
		}
	};

	return { randomiseShipPlacement };
};

export default GridItem;
