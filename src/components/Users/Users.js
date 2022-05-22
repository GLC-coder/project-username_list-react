import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./sytles.module.css";
import ErrorModal from "../UI/ErrorModal";

const Users = (props) => {
  const userNameRef = useRef();
  const userAgeRef = useRef();
  
  const [error, setError] = useState(null);
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUserName = userNameRef.current.value
    const enteredUserAge = userAgeRef.current.value
    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empety values)",
      });
      return;
    }
    if (+enteredUserAge < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    props.onAddUsers(enteredUserName, enteredUserAge);
    userNameRef.current.value = ""
    userAgeRef.current.value = ""
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="usename">Username</label>
          <input
            type="text"
            id="usename"
            ref={userNameRef}
          />
          <label htmlFor="age">Age(year)</label>
          <input
            type="number"
            id="age"
            ref={userAgeRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};
export default Users;
