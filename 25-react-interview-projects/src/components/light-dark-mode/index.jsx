import UseLocalStorage from "./useLocalStorage";
import "./theme.css";

export default function LightDarkMode() {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <h1>Project 8 - Light/Dark Mode</h1>
      <div className="container">
        <h2>Hello World!</h2>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
