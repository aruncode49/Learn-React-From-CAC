const Button = ({ color, onclick }) => {
  return (
    <button
      onClick={() => onclick(color.toLowerCase())}
      className="px-2 py-1 mx-2 my-1 rounded-lg cursor-pointer bg-gree text-white"
      style={{ backgroundColor: color.toLowerCase() }}
    >
      {color}
    </button>
  );
};

export default Button;
