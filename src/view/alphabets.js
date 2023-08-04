export default () => {
	(() => {
		const alphaCoords = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
		const alphabets = document.getElementsByClassName("alphabets");

		[...alphabets].forEach((alphabet) => {
			alphaCoords.forEach((alphaCoord) => {
				const alphaText = document.createElement("p");

				alphaText.textContent = alphaCoord;
				alphabet.append(alphaText);
			});
		});
	})();
};
