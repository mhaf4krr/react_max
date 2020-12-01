import React from "react";

import styles from "./Layout.module.css";

import Toolbar from "../Navigation/Toolbar/Toolbar"

export default function Layout(props) {
  return (
    <React.Fragment>
      <Toolbar/>
      <main className={styles.Content}>{props.children}</main>
    </React.Fragment>
  );
}
