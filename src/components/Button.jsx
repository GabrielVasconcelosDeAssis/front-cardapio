import React from "react";

function Button({ color = "blue", text }) {
  const styleText =
    color === "red"
      ? "px-2 py-2 rounded font-semibold text-white transition-colors duration-200"
      : color === "blue"
      ? "p-0 font-semibold transition-colors duration-200"
      : "px-4 py-2 rounded font-semibold text-white transition-colors duration-200 hover:p-4";
 
 const colorButton = {
    blue: "bg-transparent text-blue-500 underline p-0 rounded-none hover:text-blue-600",
    red: "bg-red-500 hover:bg-red-600",
    green: "bg-green-500 hover:bg-green-600",
    yellow: "bg-yellow-500 hover:bg-yellow-600 text-black",
    purple: "bg-purple-500 hover:bg-purple-600",
  };

  return (
      <div className={"p-5"}>
      <button className={`${styleText} ${colorButton[color]}`}>
      {text}
    </button>
    </div>
  );
}

export default Button;