export default () => {
	document.addEventListener("dragover", (e) => {
		e.preventDefault();
		const dragging = document.querySelector(".dragging");
		const length = dragging.childNodes.length - 1;
		const dragChildIndex = [...dragging.childNodes].findIndex((dragChild) =>
			dragChild.classList.contains("clicked")
		);
		const draggingParent = dragging.parentNode;
		const isGridContainer = draggingParent.classList.contains("grid-container");

		const dataID = e.target.getAttribute("data-id");
		if (!isGridContainer && (dataID === null || dataID === "")) {
			[...dragging.childNodes].forEach((c) => c.removeAttribute("data-id"));
			return;
		}

		const id = dataID;

		const starting = id - dragChildIndex;
		const dragLength = starting + length;

		if (
			(starting.toString().length === 2 &&
				starting.toString()[0] === dragLength.toString()[0]) ||
			(starting.toString().length === 1 && dragLength < 10)
		) {
			[...dragging.childNodes].forEach((dChild, i) => {
				// eslint-disable-next-line no-param-reassign
				dChild.dataset.id = i + starting;
			});
		}
	});
};
