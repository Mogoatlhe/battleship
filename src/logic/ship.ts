export default (length: number) => {
	const ship: string[] = [];
	let coordinates: any;
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

	const hitShip = (position: number) => {
		if (position < 0 || position >= ship.length) {
			throw new Error("miss: incorrect ship position");
		}

		if (ship[position] === "x") {
			throw new Error("cannot hit the same position twice");
		}

		hitCount += 1;
		ship[position] = "x";

		return isSunk();
	};

	const isSunk = () => {
		if (hitCount < getShipLength()) return false;
		return true;
	};

	const setCoordinates = (coordinate: number, direction: string) => {
		if (coordinate < 0) {
			return "error: negative coordinates given";
		}

		if (coordinate > 99) {
			return "error: coordinates position cannot be greater than grid size";
		}

		if (direction !== "horizontal" && direction !== "vertical") {
			return "error: direction can only be (h) horizontal or (v) vertical";
		}

		coordinates = {
			coordinate,
			direction,
		};

		return true;
	};

	const getCoordinates = () => coordinates;

	const getPositions = (coordinate: number, direction: string) => {
		const positions = [coordinate];

		if (direction === "horizontal") {
			for (let i = 1; i < length; i += 1) {
				positions.push(positions[i - 1] + 1);
			}
		} else {
			for (let i = 1; i < length; i += 1) {
				positions.push(positions[i - 1] + 10);
			}
		}

		return positions;
	};

	return {
		getShipLength,
		hitShip,
		isSunk,
		setCoordinates,
		getCoordinates,
		getPositions,
	};
};
