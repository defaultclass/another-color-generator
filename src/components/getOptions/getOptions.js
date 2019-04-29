import React from "react";
import Button from "../buttons/buttons";
import styles from "../../helpers/wrapper.module.css";

export default ({ options, selected, setOption }) => {
  const option = options.map(color => (
    <Button
      key={color}
      name={color}
      variant={selected === color ? `button-text--${color}` : "button-text--primary"}
      text={color}
      handleClick={setOption}
    />
  ));
  return <div className={styles.wrapper}>{option}</div>;
};
