import Gameboard from "./gameboard";

export default (name) => {
	const gameboard = Gameboard();
	const getName = () => name;

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

	const attack = (enemy, coordinate) => enemy.receiveAttack(coordinate);

	const receiveAttack = (coordinate) => {
		if (typeof coordinate !== "number") {
			throw new Error("coordinate value must be a number");
		}

		if (coordinate < 0 || coordinate > 99) {
			throw new Error("coordinate value must be between 0 and 99, inclusive");
		}
	};

	return { getName, receiveAttack, placeShip };
};
