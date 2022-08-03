export default () => {
	const dragTarget = document.querySelector("#your-fleet .grid-container");

	const getClickedShipPart = (dragging) =>
		[...dragging.childNodes].findIndex((dragChild) =>
			dragChild.classList.contains("clicked")
		);

	const getIsWholeShipInGrid = (length, id, index) => {
		const startingPos = id - index;
		const endingPos = startingPos + length;

		if (
			// horizontal. vertical??????
			startingPos < 0 ||
			endingPos > 99 ||
			String(startingPos).length !== String(endingPos).length ||
			(String(id).length !== 1 &&
				String(startingPos)[0] !== String(endingPos)[0])
		) {
			return false;
		}
		return true;
	};

	dragTarget.addEventListener("dragover", (e) => {
		const dragging = document.querySelector(".dragging");
		const length = dragging.childNodes.length - 1;
		const dataID = Number(e.target.getAttribute("data-id"));
		const dragChildIndex = getClickedShipPart(dragging);
		const isWholeShipInGrid = getIsWholeShipInGrid(
			length,
			dataID,
			dragChildIndex
		);

		if (!isWholeShipInGrid) {
			return;
		}

		e.preventDefault();
		// 	const draggingParent = dragging.parentNode;
		// 	if (dataID === null || dataID === "") {
		// 		[...dragging.childNodes].forEach((c) => c.removeAttribute("data-id"));
		// 		return;
		// 	}
		// 	const id = dataID;
		// 	const starting = id - dragChildIndex;
		// 	const dragLength = starting + length;
		// 	if (
		// 		(starting.toString().length === 2 &&
		// 			starting.toString()[0] === dragLength.toString()[0]) ||
		// 		(starting.toString().length === 1 && dragLength < 10)
		// 	) {
		// 		[...dragging.childNodes].forEach((dChild, i) => {
		// 			// eslint-disable-next-line no-param-reassign
		// 			dChild.dataset.id = i + starting;
		// 		});
		// 	}
	});
};
