import React from "react";
import styles from "./color.module.css";

const colorWrapper = WrappedComponent => {
  class Color extends React.Component {
    render() {
      return <WrappedComponent {...this.props} className={styles.color} />;
    }
  }
  return Color;
};

export default colorWrapper;
