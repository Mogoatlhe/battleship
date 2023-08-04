export default () => {
	(() => {
		const numCoords = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		const numbers = document.getElementsByClassName("numbers");

		[...numbers].forEach((num) => {
			numCoords.forEach((numCoord) => {
				const numText = document.createElement("p");

				numText.textContent = numCoord;
				num.append(numText);
			});
		});
	})();
};
