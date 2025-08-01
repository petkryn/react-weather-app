import "./style.css";
import { FC, useState } from "react";
import Button from "../Button";
import { names } from "../../data/names";

const NamesArray = () => {
  const [currentNames, setCurrentNames] = useState<string[]>([...names]);
  const [count, setCount] = useState<number>(0);

  const handleNameRemove = () => {
    setCount((prevState) => prevState - 1);

    setCurrentNames((prevState) => {
      if (prevState.length === 0) return prevState;
      return prevState.slice(0, -1);
    });
  };

  return (
    <div className="remove-names">
      <Button customClick={handleNameRemove}>Видалити одне ім'я</Button>
      {count}
      {currentNames.join("-")}
    </div>
  );
};

export default NamesArray;
