import { useState } from "react"; // Importing the useState hook from React for managing state
import data from "./data"; // Importing data from an external file
import "./styles.css"; // Importing CSS styles for the component

export default function Accordion() {
  // Defining a functional component named Accordion
  const [selected, setSelected] = useState(null); // State variable for the selected item, initialized with null
  const [enableMultiSelection, setEnableMultiSelection] = useState(false); // State variable for enabling multiple selection, initialized with false
  const [multiple, setMultiple] = useState([]); // State variable for multiple selections, initialized as an empty array

  const buttonText = enableMultiSelection
    ? "Disable Multiple Selection"
    : "Enable Multiple Selection"; // Dynamic text for the button based on the enableMultiSelection state

  function handleSingleSelection(getCurrentId) {
    // Function to handle single item selection
    setSelected(getCurrentId === selected ? null : getCurrentId); // Toggle selected item based on the current state
  }

  function handleMultiSelection(getCurrentId) {
    // Function to handle multiple item selection
    let copyMultiple = [...multiple]; // Creating a copy of the multiple selections array
    const findIndexOfCurrent = copyMultiple.indexOf(getCurrentId); // Finding the index of the current item

    if (findIndexOfCurrent === -1) copyMultiple.push(getCurrentId);
    // If the item is not selected, add it to the array
    else copyMultiple.splice(findIndexOfCurrent, 1); // If the item is already selected, remove it from the array

    setMultiple(copyMultiple); // Update the state with the modified array of multiple selections
  }

  return (
    <div className="wrapper">
      {" "}
      {/* Main wrapper for the component */}
      <h1>Project 1</h1> {/* Heading for the project */}
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {/* Button to toggle multiple selection */}
        {buttonText}
        {/* Displaying the dynamic text based on the enableMultiSelection state */}
      </button>
      <div className="accordion">
        {" "}
        {/* Container for the accordion items */}
        {data &&
          data.length > 0 &&
          data.map(
            (
              dataItem // Checking if data exists and is not empty
            ) => (
              <div className="item" key={dataItem.id}>
                {" "}
                {/* Wrapper for each accordion item */}
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id) // If multi-selection is enabled, call handleMultiSelection
                      : () => handleSingleSelection(dataItem.id) // If not, call handleSingleSelection
                  }
                  className="title" // Styling for the accordion item title
                >
                  <h3>{dataItem.question}</h3> {/* Displaying the question */}
                  <span>+</span> {/* Plus sign icon */}
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && ( // If multi-selection enabled and item selected, display content
                      <div className="content">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && ( // If single selection enabled and item selected, display content
                      <div className="content">{dataItem.answer}</div>
                    )}
              </div>
            )
          )}
        {!(data && data.length > 0) && <div>No data found</div>}{" "}
        {/* Displayed when data is empty */}
      </div>
    </div>
  );
}

{
  /* {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */
}
