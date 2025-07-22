// import "./style.css";

// function Button({ buttonText }: { buttonText: string }) {
//   return <button className="btn">{buttonText}</button>;
// }

import "./style.css";
import React from "react";

interface ButtonProps {
  customClick: () => void;
  children: React.ReactNode;
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  customClick,
  children,
  isDisabled,
}) => {
  return (
    <button disabled={isDisabled} className="btn" onClick={customClick}>
      {children}
    </button>
  );
};

export default Button;
