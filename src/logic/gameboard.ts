import Ship from "./ship";

export default () => {
	let isSunkCount = 10;
	let shipPositions: Coordinates[][] = [];
	let invalidPositions: Coordinates[] = [];
	const attackAttempts: Coordinates[] = [];
	const missedPositions: Coordinates[] = [];
	const lengthFourShip = Ship(4);
	const lengthThreeShips = createShipCollection(3, 2);
	const lengthTwoShips = createShipCollection(2, 3);
	const lengthOneShips = createShipCollection(1, 4);
	const ships = lengthOneShips.concat(
		lengthTwoShips,
		lengthThreeShips,
		lengthFourShip
	);

	function createShipCollection(length: number, amount: number) {
		const ships = [];

		for (let i = 0; i < amount; i += 1) {
			ships.push(Ship(length));
		}

		return ships;
	}

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

		attackAttempts.push(coordinates);
		const hitShipIndex = getHitShipIndex(coordinates);

		if (hitShipIndex < 0) {
			missedPositions.push(coordinates);
			return { isAllSunk: false, shipInfo: undefined };
		}

		const ship = ships[hitShipIndex];
		ship.hitShip();
		const shipInfo = ship.getShipInfo();

		if (shipInfo.isSunk) isSunkCount -= 1;

		return {
			shipInfo,
			isAllSunk: didAllSink(),
		};
	};

	const placeShip = (
		start: Coordinates,
		shipIndex: number,
		direction: string
	) => {
		if (!shipPositions.includes(undefined) && shipPositions.length > 0) {
			shipPositions = [];
			invalidPositions = [];
		}

		if (direction !== "vertical" && direction !== "horizontal")
			throw new Error(
				`"direction" value must be either "horizontal" or "vertical"`
			);
		const ship = ships[shipIndex];
		const length = ship.getShipLength();
		shipPositions[shipIndex] = getShipPositions(start, length, direction);
		ship.setShipCoordinates(start, direction);

		return shipPositions;
	};

	const getShipPositions = (
		start: Coordinates,
		length: number,
		direction: string
	) => {
		const shipPositions: Coordinates[] = [];
		const invalidPositionsTemp: Coordinates[] = [];

		for (let i = 0; i < length; i++) {
			// if start is out of bounds, throw
			if (start.row < 0 || start.row > 9 || start.col < 0 || start.col > 9)
				throw new Error("start values are out of bounds");

			// if ship position is invalid (e.g another ship is there) throw
			if (
				isInvalid(start, invalidPositionsTemp) ||
				isInvalid(start, invalidPositions)
			)
				throw new Error("invalid ship position");

			shipPositions.push({ row: start.row, col: start.col });
			invalidPositionsTemp.push({ row: start.row, col: start.col });

			if (direction === "horizontal") {
				horizontalInvalidPos(i, start, length, invalidPositionsTemp);
				start.col += 1;
			} else {
				verticalInvalidPos(i, start, length, invalidPositionsTemp);
				start.row += 1;
			}
		}

		invalidPositions.push(...invalidPositionsTemp);
		return shipPositions;
	};

	const isInvalid = (
		start: Coordinates,
		invalidPositionsTemp: Coordinates[]
	) => {
		let invalidPositionsString = JSON.stringify(invalidPositionsTemp);
		let startString = JSON.stringify(start);

		if (invalidPositionsString.includes(startString)) return true;
		return false;
	};

	const verticalInvalidPos = (
		i: number,
		start: Coordinates,
		length: number,
		invalidPositionsTemp: Coordinates[]
	) => {
		if (i === 0) {
			invalidPositionsTemp.push({ row: start.row - 1, col: start.col }); // top
			invalidPositionsTemp.push({ row: start.row - 1, col: start.col - 1 }); // top left only if first
			invalidPositionsTemp.push({ row: start.row - 1, col: start.col + 1 }); // top right only if last
		}
		if (i === length - 1) {
			invalidPositionsTemp.push({ row: start.row + 1, col: start.col }); // bottom
			invalidPositionsTemp.push({ row: start.row + 1, col: start.col + 1 }); // bottom right only if last
			invalidPositionsTemp.push({ row: start.row + 1, col: start.col - 1 }); // bottom left only if first
		}
		invalidPositionsTemp.push({ row: start.row, col: start.col - 1 }); // left
		invalidPositionsTemp.push({ row: start.row, col: start.col + 1 }); // right only if last
	};

	const horizontalInvalidPos = (
		i: number,
		start: Coordinates,
		length: number,
		invalidPositionsTemp: Coordinates[]
	) => {
		if (i === 0) {
			invalidPositionsTemp.push({ row: start.row, col: start.col - 1 }); // left
			invalidPositionsTemp.push({ row: start.row - 1, col: start.col - 1 }); // top left only if first
			invalidPositionsTemp.push({ row: start.row + 1, col: start.col - 1 }); // bottom left only if first
		}
		if (i === length - 1) {
			invalidPositionsTemp.push({ row: start.row - 1, col: start.col + 1 }); // top right only if last
			invalidPositionsTemp.push({ row: start.row + 1, col: start.col + 1 }); // bottom right only if last
			invalidPositionsTemp.push({ row: start.row, col: start.col + 1 }); // right only if last
		}
		invalidPositionsTemp.push({ row: start.row - 1, col: start.col }); // top
		invalidPositionsTemp.push({ row: start.row + 1, col: start.col }); // bottom
	};

	const getHitShipIndex = (coordinates: Coordinates) => {
		const hitShipIndex = shipPositions.findIndex((pos) => {
			const posString = JSON.stringify(pos);
			const coordsString = JSON.stringify(coordinates);

			if (pos !== undefined && posString.includes(coordsString)) return true;
			return false;
		});

		return hitShipIndex;
	};

	const didAllSink = () => (isSunkCount > 0 ? false : true);

	return { placeShip, receiveAttack, didAllSink, getShips };
};
