import { Item } from "./item.js";

export const items = [
  new Item("Alfredo", "Pasta", "$20", ""),
  new Item("Lasagna", "Pasta", "$20", ""),
  new Item("Roman", "Pizza", "$20", ""),
  new Item("Sicilian", "Pizza", "$20", ""),
  new Item("Raspberry", "Tiramisu", "$20", ""),
  new Item("Pumpkin", "Tiramisu", "$20", ""),
];

export function loadHome(content = document.querySelector("#content")) {
  content.innerHTML = "";

  const carousels = new Map();

  items.forEach(item => {
    if (!Object.keys(carousels).includes(item.type)) {
      carousels[item.type] = document.createElement("div");
      carousels[item.type].classList.add("carousel");
    }
    carousels[item.type].appendChild(item.template);
  });

  Object.keys(carousels).forEach(key => {
    const heading = document.createElement("h2");
    heading.textContent = key;
    content.appendChild(heading);
    content.appendChild(carousels[key]);
  });
}
