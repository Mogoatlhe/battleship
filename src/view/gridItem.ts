import Surround from "./surround";
import CoordsDirection from "../logic/types/coordsDirection";
import Player from "../logic/player";

export default (index: number, me: typeof Player) => {
	let shipsPlaced = false;
	const gridContainer = document.getElementsByClassName("grid-container");
	const container = gridContainer[index];
	const { children } = container;
	const currPlayer = me("");
	const name = currPlayer.getName();

	// const resetId = (shipContainer) => {
	// 	const prevSibling = shipContainer.previousSibling;
	// 	const startId = Number(prevSibling.dataset.id) + 1;
	// 	const { length } = shipContainer.childNodes;

	// 	for (let i = startId, pos = 0; i < startId + length; i += 1, pos += 1) {
	// 		shipContainer.childNodes[pos].setAttribute("data-id", i);
	// 	}
	// };

	// const addSquares = (shipContainer) => {
	// 	const prevSibling = shipContainer.previousSibling;

	// 	if (
	// 		shipContainer.parentNode.parentNode.classList.contains("shipyard") ||
	// 		prevSibling === null
	// 	) {
	// 		return;
	// 	}

	// 	let prevId = Number(prevSibling.dataset.id);
	// 	const startId = prevId + 1;
	// 	const { length } = shipContainer.childNodes;

	// 	for (let i = startId; i < length + startId; i += 1, prevId += 1) {
	// 		const prevSquare = document.querySelector(
	// 			`div[data-id="${prevId}"]:not(.ship-part)`
	// 		);

	// 		const square = document.createElement("div");
	// 		square.dataset.id = i;

	// 		prevSquare.after(square);
	// 	}
	// };

	const showMiss = (id: number) => {
		if (
			children[id - 10] !== undefined &&
			children[id - 10].classList.contains("miss")
		) {
			children[id - 10].classList.add("vertical");
		}

		if (
			children[id + 10] !== undefined &&
			children[id + 10].classList.contains("miss")
		) {
			children[id].classList.add("vertical");
		}

		if (
			children[id - 1] !== undefined &&
			children[id - 1].classList.contains("miss")
		) {
			children[id].classList.add("horizontal");
		}

		if (
			children[id + 1] !== undefined &&
			children[id + 1].classList.contains("miss")
		) {
			children[id + 1].classList.add("horizontal");
		}
	};

	const surrondShip = (ship: {
		getCoordinates: () => { coordinate?: any; direction?: any };
		getPositions: (arg0: any, arg1: any) => any;
	}) => {
		const { coordinate } = ship.getCoordinates();
		const { direction } = ship.getCoordinates();
		const positions = ship.getPositions(coordinate, direction);
		const { length } = positions;
		let end = length + 2;
		let start = coordinate - 11;
		let y = 3;

		if (coordinate.toString().includes("0")) {
			start = coordinate - 10;
			y = 2;
			end -= 1;
		}

		start = start < 0 ? start + 10 : start;
		const imax = coordinate.toString().length < 2 ? 2 : 3;

		if (direction === "horizontal")
			for (let i = 0; i < imax; i += 1) {
				for (let j = start; j < 100 && j < start + end; j += 1) {
					if (
						j < 0 ||
						children[j].classList.contains("hit") ||
						(coordinate > 1 && j.toString().includes("0"))
					) {
						// eslint-disable-next-line no-continue
						continue;
					}

					children[j].classList.add("miss");

					if (j < 90 && j.toString().includes("9")) {
						break;
					}
				}
				start += 10;
			}
		else {
			if (coordinate.toString().includes("9")) {
				y = 2;
			}

			const x = coordinate.toString().length > 1 ? 2 : 1;
			for (let i = 0; i < y; i += 1) {
				for (let j = start; j < 100 && j < start + 10 * (length + x); j += 10) {
					if (j < 0 || children[j].classList.contains("hit")) {
						// eslint-disable-next-line no-continue
						continue;
					}

					children[j].classList.add("miss");
				}
				start += 1;
			}
		}
	};

	// const isPartialOverlap = (dragging) => {
	// 	if (!dragging.classList.contains("dragging")) {
	// 		return false;
	// 	}

	// 	const prevId = Number(dragging.previousSibling.dataset.id);

	// 	// doesn't work
	// 	if (prevId + 1 === dragging.childNodes[0].dataset.id) {
	// 		return false;
	// 	}

	// 	// set the id of dragging childNodes

	// 	return true;
	// };

	const removeSquares = (
		landingIndicators: NodeListOf<Element>,
		landingIndicatorParent: ParentNode
	) => {
		landingIndicators.forEach((landingIndicator) => {
			landingIndicatorParent.removeChild(landingIndicator);
		});
	};

	const drop = () => {
		document.addEventListener("drop", (e) => {
			e.preventDefault();

			const landingIndicators = document.querySelectorAll(".landing-indicator");
			const landingIndicatorParent = landingIndicators[0].parentNode;
			const dragging = document.querySelector(".dragging");
			const prevSquare = landingIndicators[0].previousSibling;
			removeSquares(landingIndicators, landingIndicatorParent);
			const surround = Surround();

			if (prevSquare !== null) {
				prevSquare.after(dragging);
			} else {
				landingIndicatorParent.prepend(dragging);
			}

			surround.surroundShip(dragging);
			// const dragChildren = dragging.childNodes;
			// const isOverlap = isPartialOverlap(e.target.parentNode);

			// if (isOverlap) {
			// 	resetId(dragging);
			// 	return;
			// }

			// addSquares(dragging);

			// const { length } = dragChildren;
			// const startId = Number(dragChildren[0].dataset.id);
			// const prevSquare = document.querySelector(
			// 	`div[data-id="${startId - 1}"]`
			// );

			// // removes squares to be replaced by the "dropping ship"
			// for (let i = startId; i < length + startId; i += 1) {
			// 	const square = document.querySelector(
			// 		`div[data-id="${i}"]:not(.ship-part)`
			// 	);

			// 	const yourFleetGrid = document.querySelector(
			// 		"#your-fleet .numbers-grid-container .grid-container"
			// 	);
			// 	yourFleetGrid.removeChild(square);
			// }

			// prevSquare.after(dragging);
		});
	};

	// const onClick = () => {
	// 	const enemyShips = enemy.getShips();

	// 	Array.from(children).forEach((child) => {
	// 		child.addEventListener("click", (e) => {
	// 			let isHumanGrid = false;

	// 			// checks the click was by a human, or by a script
	// 			// isTrusted returns true if the click was by a human
	// 			if (Number(index) === 0 && e.isTrusted) {
	// 				isHumanGrid = true;
	// 			}

	// 			// prevents human from clicking on own grid.
	// 			if (isHumanGrid) {
	// 				return;
	// 			}

	// 			const c = child as HTMLElement;
	// 			const id = Number(c.dataset.id);
	// 			if (me.attack(enemy, id)) {
	// 				c.classList.add("hit");
	// 				const enemyShipPos = enemyShips.findIndex(
	// 					(enemyShip: { isSunk: () => any }) => enemyShip.isSunk()
	// 				);

	// 				if (enemyShipPos !== -1) {
	// 					const enemyShip = enemyShips[enemyShipPos];
	// 					surrondShip(enemyShip);
	// 					enemyShips.splice(enemyShipPos, 1);

	// 					if (enemyShips.length === 0) {
	// 						const searchItem = index === 0 ? "your-fleet" : "opponent-fleet";
	// 						const fleet = document.getElementById(searchItem);
	// 						const items = fleet.querySelectorAll(".grid-container > *");
	// 						items.forEach((item) => item.classList.add("done"));
	// 					}
	// 				}
	// 			} else {
	// 				child.classList.add("miss");
	// 				showMiss(id);
	// 			}
	// 		});
	// 	});
	// };

	const appendGridItems = (gridIndex: number) => {
		for (let i = 0; i < 10; i++) {
			const row = document.createElement("div");
			row.classList.add("grid-row");
			for (let j = 0; j < 10; j++) {
				const item = document.createElement("div");
				item.setAttribute("data-x", `${i}`);
				item.setAttribute("data-y", `${j}`);
				row.append(item);
				item.addEventListener("click", (e) => attack(gridIndex, e));
			}
			gridContainer[gridIndex].append(row);
		}

		if (index === 0) {
			drop();
		}
	};

	function attack(gridIndex: number, e: MouseEvent) {
		if (gridIndex !== 1) return;

		const cell = e.target as HTMLDivElement;
		console.log(cell.classList);
		if (cell.classList.contains("miss") || cell.classList.contains("hit"))
			return;

		if (cell.classList.contains("ship")) cell.classList.add("hit");
		else cell.classList.add("miss");

		const col = parseInt(cell.dataset.col);
		const row = parseInt(cell.parentElement.dataset.row);
		console.log(currPlayer.getName());
		console.log(currPlayer.receiveAttack({ row, col }));
	}
	// const placeShips = () => {
	// 	enemy.getShips().forEach((ship) => {
	// 		const length = ship.getShipLength();
	// 		const coordinates = ship.getCoordinates();
	// 		let { coordinate } = coordinates;
	// 		const { direction } = coordinates;

	// 		let incrementValue;
	// 		let className = "ship vertical";
	// 		let border = length - 1;

	// 		if (direction === "horizontal") {
	// 			className = "ship horizontal";
	// 			incrementValue = 1;
	// 			border = 0;
	// 		} else {
	// 			incrementValue = 10;
	// 		}

	// 		const classNameArr = className.split(" ");

	// 		if (length === 1) {
	// 			classNameArr.pop();
	// 		}

	// 		for (let i = 0; i < length; i += 1) {
	// 			// eslint-disable-next-line no-loop-func
	// 			classNameArr.forEach((cName) =>
	// 				childNodes[coordinate].classList.add(cName)
	// 			);

	// 			if (i === border) {
	// 				childNodes[coordinate].classList.add("border");
	// 			}
	// 			coordinate += incrementValue;
	// 		}
	// 	});
	// };

	const randomiseShipPlacement = () => {
		if (shipsPlaced) return;

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

		shipsPlaced = true;
	};

	const getFleet = () => {
		let fleet: string;
		if (name === "human") fleet = "#your-fleet";
		else fleet = "#opponent-fleet";

		return fleet;
	};

	const placeShips = (coordsDirection: CoordsDirection[]) => {};
	return { appendGridItems, placeShips, randomiseShipPlacement };
};
