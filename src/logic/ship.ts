export default (length: number) => {
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

	return {
		getShipLength,
		hitShip,
		isSunk,
	};
};
