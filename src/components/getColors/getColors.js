import React from "react";
import Button from "../buttons/buttons";

export default ({ getRandomNumber }) => (
  <>
    <Button name="firstColor" text="First Color 🎨" handleClick={getRandomNumber} />
    <Button name="secondColor" text="Second Color 🎨" handleClick={getRandomNumber} />
  </>
);
