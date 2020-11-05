import React, { Component } from "react";

import Display from "./Display/Display";
import Controls from "./Controls/Controls";

import CounterContext from "../../context/CounterContext";

export default class Counter extends Component {
  state = {
    count: 0,
  };

  incHandler = () => {
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  decHandler = () => {
    this.setState((prevState, props) => {
      return {
        count: prevState.count - 1,
      };
    });
  };

  clearHandler = () => {
    this.setState((prevState, props) => {
      return {
        count: 0,
      };
    });
  };

  render() {
    return (
      <div style={styles}>
        <CounterContext.Provider
          value={{
            count: this.state.count,
            incHandler: this.incHandler,
            decHandler: this.decHandler,
            clearHandler: this.clearHandler,
          }}>
          <Display />
          <Controls />
        </CounterContext.Provider>
      </div>
    );
  }
}

const styles = {
  width: "400px",
  height: "300px",
  backgroundColor: "yellow",
  textAlign: "center",
  border: "2px solid black",
};
