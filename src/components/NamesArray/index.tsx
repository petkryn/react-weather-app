import "./style.css";
import { FC, useState } from "react";
import Button from "../Button";
import { names } from "../../data/names";

const NamesArray = () => {
  const [currentNames, setCurrentNames] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);

  const handlePush = () => {
    if (count < names.length) {
      console.log(count);
      setCurrentNames((prevState) => [...prevState, names[count]]);
    }

    if (count < names.length) {
      setCount((prevState) => prevState + 1);
    }
  };

  return (
    <div className="names-array">
      <Button customClick={handlePush}>Додати одне ім'я</Button>
      {count}
      {currentNames.join("-")}
    </div>
  );
};

export default NamesArray;
