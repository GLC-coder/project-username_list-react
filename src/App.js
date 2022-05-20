import React, { useState } from "react";
import Users from "./components/Users/Users";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUser] = useState([]);

  const onAddUsersHandler = (userName, userAge) => {
    setUser((preViousUsers) => {
      return [
        ...preViousUsers,
        { usern: userName, userage: userAge, userid: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <Users onAddUsers={onAddUsersHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
