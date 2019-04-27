import React from "react";
import colorWrapper from "./colorWrapper";
import CopyToClipboard from "../copyToClipboard/copyToClipboard";

const Color = props => {
  const { color, className, ...rest } = props;
  const bgColor = color.join(", ");
  const style = { backgroundColor: `rgb(${bgColor})` };
  return (
    <div>
      <div style={style} className={className} />
      <CopyToClipboard value={`rgb(${bgColor})`} {...rest} />
    </div>
  );
};

const SingleColor = colorWrapper(Color);

export default SingleColor;
