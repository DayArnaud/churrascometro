import { createThemeIcon } from "../Theme/theme.js";

const createElement = (text, tag) => {
  const element = document.createElement(tag);
  element.textContent = text;
  return element;
};

const createDivWithContent = (h4Text, spanText) => {
  const div = document.createElement("div");
  div.classList.add("section-div");

  const h4 = createElement(h4Text, "h4");
  h4.classList.add("h4");

  const span = createElement(spanText, "span");
  span.classList.add("counter-span");
  let count = 0;

  const updateSpanText = () => {
    span.textContent = `${count}`;
  };

  const subDiv = document.createElement("div");
  subDiv.classList.add("subdiv-btns");

  const button1 = createElement("-", "button");
  button1.classList.add("btn");
  button1.addEventListener("click", () => {
    if (count > 0) {
      count--;
      updateSpanText();
    }
  });

  const button2 = createElement("+", "button");
  button2.classList.add("btn");
  button2.addEventListener("click", () => {
    count++;
    updateSpanText();
  });

  subDiv.appendChild(button1);
  subDiv.appendChild(button2);

  div.appendChild(h4);
  div.appendChild(span);
  div.appendChild(subDiv);

  return div;
};

const buildHomepage = () => {
  const themeIcon = createThemeIcon();
  document.body.appendChild(themeIcon);

  const h1 = createElement("Churrascômetro", "h1");
  h1.classList.add("h1-page-title");
  document.body.appendChild(h1);

  const h3 = createElement(
    "Precisa de uma ajudinha com o churrasco? :))",
    "h3"
  );
  h3.classList.add("h3-page-title");
  document.body.appendChild(h3);

  const additionalH3 = createElement("Quantas pessoas vão participar?", "h3");
  additionalH3.classList.add("h3-page-title");
  document.body.appendChild(additionalH3);

  const section = createElement();
  section.classList.add("section");
  const titles = ["Homens", "Mulheres", "Crianças", "Quantos adultos bebem?"];
  titles.forEach((title) => {
    section.appendChild(createDivWithContent(title, 0));
  });
  document.body.appendChild(section);

  const sendButton = createElement("Calcular", "button");
  sendButton.classList.add("send-btn");
  document.body.appendChild(sendButton);
};

window.addEventListener("DOMContentLoaded", buildHomepage);
