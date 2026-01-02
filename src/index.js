import { loadHome } from "./home.js";
import { loadCart } from "./cart.js";
import { loadAbout } from "./about.js";

const content = document.querySelector("#content");

if (!content) {
  console.error("Content not found.");
}

loadHome(content);

const navButtons = [...document.querySelectorAll("nav > button")];
const navFunctions = {
  "Home": loadHome,
  "Cart": loadCart,
  "About": loadAbout,
};

navButtons.forEach(button => {
  button.addEventListener("click", () => navFunctions[button.textContent](content));
});
