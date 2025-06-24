import "./style.css";
import { FC, useState } from "react";

const NamesArray = () => {
  const [names, setNames] = useState([]);
  const handlePush = () => {
    //@ts-ignore
    setNames(["Den", "Andrii"]);
  };

  return (
    <div>
      <button onClick={handlePush} className="button">
        - Зменшити
      </button>
      {names.join("-")}
    </div>
  );
};

export default NamesArray;
