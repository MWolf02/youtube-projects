// Defining and exporting the Suggestions component.
export default function Suggestions({ data, handleClick }) {
  return (
    // Rendering an unordered list.
    <ul>
      {/* Mapping over the data array to render each item as a list item */}
      {data && data.length
        ? data.map((item, index) => (
            // Rendering each list item with a click event handler and a unique key
            <li
              style={{ listStyle: "none", cursor: "pointer" }}
              onClick={handleClick}
              key={index}
            >
              {item} {/* Rendering the item text */}
            </li>
          ))
        : null}
    </ul>
  );
}
