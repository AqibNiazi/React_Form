import React from "react";
import Button from "./Button";
import styles from "./ErrorModel.module.css";
const ErrorModel = ({ title, messages }) => {
  return (
    <Card className={styles?.model}>
      <header className={styles?.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles?.content}>
        <p>{messages}</p>
      </div>
      <footer className={styles.actions}>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};

export default ErrorModel;
