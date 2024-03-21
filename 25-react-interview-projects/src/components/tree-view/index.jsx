import MenuList from "./menu-list";
import "./styles.css";

export default function TreeView({ menus = [] }) {
  return (
    <div>
      <h1>Project 6 - Navigation Bar</h1>
      <div className="tree-view-container">
        <MenuList list={menus} />
      </div>
    </div>
  );
}
