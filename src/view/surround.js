export default () => {
	const doLeftSurround = (currentShipPart) => {
		const currentShipPartId = currentShipPart.dataset.id;
		const prevShipPart = document.querySelector(
			`[data-id="${Number(currentShipPartId) - 1}"]`
		);

		if (prevShipPart === null) {
			return;
		}

		const prevShipPartId = prevShipPart.dataset.id;

		if (
			prevShipPart === null ||
			(currentShipPartId.length === 2 &&
				prevShipPartId[0] !== currentShipPartId[0])
		) {
			return;
		}

		prevShipPart.classList.add(`surround-${currentShipPartId}`);
	};

	const surroundShip = (ship) => {
		const shipParts = ship.childNodes;

		[...shipParts].forEach((shipPart, index) => {
			// horizontal
			if (index === 0) {
				doLeftSurround(shipPart);
			}
		});
	};

	return { surroundShip };
};
