import React from "react";

export default ({ value, handleChange }) => (
  <label htmlFor="gradientInput">
    <span>Adjust Gradient</span>
    <input type="range" min="0" max="360" step="1" id="gradientInput" value={value} onChange={handleChange} />
  </label>
);
