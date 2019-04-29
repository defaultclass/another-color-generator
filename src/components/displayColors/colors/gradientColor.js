import React, { useState } from "react";
import ColorWrapper from "../colorWrapper";
import SetDeg from "../setDeg/setDeg";
import CopyClipboard from "../../copyClipboard/copyClipboard";

export default ({ colors, id }) => {
  // Allow the user to adjust the position
  // of the linear-gradient.
  // Add radial option in the future.
  const [deg, setDeg] = useState(180);
  const setDegValue = event => setDeg(event.target.value);
  const backgroundGradient = `linear-gradient(${deg}deg, rgb(${colors[0].join(", ")}), rgb(${colors[1].join(", ")}))`;
  return (
    <>
      <ColorWrapper style={{ background: backgroundGradient }} />
      <SetDeg value={deg} handleChange={setDegValue} />
      <CopyClipboard value={backgroundGradient} id={id} />
    </>
  );
};
