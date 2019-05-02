import React from "react";
import Button from "../buttons/buttons";
import styles from "./getOption.module.css";

export default ({ options, selected, setOption }) => {
  const option = options.map(color => {
    const buttonText = selected !== color ? `more ${color} 🤷🏻‍♀️` : `ya got ${color} 👍`;
    return (
      <Button key={color} name={color} variant={`button-text--${color}`} text={buttonText} handleClick={setOption} />
    );
  });
  return <div className={styles.wrapper}>{option}</div>;
};
