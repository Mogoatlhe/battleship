import Gameboard from "./gameboard";

export default (name) => {
	const pastAttempts = [];
	const gameboard = Gameboard();
	const getName = () => name;

	const getShips = () => gameboard.getShips();

	const placeShip = (index, starting, direction) => {
		if (typeof index !== "number") {
			throw new Error("index must be a number");
		}

		if (index < 0 || index > 9) {
			throw new Error("index must be between 0 and 9, inclusive");
		}

		if (typeof starting !== "number") {
			throw new Error("'starting' value must be a number");
		}

		if (starting < 0 || starting > 99) {
			throw new Error("'starting' value must be between 0 and 99, inclusive");
		}

		if (typeof direction !== "string") {
			throw new Error("'direction' value must be a string");
		}

		if (direction !== "horizontal" && direction !== "vertical") {
			throw new Error(
				"'direction' value must be either 'horizontal' or 'vertical'"
			);
		}

		gameboard.placeShip(index, starting, direction);
	};

	const randomiseShipPlacement = () => {
		try {
			const ships = gameboard.getShips();
			const index = ships.findIndex(
				(ship) => ship.getCoordinates() === undefined
			);

			let exists = false;
			let starting = 0;
			let directionsIndex = 0;
			const directions = ["horizontal", "vertical"];

			do {
				starting = Math.floor(Math.random() * 100);
				directionsIndex = Math.floor(Math.random() * 2);

				if (pastAttempts.length === 0) {
					break;
				}
				// eslint-disable-next-line no-loop-func
				exists = pastAttempts.some((attempt) => {
					const { coordinate } = attempt;
					const { direction } = attempt;
					const { length } = attempt;

					if (
						coordinate === starting &&
						direction === directions[directionsIndex] &&
						length >= ships[index].getShipLength()
					) {
						return true;
					}

					return false;
				});
			} while (exists);

			placeShip(index, starting, directions[directionsIndex]);
			pastAttempts.push([
				{
					coordinate: starting,
					direction: directions[directionsIndex],
					length: ships[index].getShipLength(),
				},
			]);

			if (ships.some((ship) => ship.getCoordinates() === undefined)) {
				randomiseShipPlacement();
			}
		} catch (e) {
			randomiseShipPlacement();
		}
	};

	const validateCoordinate = (coordinate) => {
		if (typeof coordinate !== "number") {
			throw new Error("coordinate value must be a number");
		}

		if (coordinate < 0 || coordinate > 99) {
			throw new Error("coordinate value must be between 0 and 99, inclusive");
		}
	};

	const attack = (enemy, coordinate) => {
		validateCoordinate(coordinate);

		if (enemy === null || typeof enemy !== "object") {
			throw new Error("enemy value must be of type 'object'");
		}

		if (typeof enemy.getShips !== "function") {
			throw new Error("enemy must be an object of type 'Player'");
		}

		return enemy.receiveAttack(coordinate);
	};

	const receiveAttack = (coordinate) => {
		validateCoordinate(coordinate);

		return gameboard.receiveAttack(coordinate);
	};

	return {
		getName,
		receiveAttack,
		placeShip,
		randomiseShipPlacement,
		getShips,
		attack,
	};
};
