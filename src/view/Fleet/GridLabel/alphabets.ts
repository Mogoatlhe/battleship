const Alphabets = () => {
	const alphabets = document.createElement("div");
	const alphabetCoords = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
	const alphaContainers = alphabetCoords.map((alpha) => {
		const alphaContainer = document.createElement("div");
		alphaContainer.textContent = alpha;
		alphaContainer.classList.add("alphabet-container");

		return alphaContainer;
	});

	alphabets.classList.add("alphabets");
	alphabets.append(...alphaContainers);
	const getAlphabets = () => alphabets;

	return { getAlphaContainers: getAlphabets };
};

export default Alphabets;
