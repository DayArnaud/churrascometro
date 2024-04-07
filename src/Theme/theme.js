let currentTheme = "light";

export const createThemeIcon = () => {
  const themeIcon = document.createElement("i");
  themeIcon.className = currentTheme === "light" ? "fas fa-sun" : "fas fa-moon";
  themeIcon.classList.add("theme-icon");
  themeIcon.addEventListener("click", () => {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    toggleTheme(currentTheme);
    themeIcon.className =
      currentTheme === "light" ? "fas fa-sun" : "fas fa-moon";
  });
  return themeIcon;
};

export const toggleTheme = (selectedTheme) => {
  document.documentElement.setAttribute("theme", selectedTheme);
};
