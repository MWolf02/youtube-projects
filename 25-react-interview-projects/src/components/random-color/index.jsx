// Importing the useEffect and useState hooks from the React library.
import { useEffect, useState } from "react";

// Defining and exporting the RandomColor component.
export default function RandomColor() {
  // Declaring state variables for the type of color (hex or rgb) and the generated color.
  const [typeOfColor, setTypeOfColor] = useState("hex"); // State variable to determine the type of color (hex or rgb)
  const [color, setColor] = useState("#000000"); // State variable to hold the generated color

  // Utility function to generate a random number within a specified range.
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  // Function to create a random hex color.
  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    // Generating random hexadecimal digits and concatenating them to form a hex color code.
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor); // Setting the generated hex color.
  }

  // Function to create a random RGB color.
  function handleCreateRandomRgbColor() {
    // Generating random values for red, green, and blue components of RGB color.
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g}, ${b})`); // Setting the generated RGB color.
  }

  // Effect hook to generate a random color when the typeOfColor changes.
  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]); // Dependency array containing typeOfColor.

  // Returning JSX to render the RandomColor component.
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <h1 id="RandomColor">Project 2 - Random Color Generator</h1>{" "}
      {/* Rendering a heading for the project */}
      <button onClick={() => setTypeOfColor("hex")}>
        Create HEX Color
      </button>{" "}
      {/* Button to set typeOfColor to "hex" */}
      <button onClick={() => setTypeOfColor("rgb")}>
        Create RGB Color
      </button>{" "}
      {/* Button to set typeOfColor to "rgb" */}
      {/* Button to generate a random color */}
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      {/* Rendering the type and value of the generated color */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>{" "}
        {/* Rendering the type of color */}
        <h2>{color}</h2> {/* Rendering the value of the generated color */}
      </div>
    </div>
  );
}
