import React from "react";
import Button from "./Button";
import styles from "./ErrorModel.module.css";
import Card from "./Card";
const ErrorModel = ({ title, message, onConfirm }) => {
  return (
    <div>
      <div className={styles?.backdrop} onClick={onConfirm} />
      <Card className={styles?.modal}>
        <header className={styles?.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles?.content}>
          <p>{message}</p>
        </div>
        <footer className={styles?.actions}>
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModel;
