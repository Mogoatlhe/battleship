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
	const getLabels = () => labels;

	return { getLabels };
};

export default Label;
