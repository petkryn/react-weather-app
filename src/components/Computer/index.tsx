import "./style.css";
import { FC } from "react";

interface ComputerInterface {
  processorName: string;
  yearsOfUse: number;
  country: string;
  isUsed: boolean;
  isIntegrated: boolean;
}

interface ComputerProps {
  data: ComputerInterface;
}

const Computer: FC<ComputerProps> = ({ data }) => {
  return (
    <div>
      <p>Processor Name: {data.processorName}</p>
      <p>Years of Use: {data.yearsOfUse}</p>
      <p>Country: {data.country}</p>
      <p>Is Used: {data.isUsed ? "Yes" : "No"}</p>
      <p>Is Integrated: {data.isIntegrated ? "Yes" : "No"}</p>
    </div>
  );
};

export default Computer;
