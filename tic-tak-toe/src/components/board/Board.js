import { useState } from "react";
import Square from "./Square";

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const Board = () => {
  const [xIsNext, setXIsNext] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    if (!squares.includes(null)) status = "Draw: Restart";
    else {
      status = "Player: " + (xIsNext ? "X" : "O");
    }
  }
  return (
    <>
      <h2 className="w-fit text-center text-4xl mt-60 mb-16 font-medium mx-auto px-10 py-3 rounded-xl text-white bg-gradient-to-tl  from-rose-900 via-rose-700 to-rose-500 ">
        {status}
      </h2>
      <div className="grid grid-cols-3 gap-1 mx-auto w-48 h-48 md:w-72 md:h-72 bg-gradient-to-tl from-rose-900 via-rose-700 to-rose-500">
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
        ></Square>
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
        ></Square>
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
        ></Square>
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
        ></Square>
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
        ></Square>
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
        ></Square>
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
        ></Square>
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
        ></Square>
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
        ></Square>
      </div>
    </>
  );
};

export default Board;
