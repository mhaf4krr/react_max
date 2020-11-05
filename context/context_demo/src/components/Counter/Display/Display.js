import React, { Component } from "react";

import CounterContext from "../../../context/CounterContext";

export default class Display extends Component {
  static contextType = CounterContext;

  componentDidMount() {
    console.log(this.context);
  }

  render() {
    return (
      <div style={styles}>
        <input
          style={styles.input}
          value={this.context.count}
          onChange={() => {}}
        />
      </div>
    );
  }
}

const styles = {
  marginTop: "80px",
  width: "100%",
  position: "relative",
  input: {
    width: "60%",
    padding: "15px 25px",
    fontSize: "30px",
    textAlign: "center",
  },
};
