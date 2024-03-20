import MenuList from "./menu-list";
import "./styles.css";

export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
        <h1>Project 6 - Navigation Bar</h1>
      <MenuList list={menus} />
      
    </div>
  );
}
