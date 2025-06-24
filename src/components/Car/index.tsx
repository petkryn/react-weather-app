import { FC } from "react";

interface CarInterface {
  name: string;
  model: string;
  country: string;
  isUsed: boolean;
  passanger: number;
}

interface CarProps {
  data: CarInterface;
}

const Car: FC<CarProps> = ({ data }) => {
  return (
    <div>
      <p>name:{data.name}</p>
      <p>model:{data.model}</p>
      <p>country:{data.country}</p>
      <p>isUsed: {data.isUsed ? "Yes" : "No"}</p>
      <p>passanger:{data.passanger}</p>
    </div>
  );
};

export default Car;
