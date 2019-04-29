import React from "react";
import Button from "../buttons/buttons";
import styles from "../../helpers/wrapper.module.css";

export default ({ getRandomNumber }) => (
  <div className={styles.wrapper} style={{ marginTop: "3rem" }}>
    <Button name="firstColor" text="First Color 🎨" variant="button--primary" handleClick={getRandomNumber} />
    <Button name="secondColor" text="Second Color 🎨" variant="button--primary" handleClick={getRandomNumber} />
  </div>
);
