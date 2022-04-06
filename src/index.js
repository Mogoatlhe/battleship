import "./style/style.css";

import Player from "./logic/player";
import Alphabets from "./view/alphabets";

const human = Player("human");
const computer = Player("computer");
const alphabets = Alphabets();

alphabets.appendAlphabets();

try {
	computer.randomiseShipPlacement();
} catch (e) {
	computer.randomiseShipPlacement();
}
