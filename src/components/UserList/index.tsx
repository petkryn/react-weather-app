import { FC, useEffect } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
}

interface UserListProps {
  users: User[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  
  return (
    <ul>
      {users.map((user) => (
        <li>
          <p>Id: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
