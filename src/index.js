import "./style/style.css";

import Player from "./logic/player";
import Alphabets from "./view/alphabets";
import PlayerHeading from "./view/playerHeading";
import Numbers from "./view/numbers";
import GridItem from "./view/gridItem";

const human = Player("human");
const computer = Player("computer");

const alphabets = Alphabets();
const numbers = Numbers();
const playerHeading = PlayerHeading();
// const p1Grid = GridItem();
const p2grid = GridItem(0, human, computer);

alphabets.appendAlphabets();
playerHeading.setPlayerName(human.getName(), 0);
playerHeading.setPlayerName(computer.getName(), 1);
numbers.appendNumbers();
p2grid.appendGridItems();

try {
	computer.randomiseShipPlacement();
	p2grid.placeShips();
} catch (e) {
	console.log(e);
}
