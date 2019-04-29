import React from "react";
import { handleCopy } from "../../helpers/copyClipboard";

export default ({ value, id }) => {
  return (
    <label htmlFor={id}>
      <span>Copy</span>
      <input readOnly type="text" onClick={handleCopy} value={value} id={id} />
    </label>
  );
};
