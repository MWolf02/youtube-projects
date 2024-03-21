// Importing the useState hook from the React library.
import { useState } from "react";
// Importing the MenuList component from a local file named "menu-list".
import MenuList from "./menu-list";
// Importing the FaMinus and FaPlus icons from the "react-icons/fa" library.
import { FaMinus, FaPlus } from "react-icons/fa";

// Defining and exporting the MenuItem component.
export default function MenuItem({ item }) {
  // Declaring state variable to manage the display of current children items.
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  // Function to toggle the display of children items.
  function handleToggleChildren(getCurrentlabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  }

  // Logging the state of displayCurrentChildren.
  console.log(displayCurrentChildren);

  // Returning JSX to render the MenuItem component.
  return (
    <li>
      <div className="menu-item">
        {/* Rendering the label of the current menu item */}
        <p>{item.label}</p>
        {/* Rendering the toggle icon for children items if they exist */}
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {/* Rendering plus or minus icon based on whether children are displayed or not */}
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        ) : null}
      </div>
      {/* Rendering the children items if they exist and are currently displayed */}
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} /> // Rendering the MenuList component for children items
      ) : null}
    </li>
  );
}
