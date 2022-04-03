import Ship from "../logic/ship";

let validShip;
let invalidShip;
let largerShip;

beforeAll(() => {
	invalidShip = Ship(0);
	validShip = Ship(1);
	largerShip = Ship(4);
	largerShip.hitShip(0);
});

describe("ship creation", () => {
	test("ship creation failure", () => {
		expect(invalidShip.getShip().length).toBe(0);
	});

	test("creates a ship", () => {
		expect(validShip.getShip().length).toBe(1);
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
