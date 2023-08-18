import Gameboard from "./gameboard";

const Player = (name: string) => {
	const pastAttempts: any[] = [];
	let placedShips: { coords: Coordinates; direction: string }[] = [];
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
		if (placedShips.length > 0) {
			placedShips = [];
		}

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

	const receiveAttack = (coordinates: Coordinates) => {
		return gameboard.receiveAttack(coordinates);
	};

	const didAllSink = () => {
		return gameboard.didAllSink();
	};

	return {
		getName,
		receiveAttack,
		placeShip,
		randomiseShipPlacement,
		getShips,
		didAllSink,
	};
};

export default Player;
