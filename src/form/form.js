import { createThemeIcon } from "../Theme/theme.js";

document.addEventListener("DOMContentLoaded", () => {
  const themeIcon = createThemeIcon();
  document.body.insertBefore(themeIcon, document.body.firstChild);

  const form = document.querySelector(".form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.querySelector("input[type='text']");
    const emailInput = document.querySelector("input[type='email']");
    const cepInput = document.querySelector("input[type='number']");
    const checkbox = document.querySelector("#terms");

    if (
      nameInput.value &&
      emailInput.value &&
      cepInput.value &&
      checkbox.checked
    ) {
      const dataForm = {
        name: nameInput.value,
        email: emailInput.value,
        cep: cepInput.value,
        checkbox: checkbox.checked,
      };
      localStorage.setItem("dataForm", JSON.stringify(dataForm));
      window.location.href = "../results/results.html";
    } else {
      alert(
        "Por favor, preencha todos os campos e marque o checkbox de termos."
      );
    }
  });
});
