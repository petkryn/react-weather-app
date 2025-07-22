import "./style.css";
import { FC, useState } from "react";
import Button from "../Button";
import { menuList } from "../../data/menuList";

// interface MenuInterface {
//   name: string;
//   price: number;
// }

// interface MenuProps {
//   menuListData: MenuInterface[];
// }

// const MenuComponent: FC<MenuProps> = ({ menuListData }) => {
//   return (
//     <div>
//       {menuListData.map((item) => (
//         <div>{item.name}: {item.price}</div>
//       ))}

//     </div>
//   );
// };

interface MenuInterface {
  name: string;
  price: number;
}

const MenuComponent = () => {
  const [menuListData, setMenuListData] = useState<MenuInterface[]>([
    ...menuList,
  ]);

  let isDisabled = false;

  const handleDiscount = () => {
    isDisabled = true;
    setMenuListData((prevState) => {
      return prevState.map((item) => {
        const newPrice = item.price * 0.9;
        return { ...item, price: newPrice };
      });
    });
  };

  return (
    <>
      <div>
        {menuListData.map((item, index) => (
          <div key={index}>
            {item.name}: {item.price}
          </div>
        ))}
      </div>

      <Button isDisabled={isDisabled} customClick={handleDiscount}>
        Знизити ціни на 10%
      </Button>
    </>
  );
};

export default MenuComponent;
