import "./style.css";
import { FC, useEffect, useState } from "react";
import Input from "../../components/Input";

const Notes = () => {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem("key") || ""
  );

  useEffect(() => {
    localStorage.setItem("key", inputValue);
  }, [inputValue]);

  return (
    <div>
      <Input
        customType="text"
        customPlaceholder="input item"
        isDisabled={false}
        customValue={inputValue}
        customOnChange={(event) => setInputValue(event.target.value)}
      />
    </div>
  );
};

export default Notes;
