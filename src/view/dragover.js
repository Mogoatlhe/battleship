export default () => {
	let startingPos;
	let endingPos;

	const dragTarget = document.querySelector("#human .grid-container");

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

	const removeLandingIndicator = () => {
		const landingIndicators = document.querySelectorAll(".landing-indicator");
		[...landingIndicators].forEach((landingIndicator) => {
			landingIndicator.classList.remove("landing-indicator");
		});
	};

	const addLandingIndicator = (length) => {
		removeLandingIndicator();

		// works for horizontal ships.
		for (let i = 0; i < length + 1; i += 1) {
			document
				.querySelector(`[data-id="${startingPos + i}"]`)
				.classList.add("landing-indicator");
		}
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
			removeLandingIndicator();
			return;
		}

		e.preventDefault();
		addLandingIndicator(length);
		[...dragging.childNodes].forEach((part, index) => {
			part.setAttribute("data-id", startingPos + index);
		});
	});

	dragTarget.addEventListener("dragleave", (e) => {
		e.preventDefault();
		removeLandingIndicator();
	});
};
