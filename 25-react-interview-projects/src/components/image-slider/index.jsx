import { useEffect, useState } from "react"; // Importing necessary hooks from React
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"; // Importing left and right arrow icons from react-icons library
import "./styles.css"; // Importing CSS file for styling

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  // Declaring a functional component called ImageSlider, which accepts props such as url, limit, and page
  const [images, setImages] = useState([]); // State variable to store the array of images fetched from the API
  const [currentSlide, setCurrentSlide] = useState(0); // State variable to keep track of the index of the currently displayed slide
  const [errorMsg, setErrorMsg] = useState(null); // State variable to store error messages, if any
  const [loading, setLoading] = useState(false); // State variable to track whether data is being loaded

  async function fetchImages(getUrl) {
    // Asynchronous function to fetch images from the provided URL
    try {
      setLoading(true); // Set loading state to true

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`); // Fetching data from the specified URL with pagination parameters
      const data = await response.json(); // Parsing the response data as JSON

      if (data) {
        // If data is successfully fetched
        setImages(data); // Update the images state with the fetched data
        setLoading(false); // Set loading state to false
      }
    } catch (e) {
      // Catching any errors that occur during the fetch process
      setErrorMsg(e.message); // Setting the error message state with the error message
      setLoading(false); // Set loading state to false
    }
  }

  function handlePrevious() {
    // Function to handle click event for navigating to the previous slide
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1); // Decrementing the current slide index, looping back to the last slide if currently on the first slide
  }

  function handleNext() {
    // Function to handle click event for navigating to the next slide
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1); // Incrementing the current slide index, looping back to the first slide if currently on the last slide
  }

  useEffect(() => {
    // Effect hook to fetch images when the URL prop changes
    if (url !== "") fetchImages(url); // Fetch images only if the URL is not empty
  }, [url]);

  if (loading) {
    // Conditionally rendering a loading message if data is being loaded
    return <div>Loading data! Please wait</div>;
  }

  if (errorMsg !== null) {
    // Conditionally rendering an error message if an error occurs during data fetching
    return <div>Error occurred! {errorMsg}</div>;
  }

  return (
    // Rendering the image slider component
    <div>
      <h1 id="ImageSlider">Project 4 - Image Slider</h1> {/* Header indicating the project name */}
      <div className="container">
        {/* Container for the image slider */}
        <BsArrowLeftCircleFill // Left arrow icon component for navigating to the previous slide
          onClick={handlePrevious} // Event handler for clicking the left arrow
          className="arrow arrow-left" // CSS class for styling the left arrow
        />
        {images && images.length // Conditionally rendering images if images array exists and is not empty
          ? images.map(
              (
                imageItem,
                index // Mapping through the images array to render each image
              ) => (
                <img // Image component for displaying each image
                  key={imageItem.id} // Unique key for identifying each image
                  alt={imageItem.download_url} // Alt text for accessibility
                  src={imageItem.download_url} // Source URL of the image
                  className={
                    // Conditional class to show or hide the current image based on the current slide index
                    currentSlide === index // If the current slide index matches the image index
                      ? "current-image" // Apply class to display the current image
                      : "current-image hide-current-image" // Apply class to hide the current image
                  }
                />
              )
            )
          : null}
        {/* If images array does not exist or is empty, render nothing */}
        <BsArrowRightCircleFill // Right arrow icon component for navigating to the next slide
          onClick={handleNext} // Event handler for clicking the right arrow
          className="arrow arrow-right" // CSS class for styling the right arrow
        />
        <span className="circle-indicators">
          {/* Container for circle indicators */}
          {images && images.length // Conditionally rendering circle indicators if images array exists and is not empty
            ? images.map(
                (
                  _,
                  index // Mapping through the images array to render each circle indicator
                ) => (
                  <button // Button element representing each circle indicator
                    key={index} // Unique key for identifying each circle indicator
                    className={
                      // Conditional class to style each circle indicator based on the current slide index
                      currentSlide === index // If the current slide index matches the indicator index
                        ? "current-indicator" // Apply class to show the current indicator
                        : "current-indicator inactive-indicator" // Apply class to show the inactive indicator
                    }
                    onClick={() => setCurrentSlide(index)} // Event handler for clicking on a circle indicator to navigate to the corresponding slide
                  ></button>
                )
              )
            : null}
          {/* If images array does not exist or is empty, render nothing */}
        </span>
      </div>
    </div>
  );
}
