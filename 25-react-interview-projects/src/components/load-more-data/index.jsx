import { useEffect, useState } from "react"; // Importing necessary hooks from React
import "./styles.css"; // Importing CSS file for styling

export default function LoadMoreData() {
  // Declaring a functional component called LoadMoreData
  const [loading, setLoading] = useState(false); // State variable to track loading status
  const [products, setProducts] = useState([]); // State variable to store fetched products data
  const [count, setCount] = useState(0); // State variable to track the count of loaded products
  const [disableButton, setDisableButton] = useState(false); // State variable to disable load more button

  async function fetchProducts() {
    // Asynchronous function to fetch products from the API
    try {
      setLoading(true); // Set loading state to true

      const response = await fetch(
        // Fetching data from the API
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }` // Constructing URL with pagination parameters
      );
      const result = await response.json(); // Parsing the response data as JSON

      if (result && result.products && result.products.length) {
        // If products data is successfully fetched
        setProducts((prevData) => [...prevData, ...result.products]); // Update products state with the fetched data
        setLoading(false); // Set loading state to false
      }

      console.log(result); // Logging the fetched data
    } catch (e) {
      // Catching any errors that occur during the fetch process
      console.log(e); // Logging the error
      setLoading(false); // Set loading state to false
    }
  }

  useEffect(() => {
    // Effect hook to fetch products when the count state changes
    fetchProducts(); // Fetch products
  }, [count]);

  useEffect(() => {
    // Effect hook to check if the maximum number of products is reached
    if (products && products.length === 100) setDisableButton(true); // If the number of products reaches 100, disable the load more button
  }, [products]);

  if (loading) {
    // Conditionally rendering a loading message while data is being fetched
    return <div>Loading data! Please wait.</div>;
  }

  return (
    // Rendering the LoadMoreData component
    <div className="load-more-container">
      <h1>Project 5</h1>
      {/* Container for the load more data section */}
      <div className="products-container">
        {/* Container for displaying products */}
        {products && products.length // Conditionally rendering products if products array exists and is not empty
          ? products.map(
              (
                item // Mapping through the products array to render each product
              ) => (
                <div className="product" key={item.id}>
                  {/* Container for each product */}
                  <img src={item.thumbnail} alt={item.title} />
                  {/* Image element for displaying product thumbnail */}
                  <p>{item.title}</p>
                  {/* Paragraph element for displaying product title */}
                </div>
              )
            )
          : null}
        {/* If products array does not exist or is empty, render nothing */}
      </div>
      <div className="button-container">
        {/* Container for the load more button */}
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          {/* Load more button */}
          Load More Products
        </button>
        {disableButton ? <p>You have reached 100 products</p> : null}
        {/* Display message when maximum products limit is reached */}
      </div>
    </div>
  );
}
