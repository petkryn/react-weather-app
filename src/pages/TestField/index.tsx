import "./style.css";
import { FC, useEffect, useState } from "react";
import Counter from "../../components/Counter";
import NamesArray from "../../components/NamesArray";
import TaskList from "../../components/TaskList";
import { tasks } from "../../data/tasks";
import UserList from "../../components/UserList";
// import { users } from "../../data/users";
import FruitsArray from "../../components/FruitsArray";
import CitiesArray from "../../components/CitiesArray";
import RemoveNames from "../../components/RemoveNames";
import MenuComponent from "../../components/MenuComponent";
import { menuList } from "../../data/menuList";
import Login from "../Login";
import SignUp from "../SignUp";
import SquereAdding from "../../components/SquereAdding";
import TodoList from "../../components/TodoList";
import { todos } from "../../data/todos";
import FormInput from "../../components/FormInput";
import ShoppingList from "../../components/ShoppingList";
import { list } from "../../data/list";
import Notes from "../../components/Notes";
import TodosList from "../../components/TodosList";

const TestField: FC = () => {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  return (
    <div className="wrapper">
      {/* <Counter /> */}
      <TodosList todos={todos} />

      {/* <NamesArray /> */}
      {/* <RemoveNames /> */}
      {/* <TaskList tasks={tasks} /> */}
      {/* <UserList users={users} /> */}
      {/* <FruitsArray /> */}
      {/* <MenuComponent /> */}
      {/* <CitiesArray /> */}
      {/* <Login />
      <SignUp /> */}
      {/* <SquereAdding /> */}
      {/* <Notes /> */}
      {/* <TodoList items={todos} /> */}
      {/* <FormInput /> */}
      {/* <ShoppingList items={list} /> */}
    </div>
  );
};

export default TestField;
