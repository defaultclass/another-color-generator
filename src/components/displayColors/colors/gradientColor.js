import React, { useState } from "react";
import ColorWrapper from "../colorWrapper";
import SetDeg from "../setDeg/setDeg";
import CopyClipboard from "../../copyClipboard/copyClipboard";
import styles from "../../../helpers/color.module.css";

export default ({ colors, id }) => {
  // Allow the user to adjust the position
  // of the linear-gradient.
  // Add radial option in the future.
  const [deg, setDeg] = useState(180);
  const setDegValue = event => setDeg(event.target.value);
  const backgroundGradient = `linear-gradient(${deg}deg, rgb(${colors[0].join(", ")}), rgb(${colors[1].join(", ")}))`;
  return (
    <div className={styles.color}>
      <ColorWrapper style={{ background: backgroundGradient }} />
      <CopyClipboard value={backgroundGradient} id={id} />
      <SetDeg value={deg} handleChange={setDegValue} />
    </div>
  );
};
