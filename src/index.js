import "./style/style.css";

import Player from "./logic/player";
import Alphabets from "./view/alphabets";
import PlayerHeading from "./view/playerHeading";
import Numbers from "./view/numbers";
import GridItem from "./view/gridItem";
import Yard from "./view/yard";
import Dragover from "./view/dragover";

const human = Player("human");
const computer = Player("computer");

const alphabets = Alphabets();
const numbers = Numbers();
const playerHeading = PlayerHeading();
const p1Grid = GridItem(0, computer, human);
const p2Grid = GridItem(1, human, computer);
const dragover = Dragover();

alphabets.appendAlphabets();
playerHeading.setPlayerName(human.getName(), 0);
playerHeading.setPlayerName(computer.getName(), 1);
numbers.appendNumbers();

p1Grid.appendGridItems(0);
p2Grid.appendGridItems(1);

try {
	computer.randomiseShipPlacement();
	const yard = Yard(computer.getShips());
	// p1Grid.placeShips();
	p2Grid.placeShips();
} catch (e) {
	console.log(e);
}
