import "./style.css";
import { FC } from "react";
import Counter from "../../components/Counter";
import NamesArray from "../../components/NamesArray";
import TaskList from "../../components/TaskList";
import { tasks } from "../../data/tasks";
import UserList from "../../components/UserList";
import { users } from "../../data/users";
import FruitsArray from "../../components/FruitsArray";
import CitiesArray from "../../components/CitiesArray";
import RemoveNames from "../../components/RemoveNames";
import MenuComponent from "../../components/MenuComponent";
import { menuList } from "../../data/menuList";

const TestField: FC = () => {
  return (
    <div className="wrapper">
      <Counter />

      <NamesArray />
      <RemoveNames />
      {/* <TaskList tasks={tasks} /> */}
      {/* <UserList users={users} /> */}
      {/* <FruitsArray /> */}
      <MenuComponent />
      {/* <CitiesArray /> */}
    </div>
  );
};

export default TestField;
