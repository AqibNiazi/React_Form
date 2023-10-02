import React from "react";
import styles from "./UsersList.module.css";
import Card from "../UI/Card";
const UsersList = ({ users }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users?.map((user) => {
          return (
            <li key={user?.id}>
              {user?.name} ({user?.age} years old.)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;