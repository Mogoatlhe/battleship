export default (ships) => {
	const placeShipsInYard = (container) => {
		ships.forEach((ship) => {
			const length = ship.getShipLength();
			const shipContainer = document.createElement("div");
			shipContainer.classList.add("ship-container");

			for (let i = 0; i < length; i += 1) {
				const shipPart = document.createElement("div");
				shipPart.classList.add("ship-part");

				shipPart.addEventListener("mousedown", () => {
					const clicked = document.querySelector(".clicked");

					if (clicked !== null) {
						clicked.classList.remove("clicked");
					}

					shipPart.classList.add("clicked");
				});

				shipContainer.append(shipPart);
			}

			shipContainer.setAttribute("draggable", "true");

			shipContainer.addEventListener("dragstart", () => {
				shipContainer.classList.add("dragging");
			});

			shipContainer.addEventListener("dragend", () => {
				shipContainer.classList.remove("dragging");
			});
			container.append(shipContainer);
		});
	};

	(() => {
		const classNames = ["shipyard", "graveyard"];

		classNames.forEach((className, index) => {
			const fleet = document.querySelectorAll(".fleet")[index];

			const yard = document.createElement("div");
			const yardName = document.createElement("p");
			const shipsContainer = document.createElement("div");

			placeShipsInYard(shipsContainer);

			yardName.textContent = className;

			yard.classList.add("yard");
			yard.classList.add(className);
			yardName.classList.add(`yard-text`);
			shipsContainer.classList.add("ships-container");

			yard.append(yardName);
			yard.append(shipsContainer);
			fleet.append(yard);
		});
	})();
};
