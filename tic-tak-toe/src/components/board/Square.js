const Square = (props) => {
  return (
    <button
      onClick={props.onSquareClick}
      className="bg-zinc-100 font-medium text-rose-600 text-3xl md:text-6xl md:h-24 h-16"
    >
      {props.value}
    </button>
  );
};

export default Square;
