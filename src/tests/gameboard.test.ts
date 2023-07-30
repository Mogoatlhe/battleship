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
		const shipPositions = gameboard.placeShip([0, 0], 0, "horizontal");
		const row = shipPositions[0][shipPositions[0].length - 1][0];
		const col = shipPositions[0][shipPositions[0].length - 1][1];
		expect(row).toBe(0);
		expect(col).toBe(0);
	});

	test("ship placed successfully - size 2", () => {
		const shipPositions = gameboard.placeShip([2, 0], 4, "horizontal");
		const row = shipPositions[4][shipPositions[4].length - 1][0];
		const col = shipPositions[4][shipPositions[4].length - 1][1];
		expect(row).toBe(2);
		expect(col).toBe(1);
	});

	test("ship placed successfully - size 3", () => {
		const shipPositions = gameboard.placeShip([4, 0], 7, "horizontal");
		const row = shipPositions[7][shipPositions[7].length - 1][0];
		const col = shipPositions[7][shipPositions[7].length - 1][1];
		expect(row).toBe(4);
		expect(col).toBe(2);
	});

	test("ship placed successfully - size 4", () => {
		const shipPositions = gameboard.placeShip([0, 9], 9, "vertical");
		const row = shipPositions[9][shipPositions[9].length - 1][0];
		const col = shipPositions[9][shipPositions[9].length - 1][1];
		expect(row).toBe(3);
		expect(col).toBe(9);
	});
});

describe("receive attack", () => {
	const gameboard = Gameboard();

	test("receive attack: negative coordinate row value", () => {
		expect(() => gameboard.receiveAttack({ row: -1, col: 0 })).toThrow(
			"coordinates are out of bounds"
		);
	});

	test("receive attack: negative coordinate col value", () => {
		expect(() => gameboard.receiveAttack({ row: 0, col: -1 })).toThrow(
			"coordinates are out of bounds"
		);
	});

	test("receive attack: large cordinate row value", () => {
		expect(() => gameboard.receiveAttack({ row: 10, col: 0 })).toThrow(
			"coordinates are out of bounds"
		);
	});

	test("receive attack: large cordinate col value", () => {
		expect(() => gameboard.receiveAttack({ row: 0, col: 100 })).toThrow(
			"coordinates are out of bounds"
		);
	});

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
});
