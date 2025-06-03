import "./style.css";
import { FC } from "react";

interface UserInterface {
  name: string;
  age: number;
  country: string;
  hobby: string;
  isMan: boolean;
}

interface UserProps {
  data: UserInterface;
}

const User: FC<UserProps> = ({ data }) => {
  return <div></div>;
};

export default User;
