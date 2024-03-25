// Importing the UseLocalStorage hook from a local file named "useLocalStorage.js".
import UseLocalStorage from "./useLocalStorage";
// Importing CSS styles for the theme component.
import "./theme.css";

// Defining and exporting the LightDarkMode component.
export default function LightDarkMode() {
  // Declaring a state variable named "theme" and a function named "setTheme" to update it, using the UseLocalStorage hook with a key of "theme" and an initial value of "dark".
  const [theme, setTheme] = UseLocalStorage("theme", "dark");

  // Function to handle toggling between light and dark themes.
  function handleToggleTheme() {
    // Toggling the theme between "light" and "dark".
    setTheme(theme === "light" ? "dark" : "light");
  }

  // Logging the current theme to the console.
  console.log(theme);

  // Returning JSX to render the LightDarkMode component.
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <h1 id="LightDarkMode">Project 8 - Light/Dark Mode</h1>{" "}
      {/* Rendering a heading for the project */}
      <div className="container">
        <h2>Hello World!</h2> {/* Rendering a greeting */}
        <button onClick={handleToggleTheme}>Change Theme</button>{" "}
        {/* Button to change the theme */}
      </div>
    </div>
  );
}
