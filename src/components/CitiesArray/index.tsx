import "./style.css";
import { FC, useState } from "react";

const CitiesArray = () => {
  const [fruit, setFruits] = useState<string[]>([]);

  const addCity = () => {
    setFruits((prevState) => {
      return [...prevState, "Lviv"];
    });
  };

  return (
    <div>
      <button className="btn" onClick={addCity}>
        Місто
      </button>
      {fruit.join("-")};
    </div>
  );
};

export default CitiesArray;
