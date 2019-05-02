import React from "react";
import styles from "./container.module.css";

const Container = ({ children, ...style }) => (
  <div className={styles.container} {...style}>
    {children}
  </div>
);

export default Container;
