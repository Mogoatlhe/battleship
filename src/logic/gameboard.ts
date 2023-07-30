import Ship from "./ship";

export default () => {
	const createShipCollection = (length: number, amount: number) => {
		const ships = [];

		for (let i = 0; i < amount; i += 1) {
			ships.push(Ship(length));
		}

		return ships;
	};

	const shipPositions: number[][][] = [];
	const invalidPositions: number[][] = [];
	const attackAttempts: Coordinates[] = [];
	const missedPositions = [];
	const lengthFourShip = Ship(4);
	const lengthThreeShips = createShipCollection(3, 2);
	const lengthTwoShips = createShipCollection(2, 3);
	const lengthOneShips = createShipCollection(1, 4);
	const ships = lengthOneShips.concat(
		lengthTwoShips,
		lengthThreeShips,
		lengthFourShip
	);

	const getShips = () => ships;

	// const placeShip = (index: number, starting: number, direction: string) => {
	// 	if (index < 0 || index > 9)
	// 		throw new Error("index must be between 0 and 9, inclusive");

	// 	if (starting < 0 || starting > 99)
	// 		throw new Error("'starting' value must be between 0 and 99, inclusive");

	// 	if (direction !== "horizontal" && direction !== "vertical")
	// 		throw new Error(
	// 			"'direction' value must be either 'horizontal' or 'vertical'"
	// 		);

	// 	const ship = ships[index];
	// 	const length = ship.getShipLength();
	// 	const lengthSize = starting.toString().length;
	// 	const lastDigit = lengthSize === 1 ? starting : starting % 10;
	// 	const firstDigit =
	// 		lengthSize === 1 ? starting : Number(starting.toString()[0]);

	// 	if (
	// 		length > 1 &&
	// 		((direction === "horizontal" && lastDigit + length > 10) ||
	// 			(direction === "vertical" && firstDigit + length > 10))
	// 	) {
	// 		throw new Error("ship is out of bounds");
	// 	}

	// 	const positions = ship.getPositions(starting, direction);

	// 	const tempShips = ships.filter(
	// 		(currShip) => currShip.getCoordinates() !== undefined
	// 	);

	// 	compareShips(tempShips, positions);
	// 	ship.setCoordinates(starting, direction);
	// };

	// const isClose = (currShipPositions: number[], newShipPos: number) =>
	// 	currShipPositions.some((currShipPos) => {
	// 		let positionStart = currShipPos - 11;
	// 		let temp = 0;

	// 		while (positionStart < currShipPos + 12) {
	// 			if (positionStart === newShipPos) {
	// 				return true;
	// 			}

	// 			temp += 1;

	// 			if (temp === 3) {
	// 				temp = 0;
	// 				positionStart += 8;
	// 			} else {
	// 				positionStart += 1;
	// 			}
	// 		}

	// 		return false;
	// 	});

	// const compareShips = (tempShips: any[], positions: number[]) => {
	// 	tempShips.forEach((currShip) => {
	// 		const coordinates = currShip.getCoordinates();
	// 		const currShipPositions = currShip.getPositions(
	// 			coordinates.coordinate,
	// 			coordinates.direction
	// 		);

	// 		positions.forEach((newShipPos) => {
	// 			const close = isClose(currShipPositions, newShipPos);

	// 			if (close) {
	// 				throw new Error("too close to another ship");
	// 			}
	// 		});
	// 	});
	// };

	/** takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot. */
	const receiveAttack = (coordinates: Coordinates) => {
		if (
			coordinates.row < 0 ||
			coordinates.row > 9 ||
			coordinates.col < 0 ||
			coordinates.col > 9
		) {
			throw new Error("coordinates are out of bounds");
		}

		if (
			attackAttempts.some(
				(pos) => pos.col === coordinates.col && pos.row === coordinates.row
			)
		)
			throw Error("cannot hit an already hit spot");

		// const placedShips = ships.filter(
		// 	(ship) => ship.getCoordinates() !== undefined && !ship.isSunk()
		// );

		// let hitPosition;
		// const attackedShip = placedShips.find((placedShip) => {
		// 	const starting = placedShip.getCoordinates().coordinate;
		// 	const { direction } = placedShip.getCoordinates();
		// 	const placedShipPos = placedShip.getPositions(starting, direction);

		// 	hitPosition = placedShipPos.findIndex((pos) => pos === coordinates);
		// 	return hitPosition === -1 ? undefined : placedShip;
		// });

		// attackAttempts.push(coordinates);
		// if (attackedShip === undefined) {
		// 	missedPositions.push(coordinates);
		// 	return false;
		// }

		// attackedShip.hitShip(hitPosition);
		// return true;
	};

	const placeShip = (start: number[], shipIndex: number, direction: string) => {
		if (direction !== "vertical" && direction !== "horizontal")
			throw new Error(
				`"direction" value must be either "horizontal" or "vertical"`
			);
		const ship = ships[shipIndex];
		const length = ship.getShipLength();
		shipPositions[shipIndex] = getShipPositions(start, length, direction);

		return shipPositions;
	};

	const getShipPositions = (
		start: number[],
		length: number,
		direction: string
	) => {
		const shipPositions: number[][] = [];
		const invalidPositionsTemp: number[][] = [];

		for (let i = 0; i < length; i++) {
			// if start is out of bounds, throw
			if (start[0] < 0 || start[0] > 9 || start[1] < 0 || start[1] > 9)
				throw new Error("start values are out of bounds");

			// if ship position is invalid (e.g another ship is there) throw
			if (
				isInvalid(start, invalidPositionsTemp) ||
				isInvalid(start, invalidPositions)
			)
				throw new Error("invalid ship position");

			shipPositions.push([...start]);
			invalidPositionsTemp.push([...start]);

			if (direction === "horizontal") {
				horizontalInvalidPos(i, start, length, invalidPositionsTemp);
				start[1] += 1;
			} else {
				verticalInvalidPos(i, start, length, invalidPositionsTemp);
				start[0] += 1;
			}
		}

		invalidPositions.push(...invalidPositionsTemp);
		return shipPositions;
	};

	const isInvalid = (start: number[], invalidPositionsTemp: number[][]) => {
		let invalidPositionsString = JSON.stringify(invalidPositionsTemp);
		let startString = JSON.stringify(start);

		if (invalidPositionsString.includes(startString)) return true;
		return false;
	};

	const verticalInvalidPos = (
		i: number,
		start: number[],
		length: number,
		invalidPositionsTemp: number[][]
	) => {
		if (i === 0) {
			invalidPositionsTemp.push([start[0] - 1, start[1]]); // top
			invalidPositionsTemp.push([start[0] - 1, start[1] - 1]); // top left only if first
			invalidPositionsTemp.push([start[0] - 1, start[1] + 1]); // top right only if last
		} else if (i === length - 1) {
			invalidPositionsTemp.push([start[0] + 1, start[1]]); // bottom
			invalidPositionsTemp.push([start[0] + 1, start[1] + 1]); // bottom right only if last
			invalidPositionsTemp.push([start[0] + 1, start[1] - 1]); // bottom left only if first
		}
		invalidPositionsTemp.push([start[0], start[1] - 1]); // left
		invalidPositionsTemp.push([start[0], start[1] + 1]); // right only if last
	};

	const horizontalInvalidPos = (
		i: number,
		start: number[],
		length: number,
		invalidPositionsTemp: number[][]
	) => {
		if (i === 0) {
			invalidPositionsTemp.push([start[0], start[1] - 1]); // left
			invalidPositionsTemp.push([start[0] - 1, start[1] - 1]); // top left only if first
			invalidPositionsTemp.push([start[0] + 1, start[1] - 1]); // bottom left only if first
		} else if (i === length - 1) {
			invalidPositionsTemp.push([start[0] - 1, start[1] + 1]); // top right only if last
			invalidPositionsTemp.push([start[0] + 1, start[1] + 1]); // bottom right only if last
			invalidPositionsTemp.push([start[0], start[1] + 1]); // right only if last
		}
		invalidPositionsTemp.push([start[0] - 1, start[1]]); // top
		invalidPositionsTemp.push([start[0] + 1, start[1]]); // bottom
	};

	const didAllSink = () => ships.every((ship) => ship.isSunk());

	return { placeShip, receiveAttack, didAllSink, getShips };
};
