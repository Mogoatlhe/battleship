export default () => {
	const doLeftSurround = (currentShipPartId) => {
		const prevShipPart = document.querySelector(
			`[data-id="${Number(currentShipPartId) - 1}"]`
		);

		if (
			prevShipPart === null ||
			(currentShipPartId.length === 2 &&
				String(Number(currentShipPartId) - 1)[0] !== currentShipPartId[0])
		) {
			return;
		}

		prevShipPart.classList.add(`surround-${currentShipPartId}`);
	};

	const doRightSurround = (currentShipPartId) => {
		const nextShipPart = document.querySelector(
			`[data-id="${Number(currentShipPartId) + 1}"]`
		);

		if (
			nextShipPart === null ||
			(currentShipPartId.length === 2 &&
				String(Number(currentShipPartId) + 1)[0] !== currentShipPartId[0])
		) {
			return;
		}

		nextShipPart.classList.add(`surround-${currentShipPartId}`);
	};

	const surroundShip = (ship) => {
		const shipParts = ship.childNodes;
		const { length } = shipParts;

		[...shipParts].forEach((shipPart, index) => {
			const shipPartId = shipPart.dataset.id;
			// horizontal
			if (index === 0) {
				doLeftSurround(shipPartId);

				if (length === 1) {
					doRightSurround(shipPartId);
				}
			} else if (length - 1 === index) {
				doRightSurround(shipPartId);
			}
		});
	};

	return { surroundShip };
};
