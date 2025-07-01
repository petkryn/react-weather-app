import "./style.css";
import { FC, useState } from "react";
// import { names } from "../../data/names";

const NamesArray = () => {
  const [currentNames, setCurrentNames] = useState([]);

  const handlePush = () => {
    //@ts-ignore
    setCurrentNames((prevState) => {
      console.log(prevState);
      return [...prevState, "Andrii"];
    });
  };
  // const array: any = [];
  // const newarray = () => {
  //   array.push("Andrii");
  //   console.log(array);
  // };

  // const handleNamePush = () => {
  //   //@ts-ignore
  //   setCurrentNames(["Andrii"]);
  // };

  // const handlePushName = () => {
  //   //@ts-ignore
  //   setCurrentNames(["Den"]);
  // };

  return (
    <div>
      <button onClick={handlePush} className="button">
        Додати всі імена
      </button>

      {/* <button onClick={newarray} className="button">
        імена
      </button>
      {array.join("")} */}
      {/* <button onClick={handleNamePush} className="button">
        Додати ім'я Андрій
      </button>
      <button onClick={handlePushName} className="button">
        Додати ім'я Денис
      </button> */}
      {currentNames.join("-")}
    </div>
  );
};

export default NamesArray;
