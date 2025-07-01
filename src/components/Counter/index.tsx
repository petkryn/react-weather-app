import "./style.css";
import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    // setCount((prevState) => {
    //   console.log(prevState);
    //   return prevState - 1;
    // });
    setCount((prevState) => prevState - 1);
  };

  const handleIncrease = () => {
    setCount(count + 2);
    setCount(count + 2);
  };

  return (
    <div className="counter__info">
      <h2>Лічильник: {count}</h2>
      <div className="buttons">
        <button onClick={handleDecrease} className="button">
          - Зменшити
        </button>
        <button onClick={handleIncrease} className="button">
          + Збільшити
        </button>
      </div>
    </div>
  );
};

export default Counter;
