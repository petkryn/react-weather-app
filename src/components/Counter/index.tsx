import "./style.css";
import React, { useState } from "react";
import Button from "../Button";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleDecrease = () => {
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
        <Button customClick={handleDecrease}>- Зменшити</Button>
        <Button customClick={handleIncrease}>+ Збільшити</Button>
      </div>
    </div>
  );
};

export default Counter;
