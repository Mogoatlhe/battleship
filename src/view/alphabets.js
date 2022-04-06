export default () => {
	const appendAlphabets = () => {
		const alphaCoords = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
		const alphabets = document.getElementsByClassName("alphabets");

		[...alphabets].forEach((alphabet) => {
			alphaCoords.forEach((alphaCoord) => {
				const alphaDiv = document.createElement("div");
				const alphaText = document.createElement("p");

				alphaText.textContent = alphaCoord;
				alphaDiv.append(alphaText);
				alphabet.append(alphaDiv);
			});
		});
	};

	return { appendAlphabets };
};
