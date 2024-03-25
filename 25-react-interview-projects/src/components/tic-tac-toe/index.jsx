// Importing React hooks and CSS styles.
import React, { useEffect, useState } from "react";
import "./styles.css";

// Component for rendering individual square buttons.
function Square({ value, onClick }) {
  return (
    // Rendering a button with a click event handler and value.
    <button onClick={onClick} className="square">
      {value} {/* Displaying the value of the square */}
    </button>
  );
}

// Defining and exporting the TicTacToe component.
export default function TicTacToe() {
  // State to manage the game board squares and their values.
  const [squares, setSquares] = useState(Array(9).fill(""));
  // State to track whose turn it is.
  const [isXTurn, setIsXTurn] = useState(true);
  // State to display game status.
  const [status, setStatus] = useState("");

  // Function to determine the winner based on the current board configuration.
  function getWinner(squares) {
    // Array of winning patterns.
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    // Iterating through each winning pattern to check for a win.
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      // Checking if the squares have the same value and are not empty.
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x]; // Returning the winner (X or O)
      }
    }

    return null; // Returning null if there's no winner.
  }

  // Function to handle a square click event.
  function handleClick(getCurrentSquare) {
    // Creating a copy of the current squares array.
    let cpySquares = [...squares];
    // Checking if there's a winner or if the square is already filled.
    if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
    // Setting the value of the clicked square based on the current player.
    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    // Toggling the player turn.
    setIsXTurn(!isXTurn);
    // Updating the squares state with the new configuration.
    setSquares(cpySquares);
  }

  // Function to handle game restart.
  function handleRestart() {
    // Resetting player turn.
    setIsXTurn(true);
    // Resetting the squares array to empty.
    setSquares(Array(9).fill(""));
  }

  // Effect to update game status based on current board configuration.
  useEffect(() => {
    // Checking for a draw.
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus(`This is a draw ! Please restart the game`);
    }
    // Checking for a winner.
    else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}. Please restart the game`);
    }
    // Displaying current player turn.
    else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  // Rendering the TicTacToe game board and controls.
  return (
    <div className="tic-tac-toe-container">
      {/* Game title */}
      <h1 id="TicTacToe">Project 13 - Tic Tac Toe</h1>
      {/* Rendering game board rows */}
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      {/* Displaying game status */}
      <h2>{status}</h2>
      {/* Restart button */}
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}
