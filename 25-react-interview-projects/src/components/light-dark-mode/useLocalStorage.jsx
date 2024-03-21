// Importing the useEffect and useState hooks from the React library.
import { useEffect, useState } from "react";

// Defining and exporting the useLocalStorage custom hook.
export default function useLocalStorage(key, defaultValue) {
  // Declaring a state variable named "value" and a function named "setValue" to update it, using the useState hook.
  const [value, setValue] = useState(() => {
    let currentValue;

    // Attempting to retrieve the value from localStorage, parsing it as JSON, or falling back to the defaultValue if there's an error.
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      console.log(error); // Logging any errors that occur during parsing.
      currentValue = defaultValue; // Using defaultValue if there's an error.
    }

    return currentValue; // Returning the initial value.
  });

  // Effect hook to update localStorage whenever the key or value changes.
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value)); // Storing the value in localStorage as a JSON string.
  }, [key, value]); // Depend on key and value so that useEffect is triggered when they change.

  // Returning an array containing the current value and the function to update it.
  return [value, setValue];
}
