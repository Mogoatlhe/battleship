export default (length: number) => {
	let direction: string;
	let coordinates: Coordinates;
	const ship: string[] = [];
	let hitCount = 0;

	/** initialises a ship of size { length } */
	(() => {
		if (length > 4 || length < 1) {
			return;
		}

		for (let i = 0; i < length; i += 1) {
			ship.push("o");
		}
	})();

	/** retrieves the length of the ship */
	const getShipLength = () => ship.length;

	const hitShip = () => {
		hitCount += 1;
	};

	const isSunk = () => {
		if (hitCount < getShipLength()) return false;
		return true;
	};

	const setShipCoordinates = (start: Coordinates, currDirection: string) => {
		direction = currDirection;
		coordinates = start;
	};

	const getShipInfo = () => ({
		length,
		coordinates,
		direction,
		isSunk: isSunk(),
	});

	return {
		setShipCoordinates,
		getShipLength,
		getShipInfo,
		hitShip,
		isSunk,
	};
};
