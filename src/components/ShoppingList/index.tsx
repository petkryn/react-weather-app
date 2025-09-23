import "./style.css";
import { FC, useState } from "react";
import Button from "../../components/Button";

interface ShoppingListProps {
  items: string[];
}

const ShoppingList: FC<ShoppingListProps> = ({ items }) => {
  const [shopList, setShopList] = useState<string[]>([...items]);

  const handleDeleteList = () => {
    setShopList([]);
  };

  return (
    <div>
      <ul className="list__style">
        {shopList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <Button customClick={handleDeleteList}>Delete task</Button>
    </div>
  );
};

export default ShoppingList;
