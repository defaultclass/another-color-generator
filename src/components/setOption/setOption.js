import React from "react";
import SetOptionButton from "../buttonWrapper/setOptionButton";
import styles from "./setOption.module.css";

const SetOption = ({ options, selected, setOption }) => {
  const active =
    selected === "red"
      ? "rgb(244, 9, 35)"
      : selected === "green"
      ? "rgb(28, 211, 40)"
      : "rgb(76, 69, 251)";
  const option = options.map(color => {
    const style = {
      borderColor: color === selected ? active : "",
      color: color === selected ? active : ""
    };
    return (
      <SetOptionButton
        key={color}
        name={color}
        text={color}
        handleClick={setOption}
        specificClass={styles.text}
        style={style}
      />
    );
  });
  return <section className={styles.wrapper}>{option}</section>;
};

export default SetOption;
