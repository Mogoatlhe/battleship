import Header from "./Header/header";

const ViewIndex = () => {
	const header = Header();
	const content = document.querySelector("#content");

	content.append(header.getHeader());
};

export default ViewIndex;
