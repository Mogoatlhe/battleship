import Player from "../logic/player";

let player1;
let player2;

beforeAll(() => {
	player1 = Player("player1");
	player2 = Player("player2");
});

describe("place ships", () => {
	test("invalid index value: not a number", () => {
		expect(() => player1.placeShip(null, 1, "horizontal")).toThrow(
			"index must be a number"
		);
	});

	test("invalid index value: index out of bounds (< 0)", () => {
		expect(() => {
			player1.placeShip(-1, 1, "horizontal");
		}).toThrow("index must be between 0 and 9, inclusive");
	});

	test("invalid index value: index out of bounds (> 9)", () => {
		expect(() => {
			player1.placeShip(10, 1, "horizontal");
		}).toThrow("index must be between 0 and 9, inclusive");
	});

	test("invalid 'starting' value: not a number", () => {
		expect(() => {
			player1.placeShip(0, "1", "horizontal");
		}).toThrow("'starting' value must be a number");
	});

	test("invalid 'starting' value: starting value out of range", () => {
		expect(() => {
			player1.placeShip(0, -1, "horizontal");
		}).toThrow("'starting' value must be between 0 and 99, inclusive");
	});

	test("invalid 'starting' value: starting value out of range", () => {
		expect(() => {
			player1.placeShip(0, 100, "horizontal");
		}).toThrow("'starting' value must be between 0 and 99, inclusive");
	});

	test("invalid 'direction' value: direction must be a string", () => {
		expect(() => {
			player1.placeShip(0, 5, null);
		}).toThrow("'direction' value must be a string");
	});

	test("invalid 'direction' value: direction value must be either 'horizontal' or 'vertical", () => {
		expect(() => {
			player1.placeShip(0, 5, "diagonal");
		}).toThrow("'direction' value must be either 'horizontal' or 'vertical'");
	});
});

describe("get player name", () => {
	test("get player 1 name", () => {
		expect(player1.getName()).toBe("player1");
	});

	test("get player 2 name", () => {
		expect(player2.getName()).toBe("player2");
	});
});

describe("receive attack", () => {
	test("receive attack: coordinate is not a number", () => {
		expect(() => player1.receiveAttack(null)).toThrow(
			"coordinate value must be a number"
		);
	});

	test("receive attack: coordinate is out of range", () => {
		expect(() => player1.receiveAttack(-1)).toThrow(
			"coordinate value must be between 0 and 99, inclusive"
		);
	});

	test("receive attack: coordinate is out of range", () => {
		expect(() => player1.receiveAttack(100)).toThrow(
			"coordinate value must be between 0 and 99, inclusive"
		);
	});
});

describe("randomise ship placement", () => {
	test("randomise ship placement", () => {
		expect(player1.randomiseShipPlacement());
	});
});