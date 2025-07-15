import "./style.css";
import { FC, useState } from "react";
import Button from "../Button";
import { names } from "../../data/names";

const NamesArray = () => {
  const [currentNames, setCurrentNames] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);

  const handlePush = () => {
    const newCount = count + 1;
    setCount(newCount);

    if (newCount % 2 == 1) {
      console.log(newCount);
      setCurrentNames((prevState) => [...prevState, names[newCount]]);
    }
  };

  return (
    <div>
      <Button customClick={handlePush}>Додати одне ім'я</Button>
      {count}
      {currentNames.join("-")}
    </div>
  );
};

export default NamesArray;
