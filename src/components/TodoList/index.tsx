import "./style.css";
import { FC, useState } from "react";
import Button from "../../components/Button";

interface TodoListProps {
  items: string[];
}

const TodoList: FC<TodoListProps> = ({ items }) => {
  const [list, setList] = useState<string[]>([...items]);

  const handleDeleteTask = () => {
    const newList = [...list];
    newList.pop();
    setList(newList);
  };

  return (
    <div>
      <ul className="todo__style">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <Button customClick={handleDeleteTask}>Delete task</Button>
    </div>
  );
};

export default TodoList;
