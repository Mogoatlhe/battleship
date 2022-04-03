export default (length) => {
	const ship = [];

	(() => {
		if (length > 4 || length < 1) {
			return;
		}

		for (let i = 0; i < length; i += 1) {
			ship.push("o");
		}
	})();

	const getShip = () => ship;

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

	return { getShip, hitShip, isSunk };
};
