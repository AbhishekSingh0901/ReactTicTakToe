const Button = (props) => {
  const classes =
    "bg-gradient-to-r from-rose-500 to-rose-700 font-bold text-white px-6 py-2  ml-4 rounded-lg shadow-sm hover:bg hover:bg-gradient-to-r hover:from-rose-700 hover:to-rose-900 hover:shadow-xl ";
  return (
    <button
      type={props.type || "button"}
      className={classes}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
