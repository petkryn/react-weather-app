import { FC } from "react";
import Counter from "../../components/Counter";
import NamesArray from "../../components/NamesArray";
import TaskList from "../../components/TaskList";
import { tasks } from "../../data/tasks";
import UserList from "../../components/UserList";
import { users } from "../../data/users";

const TestField: FC = () => {
  return (
    <div>
      <div>
        <Counter />
      </div>

      <NamesArray />
      <TaskList tasks={tasks} />

      <UserList users={users} />
    </div>
  );
};

export default TestField;
