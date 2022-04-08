export default () => {
	const playerHeading = document.getElementsByClassName("player-name");

	const setPlayerName = (name, index) => {
		playerHeading[index].textContent = name;
	};

	return { setPlayerName };
};
