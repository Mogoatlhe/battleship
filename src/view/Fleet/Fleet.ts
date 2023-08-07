import Alphabets from "./Alphabets/alphabets";
import FleetHeader from "./FleetHeader";

const Fleet = (fleetName: string) => {
	const alphabets = Alphabets();
	const header = FleetHeader(fleetName);
	const fleet = document.createElement("div");

	fleet.setAttribute("id", fleetName);
	fleet.classList.add("fleet");

	fleet.append(header.getFleetHeader());
	fleet.append(alphabets.getAlphaContainers());

	const getFleet = () => fleet;

	return { getFleet };
};

export default Fleet;
