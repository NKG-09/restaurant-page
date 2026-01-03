export class Item {
  constructor (name, type, price, img) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.img = img;
  }

  set number (value) {
    if (value < 0) return;
    localStorage.setItem(this.name, value);
  }

  get number () {
    return Number(localStorage.getItem(this.name)) ?? 0;
  }

  get template () {
    const el = document.createElement("div");
    el.classList.add("item");

    const img = document.createElement("img");
    img.src = this.img;

    const name = document.createElement("h3");
    name.textContent = this.name;

    const price = document.createElement("p");
    price.textContent = this.price;

    const inputText = document.createElement("p");
    inputText.classList.add("number");
    inputText.textContent = this.number;

    const addButton = document.createElement("button");
    addButton.textContent = "+";
    addButton.addEventListener("click", () => {
      this.number++;
      inputText.textContent = this.number;
    });

    const subtractButton = document.createElement("button");
    subtractButton.textContent = "-";
    subtractButton.addEventListener("click", () => {
      this.number--;
      inputText.textContent = this.number;
    });

    el.appendChild(img);
    el.append(name);
    el.appendChild(price);
    el.appendChild(inputText);
    el.appendChild(addButton);
    el.appendChild(subtractButton);

    return el;
  }
}
