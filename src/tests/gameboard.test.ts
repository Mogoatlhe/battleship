import Gameboard from "../logic/gameboard";

beforeAll(() => {});

describe("place ships", () => {
	const gameboard = Gameboard();

	test("invalid 'direction' value: direction value must be either 'horizontal' or 'vertical", () => {
		expect(() => {
			gameboard.placeShip([0, 0], 1, "diagonal");
		}).toThrow(`"direction" value must be either "horizontal" or "vertical"`);
	});

	test("ship out of bounds: horizontal left", () => {
		expect(() => {
			gameboard.placeShip([0, -1], 2, "horizontal");
		}).toThrow("start values are out of bounds");
	});

	test("ship out of bounds: horizontal right", () => {
		expect(() => {
			gameboard.placeShip([0, 10], 2, "horizontal");
		}).toThrow("start values are out of bounds");
	});

	test("ship out of bounds: vertical top", () => {
		expect(() => {
			gameboard.placeShip([-1, 0], 2, "vertical");
		}).toThrow("start values are out of bounds");
	});

	test("ship out of bounds: vertical bottom", () => {
		expect(() => {
			gameboard.placeShip([10, 0], 2, "vertical");
		}).toThrow("start values are out of bounds");
	});

	test("ship out of bounds: horizontal - last piece", () => {
		expect(() => {
			gameboard.placeShip([0, 9], 4, "horizontal");
		}).toThrow("start values are out of bounds");
	});

	test("ship out of bounds: vertical - last piece", () => {
		expect(() => {
			gameboard.placeShip([9, 0], 4, "vertical");
		}).toThrow("start values are out of bounds");
	});

	test("ships are too close - same position", () => {
		expect(() => {
			gameboard.placeShip([4, 4], 1, "horizontal");
			gameboard.placeShip([4, 4], 1, "horizontal");
		}).toThrow("invalid ship position");
	});

	test("ships are too close - left", () => {
		expect(() => {
			gameboard.placeShip([4, 4], 1, "horizontal");
			gameboard.placeShip([4, 3], 1, "horizontal");
		}).toThrow("invalid ship position");
	});

	test("ships are too close - right", () => {
		expect(() => {
			gameboard.placeShip([4, 4], 1, "horizontal");
			gameboard.placeShip([4, 5], 1, "horizontal");
		}).toThrow("invalid ship position");
	});

	test("ships are too close - top left", () => {
		expect(() => {
			gameboard.placeShip([4, 4], 1, "horizontal");
			gameboard.placeShip([3, 3], 1, "horizontal");
		}).toThrow("invalid ship position");
	});

	test("ships are too close - top", () => {
		expect(() => {
			gameboard.placeShip([4, 4], 1, "horizontal");
			gameboard.placeShip([3, 4], 1, "horizontal");
		}).toThrow("invalid ship position");
	});

	test("ships are too close - top right", () => {
		expect(() => {
			gameboard.placeShip([4, 4], 1, "horizontal");
			gameboard.placeShip([3, 5], 1, "horizontal");
		}).toThrow("invalid ship position");
	});

	test("ships are too close - bottom left", () => {
		expect(() => {
			gameboard.placeShip([4, 4], 1, "horizontal");
			gameboard.placeShip([5, 3], 1, "horizontal");
		}).toThrow("invalid ship position");
	});

	test("ships are too close - bottom", () => {
		expect(() => {
			gameboard.placeShip([4, 4], 1, "horizontal");
			gameboard.placeShip([5, 4], 1, "horizontal");
		}).toThrow("invalid ship position");
	});

	test("ships are too close - botton right", () => {
		expect(() => {
			gameboard.placeShip([4, 4], 1, "horizontal");
			gameboard.placeShip([5, 5], 1, "horizontal");
		}).toThrow("invalid ship position");
	});

	test("ship placed successfully - size 1", () => {
		const [shipPosition, directions] = gameboard.placeShip(
			[0, 0],
			0,
			"horizontal"
		);
		const coordinatesMatch =
			shipPosition[0][0][0] === 0 &&
			shipPosition[0][0][1] === 0 &&
			directions[0] === "horizontal"
				? true
				: false;
		expect(coordinatesMatch).toBe(true);
	});

	test("ship placed successfully - size 2", () => {
		const [shipPosition, directions] = gameboard.placeShip(
			[2, 0],
			4,
			"horizontal"
		);
		const coordinatesMatch =
			shipPosition[4][0][0] === 2 &&
			shipPosition[4][0][1] === 0 &&
			directions[4] === "horizontal"
				? true
				: false;
		expect(coordinatesMatch).toBe(true);
	});

	test("ship placed successfully - size 3", () => {
		const [shipPosition, directions] = gameboard.placeShip(
			[4, 0],
			7,
			"horizontal"
		);
		const coordinatesMatch =
			shipPosition[7][0][0] === 4 &&
			shipPosition[7][0][1] === 0 &&
			directions[7] === "horizontal"
				? true
				: false;
		expect(coordinatesMatch).toBe(true);
	});

	test("ship placed successfully - size 4", () => {
		const [shipPosition, directions] = gameboard.placeShip(
			[0, 9],
			9,
			"vertical"
		);
		const coordinatesMatch =
			shipPosition[9][0][0] === 0 &&
			shipPosition[9][0][1] === 9 &&
			directions[9] === "vertical"
				? true
				: false;
		expect(coordinatesMatch).toBe(true);
	});
});

// describe("receive attack", () => {
// 	test("receive attack: coordinate must be a number", () => {
// 		expect(() => gameboard.receiveAttack(null)).toThrow(
// 			"coordinate value must be a number"
// 		);
// 	});
// 	test("receive attack: negative coordinate value", () => {
// 		expect(() => gameboard.receiveAttack(-1)).toThrow(
// 			"coordinate value must be between 0 and 99, inclusive"
// 		);
// 	});
// 	test("receive attack: large coordinate value", () => {
// 		expect(() => gameboard.receiveAttack(100)).toThrow(
// 			"coordinate value must be between 0 and 99, inclusive"
// 		);
// 	});
// 	test("receive attack: miss", () => {
// 		expect(gameboard.receiveAttack(44)).toBe(false);
// 	});
// 	test("receive attack: hit", () => {
// 		expect(gameboard.receiveAttack(45)).toBe(true);
// 	});
// 	test("receive attack: hitting an already hit place", () => {
// 		expect(() => gameboard.receiveAttack(44)).toThrow(
// 			"cannot hit an already hit spot"
// 		);
// 	});
// 	test("receive attack: hitting an already hit place", () => {
// 		expect(() => gameboard.receiveAttack(45)).toThrow(
// 			"cannot hit an already hit spot"
// 		);
// 	});
// });
// describe("did all ships sink", () => {
// 	test("not all ships sunk", () => {
// 		expect(gameboard.didAllSink()).toBe(false);
// 	});
