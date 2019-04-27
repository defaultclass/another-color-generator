import React from "react";
import styles from "./copyToClipboard.module.css";

const CopyToClipboard = ({ setSelected, id, copied, ...rest }) => {
  const copyCSS = event => {
    const id = event.target.id;
    const target = document.getElementById(id);
    target.select();
    document.execCommand("copy");
  };
  const handleClick = event => {
    copyCSS(event);
    setSelected(event.target.id);
  };
  return (
    <label tabIndex="0" htmlFor={id} className={styles.label}>
      <span>{copied === id ? "Copied" : "Copy"} CSS</span>
      <input
        readOnly
        type="text"
        className={styles.input}
        id={id}
        {...rest}
        onClick={handleClick}
      />
    </label>
  );
};

export default CopyToClipboard;
