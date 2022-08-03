export default () => {
	let startingPos;
	let endingPos;

	const dragTarget = document.querySelector("#your-fleet .grid-container");

	const getClickedShipPart = (dragging) =>
		[...dragging.childNodes].findIndex((dragChild) =>
			dragChild.classList.contains("clicked")
		);

	const getIsWholeShipInGrid = (length, id, index) => {
		startingPos = id - index;
		endingPos = startingPos + length;

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
		[...dragging.childNodes].forEach((part, index) => {
			part.setAttribute("data-id", startingPos + index);
		});
	});
};
