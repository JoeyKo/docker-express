import React from "react";
import styles from "./Input.module.scss";

function Input(props) {
  return (
    <input
      className={styles.input}
      type="text"
      maxLength="100"
      autoComplete="off"
      {...props}
    />
  );
}

export default Input;
