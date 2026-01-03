import { Item } from "./item.js";

import placeholder from "./img/placeholder.png";

export const items = [
  new Item("Alfredo", "Pasta", "$20", placeholder),
  new Item("Lasagna", "Pasta", "$20", placeholder),
  new Item("Spaghetti", "Pasta", "$20", placeholder),
  new Item("Fettuccine", "Pasta", "$20", placeholder),
  new Item("Trenette", "Pasta", "$20", placeholder),
  new Item("Roman", "Pizza", "$20", placeholder),
  new Item("Sicilian", "Pizza", "$20", placeholder),
  new Item("Neapolitan", "Pizza", "$20", placeholder),
  new Item("Fritta", "Pizza", "$20", placeholder),
  new Item("Margherita", "Pizza", "$20", placeholder),
  new Item("Raspberry", "Tiramisu", "$20", placeholder),
  new Item("Pumpkin", "Tiramisu", "$20", placeholder),
  new Item("Chocolate", "Tiramisu", "$20", placeholder),
  new Item("Berry", "Tiramisu", "$20", placeholder),
  new Item("Strawberry", "Tiramisu", "$20", placeholder),
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
