import "./style.css";
import { FC, useState } from "react";
import Button from "../Button";
import { menuList } from "../../data/menuList";

interface MenuInterface {
  name: string;
  price: number;
}

const MenuComponent = () => {
  const [menuListData, setMenuListData] = useState<MenuInterface[]>([
    ...menuList,
  ]);

  const [isReducePriceDisabled, setIsReducePriceDisabled] = useState(false);

  const handleDiscount = () => {
    setIsReducePriceDisabled(true);
    setMenuListData((prevState) => {
      return prevState.map((item) => {
        const newPrice = item.price * 0.9;
        return { ...item, price: newPrice };
      });
    });
  };

  const handleOldPrice = () => {
    setIsReducePriceDisabled(false);
    setMenuListData([...menuList]);
  };

  return (
    <div className="menu">
      <div>
        {menuListData.map((item, index) => (
          <div key={index}>
            {item.name}: {item.price}
          </div>
        ))}
      </div>

      <Button isDisabled={isReducePriceDisabled} customClick={handleDiscount}>
        Знизити ціни на 10%
      </Button>

      <Button isDisabled={!isReducePriceDisabled} customClick={handleOldPrice}>
        Показати стару ціну
      </Button>
    </div>
  );
};

export default MenuComponent;
