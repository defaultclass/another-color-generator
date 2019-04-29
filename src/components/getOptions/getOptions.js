import React from "react";
import Button from "../buttons/buttons";

export default ({ options, selected, setOption }) => {
  const option = options.map(color => (
    <Button
      key={color}
      name={color}
      variant={selected === color ? color : "primary"}
      text={color}
      handleClick={setOption}
    />
  ));
  return option;
};
