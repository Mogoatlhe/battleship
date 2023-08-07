const Label = (coords: string[], type: string) => {
	const labels = document.createElement("div");
	const containers = coords.map((el) => {
		const container = document.createElement("div");
		container.textContent = el;
		container.classList.add(`${type}-container`);

		return container;
	});

	labels.classList.add(`${type}s`);
	labels.append(...containers);
	const getAlphabets = () => labels;

	return { getAlphaContainers: getAlphabets };
};

export default Label;
