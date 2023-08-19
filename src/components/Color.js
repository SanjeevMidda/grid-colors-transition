import React, { useState } from "react";

const Color = () => {
  const [color, setColor] = useState("blue");

  let randomColor = () => {
    return Math.floor(Math.random() * 255);
  };

  let newColor = () => {
    setColor(`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
  };

  return (
    <div
      className="color"
      onClick={newColor}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default Color;
