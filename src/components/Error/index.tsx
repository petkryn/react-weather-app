import "./style.css";
import React from "react";

interface Errorprops {
  errorText: string;
}

const Error: React.FC<Errorprops> = ({ errorText }) => {
  return <p className="info__error">{errorText}</p>;
};

export default Error;
