export function loadAbout (content = document.querySelector("#content")) {
  content.innerHTML = "";

  const heading = document.createElement("h2");
  heading.textContent = "The Greatest Restaurant Ever."

  const para = document.createElement("p");
  para.textContent = "This restaurant is super cool because we have pasta.";

  const phone = document.createElement("p");
  phone.textContent = "+000 XXXX 0000";

  const email = document.createElement("p");
  email.textContent = "restaurant@example.com";

  const address = document.createElement("p");
  address.textContent = "000 The Street, The City, The Place, 00000";

  content.appendChild(heading);
  content.appendChild(para);
  content.appendChild(phone);
  content.appendChild(email);
  content.appendChild(address);
}
