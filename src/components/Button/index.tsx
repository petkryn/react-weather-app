// import "./style.css";

// function Button({ buttonText }: { buttonText: string }) {
//   return <button className="btn">{buttonText}</button>;
// }

import "./style.css";
import React from "react";

interface ButtonProps {
  customClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ customClick, children }) => {
  return (
    <button className="btn" onClick={customClick}>
      {children}
    </button>
  );
};

export default Button;
