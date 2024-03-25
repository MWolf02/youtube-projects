import { useEffect } from "react";
import { useState } from "react";
import Suggestions from "./suggestions";

// Defining and exporting the SearchAutoComplete component.
export default function SearchAutoComplete() {
  // State variables for loading status, list of users, error, search parameter, drop-down visibility, and filtered users.
  const [loading, setLoading] = useState(false); // State variable to track loading status
  const [users, setUsers] = useState([]); // State variable to store the list of users
  const [error, setError] = useState(null); // State variable to handle errors
  const [searchParam, setSearchParam] = useState(""); // State variable to store search parameter
  const [showDropDown, setShowDropDown] = useState(false); // State variable to toggle drop-down visibility
  const [filteredUsers, setFilteredUsers] = useState([]); // State variable to store filtered users
  const url = "https://dummyjson.com/users"; // API endpoint URL

  // Function to handle input change in the search bar.
  function handleChange(event) {
    const query = event.target.value.toLowerCase(); // Convert input value to lowercase
    setSearchParam(query); // Update search parameter state
    if (query.length >= 1) {
      // Check if input length is at least 1
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1) // Filter users based on search query
          : [];
      setFilteredUsers(filteredData); // Update filtered users state
      setShowDropDown(true); // Show drop-down
    } else {
      setShowDropDown(false); // Hide drop-down if input is empty
    }
  }

  // Function to handle click on a suggestion item.
  function handleClick(event) {
    setShowDropDown(false); // Hide drop-down
    setSearchParam(event.target.innerText); // Set search parameter based on clicked suggestion
    setFilteredUsers([]); // Clear filtered users
  }

  // Function to fetch the list of users from the API.
  async function fetchListOfUsers() {
    try {
      setLoading(true); // Set loading status to true
      const response = await fetch(url); // Fetch data from API
      const data = await response.json(); // Parse response JSON
      if (data && data.users && data.users.length) {
        // Check if users data exists
        setUsers(data.users.map((userItem) => userItem.firstName)); // Extract and set user names
        setLoading(false); // Set loading status to false
        setError(null); // Clear any previous errors
      }
    } catch (error) {
      console.log(error); // Log error to console
      setError(error); // Set error state
      setLoading(false); // Set loading status to false
    }
  }

  // useEffect hook to fetch the list of users when the component mounts.
  useEffect(() => {
    fetchListOfUsers(); // Fetch list of users
  }, []);

  // Rendering JSX for the SearchAutoComplete component.
  return (
    <div className="search-autocomplete-container">
      <h1 id="SearchAutoComplete">Project 12 - Search Autocomplete</h1>
      {/* Rendering loading message if loading is true */}
      {loading ? (
        <h1>Loading.. please wait</h1>
      ) : (
        // Rendering input field for user search
        <input
          style={{
            fontSize: "18px",
          }}
          value={searchParam}
          type="text"
          name="search"
          placeholder="Search for user"
          onChange={handleChange} // Call handleChange function on input change
        />
      )}
      {/* Rendering suggestions dropdown if showDropDown is true */}
      {showDropDown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
}
