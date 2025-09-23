import "./style.css";
import { FC, useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

const FormInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState<string[]>([]);

  const handleAdd = () => {
    setList((previousState) => [...previousState, inputValue]);
    setInputValue("");
  };

  useEffect(() => {
    console.log("Зміна в компоненті відбулася");
  }, [inputValue]);

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <Input
        customType="text"
        customPlaceholder="input item"
        isDisabled={false}
        customValue={inputValue}
        customOnChange={(event) => setInputValue(event.target.value)}
      />
      <Button customClick={handleAdd}>Add value</Button>
    </div>
  );
};
export default FormInput;
