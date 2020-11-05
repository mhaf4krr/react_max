import React from "react";

import styles from "./Layout.module.css";

export default function Layout(props) {
  return (
    <React.Fragment>
      <div>Toolbar , Sidedrawer , Backdrop</div>
      <main className={styles.Content}>{props.children}</main>
    </React.Fragment>
  );
}
