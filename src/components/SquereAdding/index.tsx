import "./style.css";
import { FC, useEffect, useState } from "react";
import Button from "../Button";

const SquereAdding = () => {
  const [squares, setSquares] = useState([1]);
  const [squaresRed, setSquaresRed] = useState([1]);
  const [squaresYellow, setSquaresYellow] = useState([1]);

  const handleClick = () => {
    setSquares((prev) => [...prev, prev.length + 1]);
  };

  const handleClickRed = () => {
    setSquaresRed((prev) => [...prev, prev.length + 1]);
  };

  const handleClickYellow = () => {
    setSquaresYellow((prev) => [...prev, prev.length + 1]);
  };

  // useEffect(() => {
  //   // console.log("Зелений квадрат додано");
  // });

  useEffect(() => {
    console.log("Червоний або жовтий квадрат додано");
  }, [squaresRed, squaresYellow]);

  // useEffect(() => {
  //   console.log("Жовтий квадрат додано");
  // }, [squaresYellow]);

  return (
    <div>
      <div className="square-list">
        {squares.map((el) => (
          <div key={el} className="square"></div>
        ))}
      </div>

      <div className="square-list">
        {squaresRed.map((el) => (
          <div key={el} className="red__square"></div>
        ))}
      </div>

      <div className="square-list">
        {squaresYellow.map((el) => (
          <div key={el} className="yellow__square"></div>
        ))}
      </div>

      <Button customClick={handleClick}>add green squere</Button>
      <Button customClick={handleClickRed}>add red squere</Button>
      <Button customClick={handleClickYellow}>add yellow squere</Button>
    </div>
  );
};

export default SquereAdding;
