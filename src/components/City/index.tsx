import "./style.css";
import { FC } from "react";
import photo from "../../assets/photo.jpg";


interface CityInterface {
  name: string;
  region: string;
  country: string;
  population: number;
  isSanatorium: boolean;
}

interface CityProps {
  data: CityInterface;
}

const City: FC<CityProps> = ({ data }) => {
  return (
    <div>
      <img className="img__photo" src={photo} alt="Фото міста" />
      <p>Name: {data.name}</p>
      <p>Region: {data.region}</p>
      <p>Country: {data.country}</p>
      <p>Population: {data.population}</p>
      <p>Is Sanatorium: {data.isSanatorium ? "Yes" : "No"}</p>
    </div>
  );
};

export default City;
