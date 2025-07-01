import { FC, useState } from "react";

const FruitsArray = () => {
  const [fruit, setFruits] = useState<string[]>([]);

  const addFruit = () => {
    setFruits((prevState) => {
      return [...prevState, "Lemon"];
    });
  };

  return (
    <div>
      <button onClick={addFruit}>Фрукти</button>
      {fruit.join("-")};
    </div>
  );
};

export default FruitsArray;
