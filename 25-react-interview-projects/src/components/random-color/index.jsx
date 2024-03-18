import { useEffect } from "react"; // Importing the useEffect hook from React for handling side effects
import { useState } from "react"; // Importing the useState hook from React for managing state

export default function RandomColor() { // Defining a functional component named RandomColor
  const [typeOfColor, setTypeOfColor] = useState("hex"); // State variable for type of color format, initialized with "hex"
  const [color, setColor] = useState("#000000"); // State variable for the generated color, initialized with black in hexadecimal format

  function randomColorUtility(length) { // Function to generate random numbers for color creation
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() { // Function to generate a random hexadecimal color
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; // Array of hexadecimal characters
    let hexColor = "#"; // Initialize hexColor with #

    for (let i = 0; i < 6; i++) { // Generating random hex digits
      hexColor += hex[randomColorUtility(hex.length)]; // Concatenating random hex digits
    }

    setColor(hexColor); // Updating the color state with the generated hexadecimal color
  }

  function handleCreateRandomRGBColor() { // Function to generate a random RGB color
    const r = randomColorUtility(256); // Generating random values for red component
    const g = randomColorUtility(256); // Generating random values for green component
    const b = randomColorUtility(256); // Generating random values for blue component

    setColor(`rgb(${r}, ${g}, ${b})`); // Updating the color state with the generated RGB color
  }

  useEffect(() => { // Effect hook to generate a random color when the typeOfColor state changes
    if (typeOfColor === "rgb") handleCreateRandomRGBColor(); // If typeOfColor is "rgb", generate a random RGB color
    else handleCreateRandomHexColor(); // Otherwise, generate a random hexadecimal color
  }, [typeOfColor]); // Dependency array to re-run the effect when typeOfColor changes

  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <h1>Project 2</h1> {/* Heading for the project */}
      <button onClick={() => setTypeOfColor("hex")}>Create HEX color</button> {/* Button to set typeOfColor to "hex" */}
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB color</button> {/* Button to set typeOfColor to "rgb" */}
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor // If typeOfColor is "hex", generate a random hexadecimal color
            : handleCreateRandomRGBColor // If typeOfColor is "rgb", generate a random RGB color
        }
      >
        Generate random color
      </button> {/* Button to generate a random color based on the current typeOfColor */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "50px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3> {/* Displaying the current color format */}
        <h1>{color}</h1> {/* Displaying the generated color */}
      </div>
    </div>
  );
}

