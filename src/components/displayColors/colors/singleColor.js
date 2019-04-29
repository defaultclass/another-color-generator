import React from "react";
import CopyClipboard from "../../copyClipboard/copyClipboard";

import ColorWrapper from "../colorWrapper";

export default ({ color, id }) => {
  const backgroundColor = `rgb(${color.join(", ")})`;
  return (
    <>
      <ColorWrapper style={{ backgroundColor: backgroundColor }} />
      <CopyClipboard value={backgroundColor} id={id} />
    </>
  );
};
