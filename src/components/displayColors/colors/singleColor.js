import React from "react";
import ColorWrapper from "../colorWrapper";
import styles from "../../../helpers/color.module.css";
import Button from "../../buttons/buttons";

export default ({ color, id, selected, getRandomNumber, handleCopy }) => {
  const backgroundColor = `rgb(${color.join(", ")})`;
  return (
    <div className={styles.color}>
      <Button
        name={id}
        text="new color"
        variant="button--primary"
        style={{ width: "100%", marginBottom: "1.5rem" }}
        handleClick={getRandomNumber}
      />
      <ColorWrapper
        value={backgroundColor}
        id={id}
        selected={selected}
        style={{ backgroundColor: backgroundColor }}
        handleCopy={handleCopy}
      />
    </div>
  );
};
