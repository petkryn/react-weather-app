import "./style.css";
import React, { useState } from "react";
import Button from "../Button";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

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
        <Button onClick={handleDecrease}>- Зменшити</Button>
        <Button onClick={handleIncrease}>+ Збільшити</Button>
      </div>
    </div>
  );
};

export default Counter;
