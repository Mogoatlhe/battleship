import Gameboard from "../logic/gameboard";
import Ship from "../logic/ship";

let gameboard;
let ship;

beforeAll(() => {
	gameboard = Gameboard();
	ship = Ship(2);
});

describe("place ships", () => {
	test("invalid ship value: null", () => {
		expect(() => gameboard.placeShip(null, 1, "horizontal")).toThrow(
			"ship object passed is not of type Ship"
		);
	});

	test("invalid ship value: undefined", () => {
		expect(() => {
			gameboard.placeShip(undefined, 1, "horizontal");
		}).toThrow("ship object passed is not of type Ship");
	});

	test("invalid ship value: random data type", () => {
		expect(() => {
			gameboard.placeShip("random string", 1, "horizontal");
		}).toThrow("ship object passed is not of type Ship");
	});

	test("invalid 'starting' value: not a number", () => {
		expect(() => {
			gameboard.placeShip(ship, "1", "horizontal");
		}).toThrow("'starting' value must be a number");
	});
});
