import { createThemeIcon } from "../Theme/theme.js";

document.addEventListener("DOMContentLoaded", () => {
  const themeIcon = createThemeIcon();
  document.body.insertBefore(themeIcon, document.body.firstChild);

  const storedData = sessionStorage.getItem("barbecueData");

  if (storedData) {
    const barbecueData = JSON.parse(storedData);

    const guests =
      barbecueData.men + barbecueData.women + barbecueData.children;
    document.querySelector(".guests").textContent = `${guests} convidados`;

    const menDetail = `${barbecueData.men} homem${
      barbecueData.men > 1 ? "ens" : ""
    }`;
    const womenDetail = `${barbecueData.women} mulher${
      barbecueData.women > 1 ? "es" : ""
    }`;
    const childrenDetail = `${barbecueData.children} criança${
      barbecueData.children > 1 ? "s" : ""
    }`;

    const participants = document.querySelectorAll(".participants .h3");
    participants[0].textContent = menDetail;
    participants[1].textContent = womenDetail;
    participants[2].textContent = childrenDetail;

    const meatQtt =
      barbecueData.men * 0.4 +
      barbecueData.women * 0.32 +
      barbecueData.children * 0.2;
    const garlicBreadQtt =
      (barbecueData.men + barbecueData.women) * 2 + barbecueData.children;
    const coalQtt =
      barbecueData.men + barbecueData.women + barbecueData.children;
    const saltQtt =
      (barbecueData.men + barbecueData.women + barbecueData.children) * 0.04;
    const iceQtt =
      Math.ceil(
        (barbecueData.men + barbecueData.women + barbecueData.children) / 10
      ) * 5;
    const sodaQtt =
      Math.ceil(
        (barbecueData.men + barbecueData.women + barbecueData.children) / 5
      ) * 2;
    const waterQtt = Math.ceil(
      (barbecueData.men + barbecueData.women + barbecueData.children) / 5
    );
    const beerQtt = barbecueData.drinkers * 3 * 600;

    document.querySelector(
      "tr:nth-child(1) td"
    ).textContent = `${meatQtt.toFixed(2)} kg`;
    document.querySelector(
      "tr:nth-child(2) td"
    ).textContent = `${garlicBreadQtt} unidades`;
    document.querySelector(
      "tr:nth-child(3) td"
    ).textContent = `${sodaQtt} garrafas de 2L`;
    document.querySelector(
      "tr:nth-child(4) td"
    ).textContent = `${waterQtt} garrafas de 1L`;
    document.querySelector("tr:nth-child(5) td").textContent = `${
      beerQtt / 600
    } garrafas de 600ml`;
    document.querySelector("tr:nth-child(6) td").textContent = `${coalQtt} kg`;
    document.querySelector(
      "tr:nth-child(7) td"
    ).textContent = `${saltQtt.toFixed(2)} kg`;
    document.querySelector("tr:nth-child(8) td").textContent = `${iceQtt} kg`;
  } else {
    console.error("Sem informações disponíveis.");
  }
});
