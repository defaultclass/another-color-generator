import React, { useState } from "react";
import ColorWrapper from "../colorWrapper";
import SetDeg from "../setDeg/setDeg";
import styles from "../../../helpers/color.module.css";

export default ({ colors, id, selected, handleCopy }) => {
  // Allow the user to adjust the position
  // of the linear-gradient.
  // Add radial option in the future.
  const [deg, setDeg] = useState(180);
  const setDegValue = event => setDeg(event.target.value);
  const backgroundGradient = `linear-gradient(${deg}deg, rgb(${colors[0].join(", ")}), rgb(${colors[1].join(", ")}))`;
  return (
    <div className={styles.color}>
      <SetDeg value={deg} handleChange={setDegValue} />
      <ColorWrapper
        value={backgroundGradient}
        id={id}
        selected={selected}
        style={{ background: backgroundGradient }}
        handleCopy={handleCopy}
      />
    </div>
  );
};
