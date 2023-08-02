import Player from "../logic/player";

// beforeAll(() => {
// });

describe("place ships", () => {
	const player1 = Player("player1");
	const player2 = Player("player2");
	// player2.placeShip(0, 0, "horizontal");
	// player2.placeShip(1, 29, "horizontal");

	test("invalid coords values: row out of bounds (< 0)", () => {
		const coords = { row: -1, col: 0 };
		expect(player1.placeShip(coords, 1, "horizontal")).toBe(false);
	});

	test("invalid coords values: col out of bounds (< 0)", () => {
		const coords = { row: 0, col: -1 };
		expect(player1.placeShip(coords, 1, "horizontal")).toBe(false);
	});

	test("invalid coords values: row out of bounds (> 9)", () => {
		const coords = { row: 10, col: 0 };
		expect(player1.placeShip(coords, 1, "horizontal")).toBe(false);
	});

	test("invalid coords values: col out of bounds (> 9)", () => {
		const coords = { row: 0, col: 10 };
		expect(player1.placeShip(coords, 1, "horizontal")).toBe(false);
	});

	test("invalid direction value", () => {
		const coords = { row: 0, col: 10 };
		expect(player1.placeShip(coords, 1, "horizonta")).toBe(false);
	});

	// 	test("invalid 'starting' value: starting value out of range", () => {
	// 		expect(() => {
	// 			player1.placeShip(0, -1, "horizontal");
	// 		}).toThrow("'starting' value must be between 0 and 99, inclusive");
	// 	});
	// 	test("invalid 'starting' value: starting value out of range", () => {
	// 		expect(() => {
	// 			player1.placeShip(0, 100, "horizontal");
	// 		}).toThrow("'starting' value must be between 0 and 99, inclusive");
	// 	});
	// 	test("invalid 'direction' value: direction must be a string", () => {
	// 		expect(() => {
	// 			player1.placeShip(0, 5, null);
	// 		}).toThrow("'direction' value must be a string");
	// 	});
	// 	test("invalid 'direction' value: direction value must be either 'horizontal' or 'vertical", () => {
	// 		expect(() => {
	// 			player1.placeShip(0, 5, "diagonal");
	// 		}).toThrow("'direction' value must be either 'horizontal' or 'vertical'");
	// 	});
});

// describe("get player name", () => {
// 	test("get player 1 name", () => {
// 		expect(player1.getName()).toBe("player1");
// 	});

// 	test("get player 2 name", () => {
// 		expect(player2.getName()).toBe("player2");
// 	});
// });

// describe("receive attack", () => {
// 	test("receive attack: coordinate is not a number", () => {
// 		expect(() => player1.receiveAttack(null)).toThrow(
// 			"coordinate value must be a number"
// 		);
// 	});

// 	test("receive attack: coordinate is out of range", () => {
// 		expect(() => player1.receiveAttack(-1)).toThrow(
// 			"coordinate value must be between 0 and 99, inclusive"
// 		);
// 	});

// 	test("receive attack: coordinate is out of range", () => {
// 		expect(() => player1.receiveAttack(100)).toThrow(
// 			"coordinate value must be between 0 and 99, inclusive"
// 		);
// 	});

// 	test("receive attack: miss", () => {
// 		expect(player2.receiveAttack(98)).toBe(false);
// 	});

// 	test("receive attack: hit", () => {
// 		expect(player2.receiveAttack(29)).toBe(true);
// 	});
// });

// describe("attack", () => {
// 	test("attack: coordinate is not a number", () => {
// 		expect(() => player1.attack(player2, null)).toThrow(
// 			"coordinate value must be a number"
// 		);
// 	});

// 	test("attack: coordinate is out of range", () => {
// 		expect(() => player1.attack(player2, -1)).toThrow(
// 			"coordinate value must be between 0 and 99, inclusive"
// 		);
// 	});

// 	test("attack: coordinate is out of range", () => {
// 		expect(() => player1.attack(player2, 100)).toThrow(
// 			"coordinate value must be between 0 and 99, inclusive"
// 		);
// 	});

// 	test("attack: enemy is not an object", () => {
// 		expect(() => player1.attack(null, 99)).toThrow(
// 			"enemy value must be of type 'object'"
// 		);
// 	});

// 	test("attack: enemy is not an object", () => {
// 		expect(() => player1.attack(undefined, 99)).toThrow(
// 			"enemy value must be of type 'object'"
// 		);
// 	});

// 	test("attack: enemy is not an object", () => {
// 		expect(() => player1.attack({}, 99)).toThrow(
// 			"enemy must be an object of type 'Player'"
// 		);
// 	});

// 	test("attack: miss an enemy", () => {
// 		expect(player1.attack(player2, 99)).toBe(false);
// 	});

// 	test("attack: miss an enemy", () => {
// 		expect(player1.attack(player2, 0)).toBe(true);
// 	});
// });

// describe("randomise ship placement", () => {
// 	test("randomise ship placement", () => {
// 		expect(player1.randomiseShipPlacement());
// 	});
// });
