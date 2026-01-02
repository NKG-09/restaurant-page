import { items } from "./home";

export function loadCart(content = document.querySelector("#content")) {
  content.innerHTML = "";

  const itemsDisplay = document.createElement("div");
  itemsDisplay.classList.add("items");

  let total = 0;

  items.forEach(item => {
    if (item.number <= 0) return;

    const name = document.createElement("p");
    name.textContent = item.name;

    const price = document.createElement("p");
    price.textContent = item.price;

    const number = document.createElement("p");
    number.textContent = item.number;

    const totalPrice = document.createElement("p");
    total += Number(item.price.slice(1)) * item.number;
    totalPrice.textContent = `$${Number(item.price.slice(1)) * item.number}`;

    itemsDisplay.appendChild(name);
    itemsDisplay.appendChild(price);
    itemsDisplay.appendChild(number);
    itemsDisplay.appendChild(totalPrice);
  });

  const totalLabel = document.createElement("p");
  totalLabel.textContent = "Total";
  const fullTotal = document.createElement("p");
  fullTotal.textContent = `$${total}`;

  const buyButton = document.createElement("button");
  buyButton.textContent = "Buy";

  itemsDisplay.appendChild(totalLabel);
  itemsDisplay.appendChild(fullTotal);
  itemsDisplay.appendChild(buyButton);

  content.appendChild(itemsDisplay);
}
