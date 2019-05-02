import React from "react";
// import { handleCopy } from "../../helpers/copyClipboard";
import styles from "./copyClipboard.module.css";
import Clipboard from "react-feather/dist/icons/clipboard";

export default ({ value, id, selected, handleCopy }) => {
  const text = selected !== id ? "copy" : "copied";
  console.log(selected, id);
  return (
    <label htmlFor={id} className={styles.label}>
      <span className={styles.text}>
        {text} <Clipboard style={{ marginLeft: 8 }} />
      </span>
      <input readOnly type="text" className={styles.input} value={value} id={id} onClick={handleCopy} />
    </label>
  );
};
