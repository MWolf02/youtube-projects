// Importing the MenuItem component from a local file named "menu-item".
import MenuItem from "./menu-item";

// Defining and exporting the MenuList component.
export default function MenuList({ list = [] }) {
  // Returning JSX to render the MenuList component.
  return (
    <ul className="menu-list-container">
      {/* Mapping over the list of items and rendering a MenuItem component for each item */}
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
}
