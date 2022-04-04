import Gameboard from "../logic/gameboard";

let gameboard;

beforeAll(() => {
	gameboard = Gameboard();
	gameboard.placeShip(0, 45, "horizontal");
});

describe("place ships", () => {
	test("invalid index value: not a number", () => {
		expect(() => gameboard.placeShip(null, 1, "horizontal")).toThrow(
			"index must be a number"
		);
	});

	test("invalid index value: index out of bounds (< 0)", () => {
		expect(() => {
			gameboard.placeShip(-1, 1, "horizontal");
		}).toThrow("index must be between 0 and 9, inclusive");
	});

	test("invalid index value: index out of bounds (> 9)", () => {
		expect(() => {
			gameboard.placeShip(10, 1, "horizontal");
		}).toThrow("index must be between 0 and 9, inclusive");
	});

	test("invalid 'starting' value: not a number", () => {
		expect(() => {
			gameboard.placeShip(0, "1", "horizontal");
		}).toThrow("'starting' value must be a number");
	});

	test("invalid 'starting' value: starting value out of range", () => {
		expect(() => {
			gameboard.placeShip(0, -1, "horizontal");
		}).toThrow("'starting' value must be between 0 and 99, inclusive");
	});

	test("invalid 'starting' value: starting value out of range", () => {
		expect(() => {
			gameboard.placeShip(0, 100, "horizontal");
		}).toThrow("'starting' value must be between 0 and 99, inclusive");
	});

	test("invalid 'direction' value: direction must be a string", () => {
		expect(() => {
			gameboard.placeShip(0, 5, null);
		}).toThrow("'direction' value must be a string");
	});

	test("invalid 'direction' value: direction value must be either 'horizontal' or 'vertical", () => {
		expect(() => {
			gameboard.placeShip(0, 5, "diagonal");
		}).toThrow("'direction' value must be either 'horizontal' or 'vertical'");
	});

	test("ship out of bounds: horizontal", () => {
		expect(() => {
			gameboard.placeShip(4, 9, "horizontal");
		}).toThrow("ship is out of bounds");
	});

	test("ship out of bounds: vertical", () => {
		expect(() => {
			gameboard.placeShip(4, 90, "vertical");
		}).toThrow("ship is out of bounds");
	});

	test("ship are too close", () => {
		expect(() => {
			gameboard.placeShip(0, 45, "horizontal");
		}).toThrow("too close to another ship");
	});

	test("ship are too close", () => {
		expect(() => {
			gameboard.placeShip(0, 34, "horizontal");
		}).toThrow("too close to another ship");
	});

	test("ship are too close", () => {
		expect(() => {
			gameboard.placeShip(0, 35, "horizontal");
		}).toThrow("too close to another ship");
	});

	test("ship are too close", () => {
		expect(() => {
			gameboard.placeShip(0, 36, "horizontal");
		}).toThrow("too close to another ship");
	});

	test("ship are too close", () => {
		expect(() => {
			gameboard.placeShip(0, 44, "horizontal");
		}).toThrow("too close to another ship");
	});

	test("ship are too close", () => {
		expect(() => {
			gameboard.placeShip(0, 45, "horizontal");
		}).toThrow("too close to another ship");
	});

	test("ship are too close", () => {
		expect(() => {
			gameboard.placeShip(0, 46, "horizontal");
		}).toThrow("too close to another ship");
	});

	test("ship are too close", () => {
		expect(() => {
			gameboard.placeShip(0, 54, "horizontal");
		}).toThrow("too close to another ship");
	});

	test("ship are too close", () => {
		expect(() => {
			gameboard.placeShip(0, 55, "horizontal");
		}).toThrow("too close to another ship");
	});

	test("ship are too close", () => {
		expect(() => {
			gameboard.placeShip(0, 56, "horizontal");
		}).toThrow("too close to another ship");
	});
});

describe("receive attack", () => {
	test("receive attack: coordinate must be a number", () => {
		expect(() => gameboard.receiveAttack(null)).toThrow(
			"coordinate value must be a number"
		);
	});

	test("receive attack: negative coordinate value", () => {
		expect(() => gameboard.receiveAttack(-1)).toThrow(
			"coordinate value must be between 0 and 99, inclusive"
		);
	});

	test("receive attack: large coordinate value", () => {
		expect(() => gameboard.receiveAttack(100)).toThrow(
			"coordinate value must be between 0 and 99, inclusive"
		);
	});

	test("receive attack: miss", () => {
		expect(gameboard.receiveAttack(44)).toBe(false);
	});

	test("receive attack: hit", () => {
		expect(gameboard.receiveAttack(45)).toBe(true);
	});

	test("receive attack: hitting an already hit place", () => {
		expect(() => gameboard.receiveAttack(44)).toThrow(
			"cannot hit an already hit spot"
		);
	});

	test("receive attack: hitting an already hit place", () => {
		expect(() => gameboard.receiveAttack(45)).toThrow(
			"cannot hit an already hit spot"
		);
	});
});

describe("did all ships sink", () => {
	test("not all ships sunk", () => {
		expect(gameboard.didAllSink()).toBe(false);
	});
});
