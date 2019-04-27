import React from "react";
import SingleColor from "../colorWrapper/singleColor";
import GradientColor from "../colorWrapper/gradientColor/gradientColor";
import styles from "./displayColor.module.css";

const DisplayColor = ({ firstColor, secondColor, ...rest }) => (
  <section className={styles.wrapper}>
    <SingleColor color={firstColor} id="firstColor" {...rest} />
    <SingleColor color={secondColor} id="secondColor" {...rest} />
    <GradientColor colors={[firstColor, secondColor]} id="gradientColor" {...rest} />
  </section>
);

export default DisplayColor;
