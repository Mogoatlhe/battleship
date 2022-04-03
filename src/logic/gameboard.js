import Ship from "./ship";

export default () => {
	const createShipCollection = (length, amount) => {
		const ships = [];

		for (let i = 0; i < amount; i += 1) {
			ships.push(Ship(length));
		}

		return ships;
	};

	const lengthFourShip = Ship(4);
	const lengthThreeShips = createShipCollection(3, 2);
	const lengthTwoShips = createShipCollection(2, 3);
	const lengthOneShips = createShipCollection(1, 4);
	const ships = lengthOneShips.concat(
		lengthTwoShips,
		lengthThreeShips,
		lengthFourShip
	);

	const placeShip = (ship, starting, direction) => {
		if (
			ship === null ||
			ship === undefined ||
			typeof ship !== "object" ||
			ship.isSunk === undefined
		) {
			return "ship object passed is not of type Ship";
		}
	};

	return { placeShip };
};
