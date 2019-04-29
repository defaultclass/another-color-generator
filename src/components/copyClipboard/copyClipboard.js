import React from "react";
import { handleCopy } from "../../helpers/copyClipboard";
import styles from "./copyClipboard.module.css";

export default ({ value, id }) => {
  return (
    <label htmlFor={id} className={styles.label}>
      <span className={styles.text}>Copy Background</span>
      <input readOnly type="text" className={styles.input} onClick={handleCopy} value={value} id={id} />
    </label>
  );
};
