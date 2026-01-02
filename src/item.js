export class Item {
  constructor (name, type, price, img) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.img = img;
  }

  get number() { localStorage.getItem(this.name) ?? 0; }
  set number(value) { localStorage.setItem(this.name, value > 0 ? value : 0); }

  get template() {
    const el = document.createElement("div");
    el.classList.add("item");

    const img = document.createElement("img");
    img.src = this.img;

    const name = document.createElement("h3");
    name.textContent = this.name;

    const price = document.createElement("p");
    price.textContent = this.price;

    const input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("min", "0");
    input.setAttribute("max", "10");

    el.appendChild(img);
    el.append(name);
    el.appendChild(price);
    el.appendChild(input);

    return el;
  }
}
