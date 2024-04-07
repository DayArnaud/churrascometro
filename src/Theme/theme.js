let currentTheme = localStorage.getItem("theme") || "light";

export const createThemeIcon = () => {
  const themeIcon = document.createElement("i");
  themeIcon.classList.add("theme-icon", "fa-solid");
  if (currentTheme === "light") {
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.add("fa-moon");
  }

  themeIcon.addEventListener("click", () => {
    if (currentTheme === "light") {
      themeIcon.classList.replace("fa-sun", "fa-moon");
      currentTheme = "dark";
    } else {
      themeIcon.classList.replace("fa-moon", "fa-sun");
      currentTheme = "light";
    }
    toggleTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
  });
  return themeIcon;
};

export const toggleTheme = (selectedTheme) => {
  document.documentElement.setAttribute("theme", selectedTheme);
  localStorage.setItem("theme", selectedTheme);
};

window.addEventListener("DOMContentLoaded", () => {
  toggleTheme(currentTheme);
});
