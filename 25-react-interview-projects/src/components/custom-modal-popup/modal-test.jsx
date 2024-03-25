// Importing the useState hook from the React library to manage state in functional components.
import { useState } from "react";
// Importing the Modal component from a local file named "modal.js".
import Modal from "./modal";
// Importing CSS styles for the modal component.
import "./modal.css";

// Defining and exporting the ModalTest component as the default export.
export default function ModalTest() {
  // Declaring a state variable named "showModalPopup" and a function named "setShowModalPopup" to update it, using the useState hook with an initial value of false.
  const [showModalPopup, setShowModalPopup] = useState(false);

  // Defining a function named "handleToggleModalPopup" to toggle the value of "showModalPopup" between true and false.
  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  // Defining a function named "onClose" to set the value of "showModalPopup" to false, effectively closing the modal.
  function onClose() {
    setShowModalPopup(false);
  }

  // Returning JSX, which represents the structure and content of the ModalTest component.
  return (
    <div>
      {/* Rendering a heading for the project */}
      <h1 id="ModalTest">Project 10 - Custom Modal Pop-Up</h1>{" "}
      {/* Rendering a button that triggers the modal toggle */}
      <button onClick={handleToggleModalPopup} className="popup-btn">
        Open Modal Popup
      </button>{" "}
      {/* Conditional rendering of the Modal component based on the value of "showModalPopup" */}
      {showModalPopup && (
        <Modal
          id={"custom-id"} // Passing an id prop to the Modal component
          header={<h2>Customized Header</h2>} // Rendering a customized header inside the Modal component
          footer={<h2>Customized Footer</h2>} // Rendering a customized footer inside the Modal component
          onClose={onClose} // Passing a function as a prop to handle modal closing
          body={<div>Customized body</div>} // Rendering a customized body inside the Modal component
        />
      )}
    </div>
  );
}
