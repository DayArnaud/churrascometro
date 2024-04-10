import { createThemeIcon } from "../Theme/theme.js";
const buttons = document.querySelectorAll(".btn");
const sendButton = document.querySelector(".send-btn");

const themeIcon = createThemeIcon();
document.body.insertBefore(themeIcon, document.body.firstChild);

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const sectionDiv = this.closest(".section-div");
    const counterSpan = sectionDiv.querySelector(".counter-span");
    let count = parseInt(counterSpan.textContent);

    if (this.textContent.includes("+") && count >= 0) {
      count++;
    } else if (this.textContent.includes("-") && count > 0) {
      count--;
    }

    counterSpan.textContent = count;
  });
});

sendButton.addEventListener("click", () => {
  const men = parseInt(
    document.querySelector(".men .counter-span").textContent
  );
  const women = parseInt(
    document.querySelector(".women .counter-span").textContent
  );
  const children = parseInt(
    document.querySelector(".children .counter-span").textContent
  );
  const drinkers = parseInt(
    document.querySelector(".drinkers .counter-span").textContent
  );

  const barbecueData = { men, women, children, drinkers };
  sessionStorage.setItem("barbecueData", JSON.stringify(barbecueData));

  window.location.href = "../form/form.html";
});
