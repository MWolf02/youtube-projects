// Importing the useState hook from the React library.
import { useState } from "react";
// Importing the QRCode component from the "react-qr-code" library.
import QRCode from "react-qr-code";

// Defining and exporting the QRCodeGenerator component.
export default function QRCodeGenerator() {
  // Declaring state variables for the QR code value and the input value.
  const [qrCode, setQrCode] = useState(""); // State variable to hold the generated QR code value.
  const [input, setInput] = useState(""); // State variable to hold the input value from the user.

  // Function to handle generating the QR code.
  function handleGenerateQrCode() {
    // Setting the QR code value to the input value.
    setQrCode(input);
    // Clearing the input field after generating the QR code.
    setInput("");
  }

  // Returning JSX to render the QRCodeGenerator component.
  return (
    <div>
      <h1>Project 7 - QR Code Generator</h1>{" "}
      {/* Rendering a heading for the project */}
      <div>
        {/* Input field for entering the value to generate QR code */}
        <input
          onChange={(e) => setInput(e.target.value)} // Handling input change to update the input state
          type="text"
          name="qr-code"
          value={input} // Binding the input value to the state
          placeholder="Enter your value here" // Placeholder text for input field
        />
        {/* Button to trigger QR code generation */}
        <button
          disabled={input && input.trim() !== "" ? false : true} // Disabling the button if input is empty or contains only whitespace
          onClick={handleGenerateQrCode} // Handling click event to generate QR code
        >
          Generate
        </button>
      </div>
      <div>
        {/* Rendering the QR code using the QRCode component */}
        <QRCode
          id="qr-code-value"
          value={qrCode}
          size={400}
          bgColor="#fff"
        />{" "}
        {/* Setting QR code value, size, and background color */}
      </div>
    </div>
  );
}
