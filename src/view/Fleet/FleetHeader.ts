const FleetHeader = (name: string) => {
	const headingContainer = document.createElement("div");
	const playerName = document.createElement("p");

	headingContainer.classList.add("player-heading-div");
	playerName.classList.add("player-name");
	playerName.textContent = name;

	headingContainer.append(playerName);

	const getFleetHeader = () => headingContainer;

	return { getFleetHeader };
};

export default FleetHeader;
