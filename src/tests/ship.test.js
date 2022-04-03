import Ship from "../logic/ship";

let validShip;
let invalidShip;
let largerShip;
let coordinates;

beforeAll(() => {
	invalidShip = Ship(0);
	validShip = Ship(1);
	largerShip = Ship(4);
	largerShip.hitShip(0);
	coordinates = {
		coordinate: 99,
		direction: "horizontal",
	};
});

describe("ship creation", () => {
	test("ship creation failure", () => {
		expect(invalidShip.getShipLength()).toBe(0);
	});

	test("creates a ship", () => {
		expect(validShip.getShipLength()).toBe(1);
	});
});

describe("ship coordinates", () => {
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
		expect(validShip.getCoordinates()).toStrictEqual(coordinates);
	});
});

describe("hitting a ship", () => {
	test("attempting to hit a ship at incorrect position", () => {
		expect(validShip.hitShip(2)).toBe("miss: incorrect ship position");
	});

	test("hitting a ship", () => {
		expect(validShip.hitShip(0)).toBe("x");
	});

	test("hitting a ship where it has been hit", () => {
		expect(validShip.hitShip(0)).toBe("cannot hit the same position twice");
	});
});

describe("is sunk?", () => {
	test("is sunk", () => {
		expect(validShip.isSunk()).toBe(true);
	});

	test("not sunk", () => {
		expect(largerShip.isSunk()).toBe(false);
	});
});
