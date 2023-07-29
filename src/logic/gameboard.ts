import Ship from "./ship";

export default () => {
	const createShipCollection = (length: number, amount: number) => {
		const ships = [];

		for (let i = 0; i < amount; i += 1) {
			ships.push(Ship(length));
		}

		return ships;
	};

	const attackAttempts: number[] = [];
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

	const isClose = (currShipPositions: number[], newShipPos: number) =>
		currShipPositions.some((currShipPos) => {
			let positionStart = currShipPos - 11;
			let temp = 0;

			while (positionStart < currShipPos + 12) {
				if (positionStart === newShipPos) {
					return true;
				}

				temp += 1;

				if (temp === 3) {
					temp = 0;
					positionStart += 8;
				} else {
					positionStart += 1;
				}
			}

			return false;
		});

	const compareShips = (tempShips: any[], positions: number[]) => {
		tempShips.forEach((currShip) => {
			const coordinates = currShip.getCoordinates();
			const currShipPositions = currShip.getPositions(
				coordinates.coordinate,
				coordinates.direction
			);

			positions.forEach((newShipPos) => {
				const close = isClose(currShipPositions, newShipPos);

				if (close) {
					throw new Error("too close to another ship");
				}
			});
		});
	};

	const placeShip = (index: number, starting: number, direction: string) => {
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

		const ship = ships[index];
		const length = ship.getShipLength();
		const lengthSize = starting.toString().length;
		const lastDigit = lengthSize === 1 ? starting : starting % 10;
		const firstDigit =
			lengthSize === 1 ? starting : Number(starting.toString()[0]);

		if (
			length > 1 &&
			((direction === "horizontal" && lastDigit + length > 10) ||
				(direction === "vertical" && firstDigit + length > 10))
		) {
			throw new Error("ship is out of bounds");
		}

		const positions = ship.getPositions(starting, direction);

		const tempShips = ships.filter(
			(currShip) => currShip.getCoordinates() !== undefined
		);

		compareShips(tempShips, positions);
		ship.setCoordinates(starting, direction);
	};

	const receiveAttack = (coordinate: number) => {
		if (typeof coordinate !== "number") {
			throw new Error("coordinate value must be a number");
		}

		if (coordinate < 0 || coordinate > 99) {
			throw new Error("coordinate value must be between 0 and 99, inclusive");
		}

		if (attackAttempts.some((pos) => pos === coordinate)) {
			throw Error("cannot hit an already hit spot");
		}

		const placedShips = ships.filter(
			(ship) => ship.getCoordinates() !== undefined && !ship.isSunk()
		);

		let hitPosition;
		const attackedShip = placedShips.find((placedShip) => {
			const starting = placedShip.getCoordinates().coordinate;
			const { direction } = placedShip.getCoordinates();
			const placedShipPos = placedShip.getPositions(starting, direction);

			hitPosition = placedShipPos.findIndex((pos) => pos === coordinate);
			return hitPosition === -1 ? undefined : placedShip;
		});

		attackAttempts.push(coordinate);
		if (attackedShip === undefined) {
			missedPositions.push(coordinate);
			return false;
		}

		attackedShip.hitShip(hitPosition);
		return true;
	};

	const didAllSink = () => ships.every((ship) => ship.isSunk());

	return { placeShip, receiveAttack, didAllSink, getShips };
};
