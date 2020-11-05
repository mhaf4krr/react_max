import React, { Component } from "react";

import CounterContext from "../../../context/CounterContext";

export default class Controls extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <CounterContext.Consumer>
          {(context) => {
            return (
              <div>
                <button onClick={context.incHandler} style={styles.btnGreen}>
                  INC
                </button>
                <button onClick={context.decHandler} style={styles.btnOrange}>
                  DEC
                </button>
                <button onClick={context.clearHandler} style={styles.btnRed}>
                  CLEAR
                </button>
              </div>
            );
          }}
        </CounterContext.Consumer>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    display: "flex",
    marginTop: "30px",
    justifyContent: "center",
  },

  btnRed: {
    padding: "15px 20px",
    backgroundColor: "red",
    margin: "auto 10px",
  },
  btnGreen: {
    padding: "15px 20px",
    backgroundColor: "green",
    margin: "auto 10px",
  },

  btnOrange: {
    padding: "15px 20px",
    backgroundColor: "orange",
    margin: "auto 10px",
  },
};
