// Importing the useState hook from the React library to manage state in functional components.
import { useState } from "react";

// Defining and exporting the Tabs component.
export default function Tabs({ tabsContent, onChange }) {
  // Declaring a state variable named "currentTabIndex" and a function named "setCurrentTabIndex" to update it, using the useState hook with an initial value of 0.
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  // Function to handle click events on tab items.
  function handleOnClick(getCurrentIndex) {
    // Setting the current tab index and calling the onChange function with the new index.
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  // Returning JSX to render the Tabs component.
  return (
    <div className="wrapper">
      <h1 id="TabTest">Project 9 - Custom Tabs</h1>{" "}
      {/* Rendering a heading for the project */}
      <div className="heading">
        {/* Mapping through each tab item in tabsContent array and rendering tab items */}
        {tabsContent.map((tabItem, index) => (
          <div
            // Rendering each tab item with a dynamic className based on whether it's active or not
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            // Handling onClick event for tab items
            onClick={() => handleOnClick(index)}
            key={tabItem.label} // Using label as the key for each tab item
          >
            <span className="label">{tabItem.label}</span>{" "}
            {/* Rendering the label of each tab item */}
          </div>
        ))}
      </div>
      {/* Rendering the content of the currently selected tab */}
      <div className="content" style={{ color: "red" }}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
