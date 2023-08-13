import "./style/style.css";
import Header from "./view/Header/header";
import Fleet from "./view/Fleet/Fleet";

const header = Header();
const humanFleet = Fleet("human");
const computerFleet = Fleet("computer");
const content = document.querySelector("#content");
const fleets = document.createElement("div");

fleets.setAttribute("id", "fleets");
fleets.append(humanFleet.getFleet());
fleets.append(computerFleet.getFleet());
content.append(header.getHeader());
content.append(fleets);
humanFleet.manageFleet();
computerFleet.manageFleet();
