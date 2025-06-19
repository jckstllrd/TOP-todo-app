import "./styles.css";
console.log('here');

import Controller from "./domController";

const domController = new Controller();
console.log('running buttons');

console.log(domController);

domController.initialiseButtons();


if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}
