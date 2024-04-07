import { createThemeIcon } from "../Theme/theme.js";

const createTitles = (text, tag) => {
  const titles = document.createElement(tag);
  titles.textContent = text;
  return titles;
};

const buildHomepage = () => {
  const themeIcon = createThemeIcon();
  const h1 = createTitles("Churrascômetro", "h1");
  const h3 = createTitles("Precisa de uma ajudinha com o churrasco? :))", "h3");
  const additionalH3 = createTitles("Quantas pessoas vão participar?", "h3");

  document.body.appendChild(themeIcon);
  document.body.appendChild(h1);
  document.body.appendChild(h3);
  document.body.appendChild(additionalH3);
};

window.addEventListener("DOMContentLoaded", buildHomepage);
