const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme) {
    return JSON.parse(theme);
  }
  return "light";
};

const saveTheme = (theme) => {
  const setTheme = JSON.stringify(theme);
  localStorage.setItem("theme", setTheme);
};

export { getTheme, saveTheme };
