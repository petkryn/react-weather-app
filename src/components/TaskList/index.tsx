import { FC } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <li key={task.id}>
          [{task.completed ? "x" : " "}] {task.text}
        </li>
      ))}
    </div>
  );
};

export default TaskList;
