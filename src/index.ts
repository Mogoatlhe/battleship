import "./style/style.css";

import Player from "./logic/player";
import Numbers from "./view/numbers";
import GridItem from "./view/gridItem";
import Yard from "./view/yard";
import Dragover from "./view/dragover";
import ViewIndex from "./view";

const viewIndex = ViewIndex();
const human = Player("human");
const computer = Player("computer");

Numbers();

const p1Grid = GridItem(0, () => human);
const p2Grid = GridItem(1, () => computer);
Dragover();

p1Grid.appendGridItems(0);
p2Grid.appendGridItems(1);

try {
	p1Grid.randomiseShipPlacement();
	p2Grid.randomiseShipPlacement();
	// console.log(computer.randomiseShipPlacement());
	// Yard(computer.getShips());
	// p1Grid.placeShips();
	// p2Grid.placeShips();
} catch (e) {
	console.log(e);
}
