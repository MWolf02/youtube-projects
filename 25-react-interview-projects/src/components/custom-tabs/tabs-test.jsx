// Importing the Tabs component from a local file named "tabs.js".
import Tabs from "./tabs";
// Importing CSS styles for the tabs component.
import "./tabs.css";

// Defining a functional component named RandomComponent.
function RandomComponent() {
  // Returning JSX to render a paragraph with specific styles and content.
  return (
    <p style={{ color: "orange", fontSize: "24px" }}>
      This is tab number <strong>3</strong> with some random text from a random
      component
    </p>
  );
}

// Defining and exporting the TabTest component as the default export.
export default function TabTest() {
  // Array of tab objects containing label and content for each tab.
  const tabs = [
    {
      label: "Tab 1",
      content: (
        <p style={{ fontSize: "24px" }}>
          This is tab number <strong>1</strong> with some random text
        </p>
      ),
    },
    {
      label: "Tab 2",
      content: (
        <p style={{ color: "blue", fontSize: "24px" }}>
          This is tab number <strong>2</strong> with some random text
        </p>
      ),
    },
    {
      label: "Tab 3",
      content: <RandomComponent />, // Using the RandomComponent as content for Tab 3
    },
  ];

  // Function to handle tab change.
  function handleChange(currentTabIndex) {
    console.log(currentTabIndex); // Logging the index of the currently selected tab.
  }

  // Returning JSX to render the Tabs component with provided tabsContent and onChange function.
  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
