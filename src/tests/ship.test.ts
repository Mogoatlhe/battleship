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

describe("ship coordinates", () => {
	let validShip = Ship(1);
	test("set incorrect coordinates: negative coordinates", () => {
		expect(validShip.setCoordinates(-1, "horizontal")).toBe(
			"error: negative coordinates given"
		);
	});

	test("set incorrect coordinates: large coordinate position", () => {
		expect(validShip.setCoordinates(100, "horizontal")).toBe(
			"error: coordinates position cannot be greater than grid size"
		);
	});

	test("set incorrect coordinates: incorrect direction", () => {
		expect(validShip.setCoordinates(99, "diagonal")).toBe(
			"error: direction can only be (h) horizontal or (v) vertical"
		);
	});

	test("valid coordinates: v (vertical)", () => {
		expect(validShip.setCoordinates(99, "vertical")).toBe(true);
	});

	test("valid coordinates: h (horizontal)", () => {
		expect(validShip.setCoordinates(99, "horizontal")).toBe(true);
	});

	test("get cordinates", () => {
		let coordinates = {
			coordinate: 99,
			direction: "horizontal",
		};
		expect(validShip.getCoordinates()).toStrictEqual(coordinates);
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
