import React from "react";
import buttonWrapper from "./buttonWrapper";

const Button = props => {
  const { text, handleClick, ...rest } = props;
  return (
    <button {...rest} onClick={handleClick}>
      {text}
    </button>
  );
};

const SetOptionButton = buttonWrapper(Button);

export default SetOptionButton;
