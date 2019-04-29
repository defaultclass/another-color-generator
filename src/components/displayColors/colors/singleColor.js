import React from "react";
import ColorWrapper from "../colorWrapper";
import CopyClipboard from "../../copyClipboard/copyClipboard";
import styles from "../../../helpers/color.module.css";

export default ({ color, id }) => {
  const backgroundColor = `rgb(${color.join(", ")})`;
  return (
    <div className={styles.color}>
      <ColorWrapper style={{ backgroundColor: backgroundColor }} />
      <CopyClipboard value={backgroundColor} id={id} />
    </div>
  );
};
