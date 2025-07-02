import "./styles.css"
import domController from "./domController"

console.log("setup project")
console.log(domController.number);



if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }
