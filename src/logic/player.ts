import Gameboard from "./gameboard";

export default (name: string) => {
	const pastAttempts: any[] = [];
	const placedShips: { coords: Coordinates; direction: string }[] = [];
	const gameboard = Gameboard();
	const getName = () => name;

	const getShips = () => gameboard.getShips();

	const placeShip = (
		coordinates: Coordinates,
		index: number,
		direction: string
	) => {
		try {
			gameboard.placeShip(coordinates, index, direction);
			return true;
		} catch (error) {
			const msg = error.message;
			if (
				msg === "start values are out of bounds" ||
				msg === `"direction" value must be either "horizontal" or "vertical"` ||
				msg === "invalid ship position"
			)
				return false;

			throw msg;
		}
	};

	const randomiseShipPlacement = () => {
		const invalidCoords: { coords: Coordinates; direction: string }[] = [];
		const ships = gameboard.getShips();
		const directions = ["horizontal", "vertical"];

		for (let i = ships.length - 1; i > -1; i--) {
			let isPlaced = false;
			do {
				const [row, col, directionsIndex] = getRandomPlacement();
				let direction = directions[directionsIndex];

				if (validateCoords(row, col, direction, invalidCoords)) continue;

				isPlaced = placeShip({ row: row, col: col }, i, direction);
				invalidCoords.push({ coords: { row: row, col: col }, direction });

				if (!isPlaced) {
					direction = directions[Math.abs(directionsIndex - 1)];
					isPlaced = placeShip({ row: row, col: col }, i, direction);
					invalidCoords.push({ coords: { row: row, col: col }, direction });
				}

				if (isPlaced)
					placedShips.push({ coords: { row: row, col: col }, direction });
			} while (!isPlaced);
		}

		return placedShips;
	};

	const getRandomPlacement = () => {
		const row = Math.floor(Math.random() * 10);
		const col = Math.floor(Math.random() * 10);
		const directionsIndex = Math.floor(Math.random() * 2);

		return [row, col, directionsIndex];
	};

	const validateCoords = (
		row: number,
		col: number,
		direction: string,
		invalidCoords: {
			coords: Coordinates;
			direction: string;
		}[]
	) => {
		const invalidCoord = { coords: { row: row, col: col }, direction };

		const invalidCoordsStr = JSON.stringify(invalidCoords);
		if (invalidCoordsStr.includes(JSON.stringify(invalidCoord))) return true;
		return false;
	};
	// const placeShip = (index: number, starting: number, direction: string) => {
	// 	if (typeof index !== "number") {
	// 		throw new Error("index must be a number");
	// 	}

	// 	if (index < 0 || index > 9) {
	// 		throw new Error("index must be between 0 and 9, inclusive");
	// 	}

	// 	if (typeof starting !== "number") {
	// 		throw new Error("'starting' value must be a number");
	// 	}

	// 	if (starting < 0 || starting > 99) {
	// 		throw new Error("'starting' value must be between 0 and 99, inclusive");
	// 	}

	// 	if (typeof direction !== "string") {
	// 		throw new Error("'direction' value must be a string");
	// 	}

	// 	if (direction !== "horizontal" && direction !== "vertical") {
	// 		throw new Error(
	// 			"'direction' value must be either 'horizontal' or 'vertical'"
	// 		);
	// 	}

	// 	gameboard.placeShip(index, starting, direction);
	// };

	// const randomiseShipPlacement = () => {
	// 	try {
	// 		const ships = gameboard.getShips();
	// 		const index = ships.findIndex(
	// 			(ship) => ship.getCoordinates() === undefined
	// 		);

	// 		let exists = false;
	// 		let starting = 0;
	// 		let directionsIndex = 0;
	// 		const directions = ["horizontal", "vertical"];

	// 		do {
	// 			starting = Math.floor(Math.random() * 100);
	// 			directionsIndex = Math.floor(Math.random() * 2);

	// 			if (pastAttempts.length === 0) {
	// 				break;
	// 			}

	// 			exists = pastAttempts.some((attempt) => {
	// 				const { coordinate } = attempt;
	// 				const { direction } = attempt;
	// 				const { length } = attempt;

	// 				if (
	// 					coordinate === starting &&
	// 					direction === directions[directionsIndex] &&
	// 					length >= ships[index].getShipLength()
	// 				) {
	// 					return true;
	// 				}

	// 				return false;
	// 			});
	// 		} while (exists);

	// 		placeShip(index, starting, directions[directionsIndex]);
	// 		pastAttempts.push([
	// 			{
	// 				coordinate: starting,
	// 				direction: directions[directionsIndex],
	// 				length: ships[index].getShipLength(),
	// 			},
	// 		]);

	// 		if (ships.some((ship) => ship.getCoordinates() === undefined)) {
	// 			randomiseShipPlacement();
	// 		}
	// 	} catch (e) {
	// 		randomiseShipPlacement();
	// 	}
	// };

	const validateCoordinate = (coordinate: number) => {
		if (typeof coordinate !== "number") {
			throw new Error("coordinate value must be a number");
		}

		if (coordinate < 0 || coordinate > 99) {
			throw new Error("coordinate value must be between 0 and 99, inclusive");
		}
	};

	const attack = (enemy: any, coordinate: number) => {
		validateCoordinate(coordinate);

		if (enemy === null || typeof enemy !== "object") {
			throw new Error("enemy value must be of type 'object'");
		}

		if (typeof enemy.getShips !== "function") {
			throw new Error("enemy must be an object of type 'Player'");
		}

		return enemy.receiveAttack(coordinate);
	};

	// const receiveAttack = (coordinate: number) => {
	// 	validateCoordinate(coordinate);

	// 	return gameboard.receiveAttack(coordinate);
	// };

	return {
		getName,
		// receiveAttack,
		placeShip,
		randomiseShipPlacement,
		getShips,
		attack,
	};
};
