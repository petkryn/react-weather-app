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

const TestField: FC = () => {
  return (
    <div>
      <div>
        <Counter />
      </div>
      <NamesArray />
      <RemoveNames />
      {/* <TaskList tasks={tasks} /> */}
      {/* <UserList users={users} /> */}
      <FruitsArray />
      // <CitiesArray />
    </div>
  );
};

export default TestField;
