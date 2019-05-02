import React from "react";
import Color from "./colors/singleColor";
import Gradient from "./colors/gradientColor";
import styles from "./displayColors.module.css";

export default ({ firstColor, secondColor, selected, getRandomNumber, handleCopy }) => {
  console.log(handleCopy);
  return (
    <div className={styles.wrapper}>
      <Color
        color={firstColor}
        id="firstColor"
        selected={selected}
        getRandomNumber={getRandomNumber}
        handleCopy={handleCopy}
      />
      <Color
        color={secondColor}
        id="secondColor"
        selected={selected}
        getRandomNumber={getRandomNumber}
        handleCopy={handleCopy}
      />
      <Gradient colors={[firstColor, secondColor]} id="gradientColor" selected={selected} handleCopy={handleCopy} />
    </div>
  );
};
