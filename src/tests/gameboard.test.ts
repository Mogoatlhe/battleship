import Gameboard from "../logic/gameboard";

beforeAll(() => {});

describe("place ships", () => {
	const gameboard = Gameboard();

	test("invalid 'direction' value: direction value must be either 'horizontal' or 'vertical", () => {
		expect(() => {
			const coords = { row: 0, col: 0 };
			gameboard.placeShip(coords, 1, "diagonal");
		}).toThrow(`"direction" value must be either "horizontal" or "vertical"`);
	});

	test("ship out of bounds: horizontal left", () => {
		expect(() => {
			const coords = { row: 0, col: -1 };
			gameboard.placeShip(coords, 2, "horizontal");
		}).toThrow("start values are out of bounds");
	});

	test("ship out of bounds: horizontal right", () => {
		expect(() => {
			const coords = { row: 0, col: 10 };
			gameboard.placeShip(coords, 2, "horizontal");
		}).toThrow("start values are out of bounds");
	});

	test("ship out of bounds: vertical top", () => {
		expect(() => {
			const coords = { row: -1, col: 0 };
			gameboard.placeShip(coords, 2, "vertical");
		}).toThrow("start values are out of bounds");
	});

	test("ship out of bounds: vertical bottom", () => {
		expect(() => {
			const coords = { row: 10, col: 0 };
			gameboard.placeShip(coords, 2, "vertical");
		}).toThrow("start values are out of bounds");
	});

	test("ship out of bounds: horizontal - last piece", () => {
		expect(() => {
			const coords = { row: 0, col: 9 };
			gameboard.placeShip(coords, 4, "horizontal");
		}).toThrow("start values are out of bounds");
	});

	test("ship out of bounds: vertical - last piece", () => {
		expect(() => {
			const coords = { row: 9, col: 0 };
			gameboard.placeShip(coords, 4, "vertical");
		}).toThrow("start values are out of bounds");
	});

	test("ships are too close - same position", () => {
		expect(() => {
			gameboard.placeShip({ row: 4, col: 4 }, 1, "horizontal");
			gameboard.placeShip({ row: 4, col: 4 }, 1, "horizontal");
		}).toThrow("invalid ship position");
	});

	test("ships are too close - left", () => {
		expect(() => {
			const coords = { row: 4, col: 3 };
			gameboard.placeShip(coords, 1, "horizontal");
		}).toThrow("invalid ship position");
	});

	test("ships are too close - right", () => {
		expect(() => {
			const coords = { row: 4, col: 5 };
			gameboard.placeShip(coords, 1, "horizontal");
		}).toThrow("invalid ship position");
	});

	test("ships are too close - top left", () => {
		expect(() => {
			const coords = { row: 3, col: 3 };
			gameboard.placeShip(coords, 1, "horizontal");
		}).toThrow("invalid ship position");
	});

	test("ships are too close - top", () => {
		expect(() => {
			const coords = { row: 3, col: 4 };
			gameboard.placeShip(coords, 1, "horizontal");
		}).toThrow("invalid ship position");
	});

	test("ships are too close - top right", () => {
		expect(() => {
			const coords = { row: 3, col: 5 };
			gameboard.placeShip(coords, 1, "horizontal");
		}).toThrow("invalid ship position");
	});

	test("ships are too close - bottom left", () => {
		expect(() => {
			const coords = { row: 5, col: 3 };
			gameboard.placeShip(coords, 1, "horizontal");
		}).toThrow("invalid ship position");
	});

	test("ships are too close - bottom", () => {
		expect(() => {
			const coords = { row: 5, col: 4 };
			gameboard.placeShip(coords, 1, "horizontal");
		}).toThrow("invalid ship position");
	});

	test("ships are too close - botton right", () => {
		expect(() => {
			const coords = { row: 5, col: 5 };
			gameboard.placeShip(coords, 1, "horizontal");
		}).toThrow("invalid ship position");
	});

	test("ship placed successfully - size 1", () => {
		const coords = { row: 0, col: 0 };
		const shipPositions = gameboard.placeShip(coords, 0, "horizontal");
		const row = shipPositions[0][shipPositions[0].length - 1].row;
		const col = shipPositions[0][shipPositions[0].length - 1].col;
		expect(row).toBe(0);
		expect(col).toBe(0);
	});

	test("ship placed successfully - size 2", () => {
		const coords = { row: 2, col: 0 };
		const shipPositions = gameboard.placeShip(coords, 4, "horizontal");
		const row = shipPositions[4][shipPositions[4].length - 1].row;
		const col = shipPositions[4][shipPositions[4].length - 1].col;
		expect(row).toBe(2);
		expect(col).toBe(1);
	});

	test("ship placed successfully - size 3", () => {
		const coords = { row: 4, col: 0 };
		const shipPositions = gameboard.placeShip(coords, 7, "horizontal");
		const row = shipPositions[7][shipPositions[7].length - 1].row;
		const col = shipPositions[7][shipPositions[7].length - 1].col;
		expect(row).toBe(4);
		expect(col).toBe(2);
	});

	test("ship placed successfully - size 4", () => {
		const coords = { row: 0, col: 9 };
		const shipPositions = gameboard.placeShip(coords, 9, "vertical");
		const row = shipPositions[9][shipPositions[9].length - 1].row;
		const col = shipPositions[9][shipPositions[9].length - 1].col;
		expect(row).toBe(3);
		expect(col).toBe(9);
	});
});

describe("receive attack", () => {
	const gameboard = Gameboard();
	gameboard.placeShip({ row: 0, col: 0 }, 7, "horizontal");

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
		expect(() => gameboard.receiveAttack({ row: 0, col: 10 })).toThrow(
			"coordinates are out of bounds"
		);
	});

	test("receive attack: miss", () => {
		const coords = { row: 0, col: 3 };
		expect(gameboard.receiveAttack(coords)).toBe(false);
	});

	test("receive attack: hit", () => {
		const coords = { row: 0, col: 0 };
		expect(gameboard.receiveAttack(coords)).toBe(true);
	});

	test("receive attack: attack an already attacked place - hit", () => {
		const coords = { row: 0, col: 0 };
		expect(() => gameboard.receiveAttack(coords)).toThrow(
			"cannot hit an already hit spot"
		);
	});

	test("receive attack: attack an already attacked place - hit", () => {
		const coords = { row: 0, col: 3 };
		expect(() => gameboard.receiveAttack(coords)).toThrow(
			"cannot hit an already hit spot"
		);
	});
});

// describe("did all ships sink", () => {
// 	const gameboard = Gameboard();
// 	gameboard.placeShip({ row: 0, col: 9 }, 0, "horizontal");
// 	gameboard.placeShip({ row: 3, col: 9 }, 1, "horizontal");
// 	gameboard.placeShip({ row: 6, col: 7 }, 2, "horizontal");
// 	gameboard.placeShip({ row: 9, col: 8 }, 3, "horizontal");
// 	gameboard.placeShip({ row: 0, col: 6 }, 4, "horizontal");
// 	gameboard.placeShip({ row: 3, col: 1 }, 5, "horizontal");
// 	gameboard.placeShip({ row: 5, col: 2 }, 6, "vertical");
// 	gameboard.placeShip({ row: 0, col: 0 }, 7, "horizontal");
// 	gameboard.placeShip({ row: 5, col: 5 }, 8, "vertical");
// 	gameboard.placeShip({ row: 8, col: 0 }, 9, "horizontal");
// 		test("not all ships sunk", () => {
// 			expect(gameboard.didAllSink()).toBe(false);});
// });
