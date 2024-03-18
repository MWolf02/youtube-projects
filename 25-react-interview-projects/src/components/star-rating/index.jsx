import { useState } from "react"; // Importing the useState hook from React for managing state
import { FaStar } from "react-icons/fa"; // Importing the FaStar component from react-icons library
import "./styles.css"; // Importing CSS styles for the component

export default function StarRating({ noOfStars = 5 }) { // Defining a functional component named StarRating, with a default prop for the number of stars
  const [rating, setRating] = useState(0); // State variable for the current rating, initialized with 0
  const [hover, setHover] = useState(0); // State variable for the hovered rating, initialized with 0

  function handleClick(getCurrentIndex) { // Function to handle click event on a star
    setRating(getCurrentIndex); // Set the rating to the clicked star index
  }

  function handleMouseMove(getCurrentIndex) { // Function to handle mouse move event over a star
    setHover(getCurrentIndex); // Set the hovered rating to the star index
  }

  function handleMouseLeave() { // Function to handle mouse leave event from the star rating component
    setHover(rating); // Set the hovered rating back to the current rating
  }

  return (
    <div className="star-rating"> {/* Main wrapper for the star rating component */}
      <h1>Project 3</h1> {/* Heading for the project */}
      {[...Array(noOfStars)].map((_, index) => { // Generating an array of stars based on the number of stars prop
        index += 1; // Incrementing index by 1 to start from 1 instead of 0
        return (
          <FaStar
            key={index} // Unique key for each star
            className={index <= (hover || rating) ? "active" : "inactive"} // Dynamically setting class based on hover and rating state
            onClick={() => handleClick(index)} // Click event handler to set the rating
            onMouseMove={() => handleMouseMove(index)} // Mouse move event handler to set the hover state
            onMouseLeave={() => handleMouseLeave()} // Mouse leave event handler to reset hover state
            size={40} // Size of the star icon
          />
        );
      })}
    </div>
  );
}
