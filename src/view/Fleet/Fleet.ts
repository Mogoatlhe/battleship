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

	fleet.append(header.getFleetHeader());
	gridWithLabels.append(grid.getContainer());
	gridWithLabels.querySelector(".grid").prepend(alphabets.getLabels());
	fleet.append(gridWithLabels);

	const getFleet = () => fleet;

	const manageFleet = () => {
		grid.getGridItem().randomiseShipPlacement();
		if (fleetName !== "human") return;

		const boardOptions = BoardOptions(() => grid);
		fleet.append(boardOptions.getBoardOptions());
	};

	return { getFleet, manageFleet };
};

export default Fleet;
