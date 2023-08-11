import Label from "./GridLabel/labels";
import FleetHeader from "./FleetHeader";
import Grid from "./Grid";
import Player from "../../logic/player";
import BoardOptions from "../boardOptions";

const Fleet = (fleetName: string) => {
	const player = Player(fleetName);
	const header = FleetHeader(fleetName);
	const fleet = document.createElement("div");
	const gridWithLabels = document.createElement("div");
	const alphabetCoords = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
	const alphabets = Label(alphabetCoords, "alphabet");
	const grid = Grid(() => player);

	fleet.setAttribute("id", fleetName);
	fleet.classList.add("fleet");

	gridWithLabels.classList.add("grid-with-labels");

	const shipTypes = document.createElement("div");
	shipTypes.classList.add("ship-types", "hidden");
	for (let i = 0; i < 4; i++) {
		let length, count;
		const shipType = document.createElement("div");

		if (i < 1) {
			length = 4;
			count = 1;
		} else if (i < 2) {
			length = 3;
			count = 2;
		} else if (i < 3) {
			length = 2;
			count = 3;
		} else {
			length = 1;
			count = 4;
		}

		shipType.append(...attachShips(count, length));
		shipType.classList.add("port-line", `ship-type-length-${length}`);

		shipTypes.appendChild(shipType);
	}

	function attachShips(count: number, length: number) {
		const ships: Node[] = [];
		const width = `${10 * length}px`;

		for (let i = 0; i < count; i++) {
			const ship = document.createElement("div");
			ship.classList.add("ship");
			ship.style.width = width;
			ship.style.height = "10px";
			ships.push(ship);
		}

		return ships;
	}

	fleet.append(header.getFleetHeader());
	gridWithLabels.append(grid.getContainer());
	gridWithLabels.querySelector(".grid").prepend(alphabets.getLabels());
	fleet.append(gridWithLabels);

	const getFleet = () => fleet;

	const manageFleet = () => {
		grid.getGridItem().randomiseShipPlacement();
		gridWithLabels.append(shipTypes);
		if (fleetName !== "human") {
			fleet.classList.add("hidden");
			return;
		}

		const boardOptions = BoardOptions(() => grid);
		fleet.append(boardOptions.getBoardOptions());
	};

	return { getFleet, manageFleet };
};

export default Fleet;
