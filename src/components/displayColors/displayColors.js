import React from "react";
import Color from "./colors/singleColor";
import Gradient from "./colors/gradientColor";
import styles from "../../helpers/wrapper.module.css";

export default ({ firstColor, secondColor }) => (
  <div className={styles.wrapper} style={{ marginTop: "3rem" }}>
    <Color color={firstColor} id="firstColor" />
    <Color color={secondColor} id="secondColor" />
    <Gradient colors={[firstColor, secondColor]} id="gradientColor" />
  </div>
);
