import React from "react";
import styles from "./button.module.css";

const buttonWrapper = WrappedComponent => {
  class Button extends React.Component {
    render() {
      const { specificClass, ...rest } = this.props;
      return <WrappedComponent {...rest} className={`${specificClass || ""} ${styles.button}`} />;
    }
  }
  return Button;
};

export default buttonWrapper;
