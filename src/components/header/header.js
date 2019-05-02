import React from "react";
import styles from "./header.module.css";
import Container from "../../utils/container";
import { ReactComponent as Swiggle } from "./swiggle.svg";

const Header = () => (
  <header className={styles.header}>
    <Container>
      <h1 className={styles.heading}>another color generator</h1>
      <Swiggle style={{ marginTop: 16, marginLeft: 4 }} />
    </Container>
  </header>
);

export default Header;
