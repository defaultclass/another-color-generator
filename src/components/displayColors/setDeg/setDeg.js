import React from "react";
import styles from "./setDeg.module.css";

export default ({ value, handleChange }) => (
  <label htmlFor="gradientInput" className={styles.label}>
    <span className={styles.text}>Adjust Gradient</span>
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
  </label>
);
