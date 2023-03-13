import { useState } from "react";
import Board from "./board/Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 !== 0;
  const cuurentSqaures = history[currentMove];

  const handlePlay = (nextSqaures) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSqaures];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <button
        key={move}
        className="border-2 px-6 py-1 text-sm md:text-base border-rose-700 mb-2"
        onClick={() => jumpTo(move)}
      >
        {description}
      </button>
    );
  });

  return (
    <div className="m-5 h-100 md:h-auto container max-w-6xl bg-gradient-to-tl  from-rose-300 via-rose-200 shadow-xl to-rose-100 p-3 rounded-2xl">
      <div className="flex flex-col md:flex-row md:h-auto h-98 space-y-5  md:space-x-5 md:space-y-0 justify-start md:justify-around items-center bg-zinc-100 py-2 md:py-10 rounded-2xl">
        <div>
          <Board
            xIsNext={xIsNext}
            squares={cuurentSqaures}
            onPlay={handlePlay}
          />
        </div>
        <div>
          <div className="flex flex-col">{moves}</div>
        </div>
      </div>
    </div>
  );
};

export default Game;
