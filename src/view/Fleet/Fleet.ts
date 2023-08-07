import FleetHeader from "./FleetHeader";

const Fleet = (fleetName: string) => {
	const header = FleetHeader(fleetName);
	const fleet = document.createElement("div");

	fleet.setAttribute("id", fleetName);
	fleet.classList.add("fleet");

	fleet.append(header.getFleetHeader());

	const getFleet = () => fleet;

	return { getFleet };
};

export default Fleet;
