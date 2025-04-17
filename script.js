const toggleTheme = document.getElementById("toggleTheme");
const htmlElement = document.documentElement;

toggleTheme.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  htmlElement.setAttribute("data-theme", newTheme);
  toggleTheme.textContent = newTheme === "light" ? "🌙" : "☀️";
});
