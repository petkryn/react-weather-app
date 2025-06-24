import { FC } from "react";
import Counter from "../../components/Counter";
import NamesArray from "../../components/NamesArray";
import TaskList from "../../components/TaskList";
import { tasks } from "../../data/tasks";
import City from "../../components/City";
import { cityInfo } from "../../data/cityInfo";
import { hello } from "../../data/cityInfo";
import UserList from "../../components/UserList";
import { users } from "../../data/users";

const TestField: FC = () => {
  hello();
  return (
    <div>
      <div>
        <Counter />
      </div>

      <NamesArray />
      <TaskList tasks={tasks} />
      <City data={cityInfo} />
      <UserList users={users} />
    </div>
  );
};

export default TestField;
