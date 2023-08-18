import Ship from "../logic/ship";

describe("ship creation", () => {
	test("ship creation failure", () => {
		let invalidShip = Ship(0);
		expect(invalidShip.getShipLength()).toBe(0);
	});

	test("creates a ship", () => {
		let validShip = Ship(1);
		expect(validShip.getShipLength()).toBe(1);
	});
});

describe("is sunk?", () => {
	let validShip = Ship(1);
	validShip.hitShip();
	test("is sunk", () => {
		expect(validShip.isSunk()).toBe(true);
	});

	let largerShip = Ship(4);
	test("not sunk: 1/4 hit", () => {
		largerShip.hitShip();
		expect(largerShip.isSunk()).toBe(false);
	});
	test("not sunk: 2/4 hit", () => {
		largerShip.hitShip();
		expect(largerShip.isSunk()).toBe(false);
	});
	test("not sunk: 3/4 hit", () => {
		largerShip.hitShip();
		expect(largerShip.isSunk()).toBe(false);
	});
	test("not sunk: 4/4 hit", () => {
		largerShip.hitShip();
		expect(largerShip.isSunk()).toBe(true);
	});
});
