import Player from "../logic/player";
import Grid from "./Fleet/Grid";

const ShowComputer = () => {
	const playBtn = document.createElement("button");

	playBtn.classList.add("play");
	playBtn.textContent = "Play";

	playBtn.addEventListener("click", showComputer);

	function showComputer(e: MouseEvent) {
		const shipTypes = document.querySelectorAll(".ship-types");
		shipTypes[0].classList.remove("hidden");
		shipTypes[1].classList.remove("hidden");
		const target = e.target as HTMLButtonElement;
		const targetParent = target.parentElement;
		const computer = document.querySelector("#computer");

		targetParent.classList.add("hidden");
		computer.classList.remove("hidden");
	}

	const getBtn = () => playBtn;

	return { getBtn };
};

export default ShowComputer;
