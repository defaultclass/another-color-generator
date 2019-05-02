import React from "react";
import styles from "./buttons.module.css";

const Button = ({ variant, text, handleClick, ...rest }) => (
  <button className={styles[variant]} onClick={handleClick} {...rest}>
    {text}
  </button>
);

export default Button;
