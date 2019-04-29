import React from "react";
import styles from "./colorWrapper.module.css";

export default ({ ...props }) => <div className={styles.wrapper} {...props} />;
