import React from "react";
import Color from "./colors/singleColor";
import Gradient from "./colors/gradientColor";

export default ({ firstColor, secondColor }) => (
  <>
    <Color color={firstColor} id="firstColor" />
    <Color color={secondColor} id="secondColor" />
    <Gradient colors={[firstColor, secondColor]} id="gradientColor" />
  </>
);
