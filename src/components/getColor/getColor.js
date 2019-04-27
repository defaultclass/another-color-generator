import React from "react";
import GetColorButton from "../buttonWrapper/getColorButton";
import styles from "./getColor.module.css";

const GetColor = ({ setNumber }) => (
  <section className={styles.wrapper}>
    <GetColorButton
      name="firstColor"
      text="First Color 🎨"
      specificClass={styles.button}
      handleClick={setNumber}
    />
    <GetColorButton
      name="secondColor"
      text="Second Color 🎨"
      specificClass={styles.button}
      handleClick={setNumber}
    />
  </section>
);
export default GetColor;
