// Importing the useEffect and useState hooks from the React library.
import { useEffect, useState } from "react";
// Importing the User component from a local file named "user".
import User from "./user";
// Importing CSS styles for the GithubProfileFinder component.
import "./styles.css";

// Defining and exporting the GithubProfileFinder component.
export default function GithubProfileFinder() {
  // Declaring state variables for the username, user data, and loading status.
  const [userName, setUserName] = useState("MWolf02"); // State variable for the username
  const [userData, setUserData] = useState(null); // State variable for the fetched user data
  const [loading, setLoading] = useState(false); // State variable to track loading status

  // Function to fetch user data from the Github API.
  async function fetchGithubUserData() {
    setLoading(true); // Setting loading status to true.
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`); // Fetching user data from Github API.
      const data = await response.json(); // Parsing response data as JSON.
      setUserData(data); // Setting fetched user data.
    } catch (error) {
      console.error("Error fetching user data:", error); // Logging error if fetching fails.
    }
    setLoading(false); // Setting loading status to false.
  }

  // Function to handle form submission.
  function handleSubmit(event) {
    event.preventDefault(); // Preventing default form submission behavior.
    fetchGithubUserData(); // Fetching user data when form is submitted.
  }

  // Effect hook to fetch user data when the component mounts.
  useEffect(() => {
    fetchGithubUserData(); // Fetching user data when component mounts.
  }, []); // Empty dependency array to ensure the effect runs only once after component mount.

  // Conditional rendering based on loading status.
  if (loading) {
    return <div>Loading.. please wait</div>; // Rendering loading message if data is being fetched.
  }

  // Returning JSX to render the GithubProfileFinder component.
  return (
    <div className="github-profile-container">
      {/* Rendering a heading for the project */}
      <h1 id="GithubProfileFinder">Project 11 - Github Profile Finder</h1>
      {/* Form to search for Github username */}
      <form className="input-wrapper" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {/* Rendering the User component with user data if available */}
      {userData && <User user={userData} />}
    </div>
  );
}
