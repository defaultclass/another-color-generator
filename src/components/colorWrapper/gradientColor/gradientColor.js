import React, { useState } from "react";
import colorWrapper from "../colorWrapper";
import GradientInput from "../../displayColor/gradientInput/gradientInput";
import CopyToClipboard from "../../copyToClipboard/copyToClipboard";
import styles from "./gradientColor.module.css";

const Color = props => {
  const { colors, className, ...rest } = props;
  const [radial, setRadial] = useState(180);
  const bgGradient = `linear-gradient(${radial}deg, rgb(${colors[0].join(
    ", "
  )}), rgb(${colors[1].join(", ")}))`;
  const style = { background: bgGradient };
  const setRadialValue = event => setRadial(event.target.value);
  return (
    <div>
      <div style={style} className={className} />
      <div className={styles.wrapper}>
        <CopyToClipboard value={bgGradient} {...rest} />
        <GradientInput value={radial} handleChange={setRadialValue} />
      </div>
    </div>
  );
};

const GradientColor = colorWrapper(Color);

export default GradientColor;
