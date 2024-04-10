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

// export const createNewElement = (tag, text = "", attributes = {}) => {
//   const element = document.createElement(tag);
//   if (text) {
//     element.textContent = text;
//   }
//   Object.keys(attributes).forEach((attr) => {
//     element.setAttribute(attr, attributes[attr]);
//   });
//   return element;
// };

// const createInput = (placeholderText, typeText) => {
//   const input = createNewElement("input", "", {
//     type: typeText,
//     placeholder: placeholderText,
//     required: "true",
//   });
//   input.classList.add("input");
//   return input;
// };

// const createForm = () => {
//   console.log("buildFormPage called");
//   const form = createNewElement("form");
//   form.classList.add("form");

//   const inputs = [
//     ["Digite seu nome", "text"],
//     ["Digite seu email", "email"],
//     ["Digite seu CEP", "number"],
//   ];

//   inputs.forEach((inputArgs) => {
//     const input = createInput(inputArgs[0], inputArgs[1]);
//     form.appendChild(input);
//   });

//   const checkboxInput = createNewElement("input", "", {
//     type: "checkbox",
//     id: "terms",
//     name: "terms",
//   });

//   const label = createNewElement("label");
//   label.classList.add("label-terms");
//   label.setAttribute("for", "terms");
//   label.textContent =
//     "Concordo em receber ofertas e personalização customizadas de acordo com o meu interesse.";
//   label.insertBefore(checkboxInput, label.firstChild);
//   form.appendChild(label);
//   document.body.appendChild(form);
// };

// const buildFormPage = () => {
//   const themeIcon = createThemeIcon();
//   document.body.appendChild(themeIcon);

//   const h1 = createNewElement("h1", "Churrascômetro");
//   h1.classList.add("h1-page-title");
//   document.body.appendChild(h1);

//   const h3 = createNewElement("h3", "Fique por dentro de todas as novidades");
//   h3.classList.add("h3-page-title");
//   document.body.appendChild(h3);

//   const additionalH3 = createNewElement(
//     "h3",
//     "Cadastre seu email e receba promoções especiais"
//   );
//   additionalH3.classList.add("h3-page-title");
//   document.body.appendChild(additionalH3);

//   createForm();

//   const sendButton = createNewElement("button", "Cadastrar", {
//     class: "send-btn",
//     type: "button",
//   });
//   document.body.appendChild(sendButton);

//   sendButton.addEventListener("click", () => {
//     window.location.href = "../results/results.html";
//   });
// };

// window.addEventListener("DOMContentLoaded", buildFormPage);
