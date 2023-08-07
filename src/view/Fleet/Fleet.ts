import Label from "./GridLabel/labels";
import FleetHeader from "./FleetHeader";

const Fleet = (fleetName: string) => {
	const header = FleetHeader(fleetName);
	const fleet = document.createElement("div");
	const numCoords = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
	const alphabetCoords = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
	const alphabets = Label(alphabetCoords, "alphabet");
	const numbers = Label(numCoords, "number");

	fleet.setAttribute("id", fleetName);
	fleet.classList.add("fleet");

	fleet.append(header.getFleetHeader());
	fleet.append(alphabets.getAlphaContainers());

	const getFleet = () => fleet;

	return { getFleet };
};

export default Fleet;
