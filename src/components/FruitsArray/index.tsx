import { FC, useState } from "react";

const FruitsArray = () => {
  const [fruits, setFruits] = useState<string[]>([]);

  const addFruit = () => {
    setFruits((prevState) => {
      return [...prevState, "Lemon"];
    });
  };

  return (
    <div>
      <button onClick={addFruit}>Фрукти</button>
      {fruits.join("-")};
    </div>
  );
};

export default FruitsArray;
