import Label from "./GridLabel/labels";
import FleetHeader from "./FleetHeader";
import Grid from "./Grid";
import Player from "../../logic/player";
import BoardOptions from "../boardOptions";

const Fleet = (fleetName: string) => {
	const player = Player(fleetName);
	const header = FleetHeader(fleetName);
	const fleet = document.createElement("div");
	const alphabetCoords = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
	const alphabets = Label(alphabetCoords, "alphabet");
	const grid = Grid(() => player);

	fleet.setAttribute("id", fleetName);
	fleet.classList.add("fleet");

	fleet.append(header.getFleetHeader());
	fleet.append(alphabets.getLabels());
	fleet.append(grid.getContainer());

	const getFleet = () => fleet;

	const manageFleet = () => {
		if (fleetName !== "human") return;

		const boardOptions = BoardOptions();
		fleet.append(boardOptions.getBoardOptions());
	};

	return { getFleet, manageFleet };
};

export default Fleet;
