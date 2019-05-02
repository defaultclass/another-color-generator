import React from "react";
import styles from "./colorWrapper.module.css";
import CopyClipboard from "../copyClipboard/copyClipboard";

const ColorWrapper = ({ value, id, selected, handleCopy, ...style }) => (
  <div className={styles.container}>
    <div className={styles.wrapper} {...style} />
    <CopyClipboard value={value} id={id} selected={selected} handleCopy={handleCopy} />
  </div>
);

export default ColorWrapper;
