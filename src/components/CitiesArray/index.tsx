import "./style.css";
import { FC, useState } from "react";
import Button from "../Button";

const CitiesArray = () => {
  const [cities, setCities] = useState<string[]>([]);

  const addCity = () => {
    setCities((prevState) => {
      return [...prevState, "Lviv"];
    });
  };

  return (
    <div>
      <Button customClick={addCity}>Місто</Button>
      {cities.join("-")}
    </div>
  );
};

export default CitiesArray;
