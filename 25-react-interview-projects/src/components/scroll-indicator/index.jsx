// Importing the useEffect and useState hooks from the React library.
import { useEffect, useState } from "react";
// Importing CSS styles for the scroll indicator component.
import "./scroll.css";

// Defining and exporting the ScrollIndicator component.
export default function ScrollIndicator({ url }) {
  // Declaring state variables for data, loading status, error message, and scroll percentage.
  const [data, setData] = useState([]); // State variable to hold fetched data.
  const [loading, setLoading] = useState(false); // State variable to track loading status.
  const [errorMessage, setErrorMessage] = useState(""); // State variable to hold error message.
  const [scrollPercentage, setScrollPercentage] = useState(0); // State variable to hold scroll percentage.

  // Function to fetch data from the provided URL.
  async function fetchData(getUrl) {
    try {
      setLoading(true); // Setting loading status to true.
      const response = await fetch(getUrl); // Fetching data from the URL.
      const data = await response.json(); // Parsing response data as JSON.
      if (data && data.products && data.products.length > 0) {
        setData(data.products); // Setting fetched data.
        setLoading(false); // Setting loading status to false.
      }
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message); // Setting error message if fetching fails.
    }
  }

  // Effect hook to fetch data when the URL changes.
  useEffect(() => {
    fetchData(url);
  }, [url]); // Dependency array containing the URL.

  // Function to calculate scroll percentage.
  function handleScrollPercentage() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop; // Getting scrolled distance from top.
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight; // Getting total scrollable height.
    setScrollPercentage((howMuchScrolled / height) * 100); // Calculating scroll percentage.
  }

  // Effect hook to update scroll percentage on scroll event.
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage); // Adding scroll event listener.

    // Cleaning up the event listener on component unmount.
    return () => {
      window.removeEventListener("scroll", handleScrollPercentage); // Removing scroll event listener.
    };
  }, []); // Empty dependency array to ensure the effect runs only once after component mount.

  // Conditional rendering based on loading status and error message.
  if (errorMessage) {
    return <div>Error ! {errorMessage}</div>; // Rendering error message if there's an error.
  }

  if (loading) {
    return <div>Loading data ! Please wait</div>; // Rendering loading message if data is being fetched.
  }

  // Returning JSX to render the ScrollIndicator component.
  return (
    <div>
      <div className="top-container">
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }} // Setting width of progress bar based on scroll percentage.
          ></div>
        </div>
      </div>
      {/* <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div> */}
    </div>
  );
}
