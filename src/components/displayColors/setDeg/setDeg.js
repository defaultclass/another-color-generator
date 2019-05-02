import React from "react";
import styles from "./setDeg.module.css";

export default ({ value, handleChange }) => (
  <label htmlFor="gradientInput" className={styles.label}>
    <span className={styles.text}>move gradient</span>
    <div style={{ position: "relative", display: "flex" }}>
      <input
        type="range"
        min="0"
        max="360"
        step="1"
        id="gradientInput"
        className={styles.input}
        value={value}
        onChange={handleChange}
      />
      <span className={styles.progress} style={{ width: `${value / 3.6}%` }} />
    </div>
  </label>
);
