import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./sytles.module.css";
import ErrorModal from "../UI/ErrorModal";

const Users = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState();
  const [error, setError] = useState(null);
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empety values)",
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    props.onAddUsers(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };

  const onUernameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const onAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
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
            value={enteredName}
            onChange={onUernameChangeHandler}
          />
          <label htmlFor="age">Age(year)</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={onAgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default Users;
