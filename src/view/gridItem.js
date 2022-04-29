export default (index, me, enemy) => {
	const gridContainer = document.getElementsByClassName("grid-container");
	const container = gridContainer[index];
	const { childNodes } = container;
	const addSquares = (shipContainer) => {
		const startId = Number(shipContainer.childNodes[0].dataset.id);
		if (
			!shipContainer.classList.contains("ship-container") ||
			startId === null ||
			startId === ""
		) {
			return;
		}

		const { length } = shipContainer.childNodes;
		let prevId = startId - 1;

		for (let i = startId; i < length + startId; i += 1, prevId += 1) {
			const prevSquare = document.querySelector(
				`div[data-id="${prevId}"]:not(.ship-part)`
			);

			const square = document.createElement("div");
			square.dataset.id = i;

			prevSquare.after(square);
		}
	};

	const showSand = (id) => {
		if (
			childNodes[id - 10] !== undefined &&
			childNodes[id - 10].classList.contains("miss")
		) {
			childNodes[id - 10].classList.add("vertical");
		}

		if (
			childNodes[id + 10] !== undefined &&
			childNodes[id + 10].classList.contains("miss")
		) {
			childNodes[id].classList.add("vertical");
		}

		if (
			childNodes[id - 1] !== undefined &&
			childNodes[id - 1].classList.contains("miss")
		) {
			childNodes[id].classList.add("horizontal");
		}

		if (
			childNodes[id + 1] !== undefined &&
			childNodes[id + 1].classList.contains("miss")
		) {
			childNodes[id + 1].classList.add("horizontal");
		}
	};

	const surrondShip = (ship) => {
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
						childNodes[j].classList.contains("hit") ||
						(coordinate > 1 && j.toString().includes("0"))
					) {
						// eslint-disable-next-line no-continue
						continue;
					}

					childNodes[j].classList.add("miss");

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
					if (j < 0 || childNodes[j].classList.contains("hit")) {
						// eslint-disable-next-line no-continue
						continue;
					}

					childNodes[j].classList.add("miss");
				}
				start += 1;
			}
		}
	};

	const drop = () => {
		document.addEventListener("drop", (e) => {
			e.preventDefault();
			const dragging = document.querySelector(".dragging");
			const dragChildren = dragging.childNodes;
			const hasId = [...dragChildren].every((dragChild) =>
				dragChild.hasAttribute("data-id")
			);

			if (
				!hasId ||
				index === 1 ||
				!e.target.parentNode.classList.contains("grid-container")
			) {
				return;
			}

			const { length } = dragChildren;
			const startId = Number(dragChildren[0].dataset.id);
			const prevSquare = document.querySelector(
				`div[data-id="${startId - 1}"]:not(.ship-part)`
			);

			addSquares(dragging);
			for (let i = startId; i < length + startId; i += 1) {
				const square = document.querySelector(
					`div[data-id="${i}"]:not(.ship-part)`
				);

				const yourFleetGrid = document.querySelector(
					"#your-fleet .numbers-grid-container .grid-container"
				);
				yourFleetGrid.removeChild(square);
			}

			prevSquare.after(dragging);
		});
	};

	const onClick = () => {
		const enemyShips = enemy.getShips();

		[...childNodes].forEach((child) => {
			child.addEventListener("click", () => {
				const id = Number(child.dataset.id);
				if (me.attack(enemy, Number(id))) {
					child.classList.add("hit");
					const enemyShipPos = enemyShips.findIndex((enemyShip) =>
						enemyShip.isSunk()
					);

					if (enemyShipPos !== -1) {
						const enemyShip = enemyShips[enemyShipPos];
						surrondShip(enemyShip);
						enemyShips.splice(enemyShipPos, 1);

						if (enemyShips.length === 0) {
							const searchItem = index === 0 ? "your-fleet" : "opponent-fleet";
							const fleet = document.getElementById(searchItem);
							const items = fleet.querySelectorAll(".grid-container > *");
							[...items].forEach((item) => item.classList.add("done"));
						}
					}
				} else {
					child.classList.add("miss");
					showSand(id);
				}
			});
		});
	};

	const appendGridItems = (gridIndex) => {
		for (let i = 0; i < 100; i += 1) {
			const item = document.createElement("div");
			item.setAttribute("data-id", i);

			gridContainer[gridIndex].append(item);
		}
		onClick();

		if (index === 0) {
			drop();
		}
	};

	const placeShips = () => {
		enemy.getShips().forEach((ship) => {
			const length = ship.getShipLength();
			const coordinates = ship.getCoordinates();
			let { coordinate } = coordinates;
			const { direction } = coordinates;

			let incrementValue;
			let className = "ship vertical";
			let border = length - 1;

			if (direction === "horizontal") {
				className = "ship horizontal";
				incrementValue = 1;
				border = 0;
			} else {
				incrementValue = 10;
			}

			const classNameArr = className.split(" ");

			if (length === 1) {
				classNameArr.pop();
			}

			for (let i = 0; i < length; i += 1) {
				// eslint-disable-next-line no-loop-func
				classNameArr.forEach((cName) =>
					childNodes[coordinate].classList.add(cName)
				);

				if (i === border) {
					childNodes[coordinate].classList.add("border");
				}
				coordinate += incrementValue;
			}
		});
	};

	return { appendGridItems, placeShips };
};
