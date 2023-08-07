import Label from "./GridLabel/labels";
import FleetHeader from "./FleetHeader";
import Grid from "./Grid";

const Fleet = (fleetName: string) => {
	const header = FleetHeader(fleetName);
	const fleet = document.createElement("div");
	const alphabetCoords = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
	const alphabets = Label(alphabetCoords, "alphabet");
	const grid = Grid();

	fleet.setAttribute("id", fleetName);
	fleet.classList.add("fleet");

	fleet.append(header.getFleetHeader());
	fleet.append(alphabets.getLabels());
	fleet.append(grid.getContainer());

	const getFleet = () => fleet;

	return { getFleet };
};

export default Fleet;
