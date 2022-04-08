export default (index, me, enemy) => {
	const gridContainer = document.getElementsByClassName("grid-container");
	const container = gridContainer[index];
	const { childNodes } = container;

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
						enemyShips.splice(enemyShipPos, 1);
						alert();
					}
				} else {
					child.classList.add("miss");
					showSand(id);
				}
			});
		});
	};

	const appendGridItems = () => {
		for (let i = 0; i < 100; i += 1) {
			const item = document.createElement("div");
			item.setAttribute("data-id", i);

			gridContainer[0].append(item);
		}
		onClick();
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
