const Header = () => {
	const gameHeader = document.createElement("div");
	const gameName = document.createElement("p");
	const gameRepoLink = document.createElement("a");
	const icon = document.createElement("i");

	gameHeader.setAttribute("id", "game-header");
	gameName.setAttribute("id", "game-name");
	gameRepoLink.setAttribute("href", "https://github.com/mogoatlhe/battleship");
	gameRepoLink.setAttribute("target", "_blank");
	icon.classList.add("fa", "fa-github");
	gameName.textContent = "Battleship";

	gameRepoLink.append(icon);
	gameHeader.append(gameName);
	gameHeader.append(gameRepoLink);

	const getHeader = () => gameHeader;

	return { getHeader };
};

export default Header;
