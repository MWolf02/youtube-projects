// Importing the MenuList component from a local file named "menu-list".
import MenuList from "./menu-list";
// Importing CSS styles for the TreeView component.
import "./styles.css";

// Defining and exporting the TreeView component.
export default function TreeView({ menus = [] }) {
  // Returning JSX to render the TreeView component.
  return (
    <div>
      {/* Rendering a heading for the project */}
      <h1 id="TreeView">Project 6 - Navigation Bar</h1>
      <div className="tree-view-container">
        {/* Rendering the MenuList component to display the navigation menu */}
        <MenuList list={menus} />
      </div>
    </div>
  );
}
