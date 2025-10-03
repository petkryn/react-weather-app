import { FC } from "react";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: string;
}

interface TodosProps {
  todos: Todo[];
}

const TodosList: FC<TodosProps> = ({ todos }) => {
  return (
    <ul>
      {todos
        .filter((todo) => todo.id % 2 === 0)
        .map((todo) => (
          <li key={todo.id}>
            <p>userId: {todo.userId}</p>
            <p>id: {todo.id}</p>
            <p>title: {todo.title}</p>
            <p>completed: {todo.completed}</p>
          </li>
        ))}
    </ul>
  );
};

export default TodosList;
