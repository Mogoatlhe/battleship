export default (length) => {
	const ship = [];
	let coordinates;

	(() => {
		if (length > 4 || length < 1) {
			return;
		}

		for (let i = 0; i < length; i += 1) {
			ship.push("o");
		}
	})();

	const getShipLength = () => ship.length;

	const hitShip = (position) => {
		if (position < 0 || position > ship.length) {
			return "miss: incorrect ship position";
		}

		if (ship[position] === "x") {
			return "cannot hit the same position twice";
		}

		ship[position] = "x";

		return ship[position];
	};

	const isSunk = () => {
		if (ship.length < 1) {
			// throw;
		}

		const remainingPositions = ship.filter((curr) => curr !== "x");

		if (remainingPositions.length > 0) {
			return false;
		}

		return true;
	};

	const setCoordinates = (coordinate, direction) => {
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

	return { getShipLength, hitShip, isSunk, setCoordinates, getCoordinates };
};
