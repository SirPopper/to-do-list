import generateJoke from "./generateJoke";
import "./styles/style.css";
import num from "./assets/6.png";

const laughpng = document.getElementById("num");
laughpng.src = num;

console.log(generateJoke());
