import { createThemeIcon } from "../Theme/theme.js";

const buttons = document.querySelectorAll(".btn");
const sendButton = document.querySelector(".send-btn");

const themeIcon = createThemeIcon();
document.body.insertBefore(themeIcon, document.body.firstChild);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const counterSpan = this.parentNode.querySelector(".counter-span");
    let count = parseInt(counterSpan.textContent);

    if (this.textContent === "+" && count >= 0) {
      count++;
    } else if (this.textContent === "-" && count > 0) {
      count--;
    }

    counterSpan.textContent = count;
  });
});

sendButton.addEventListener("click", () => {
  window.location.href = "../form/form.html";
});
