import React, { Component } from "react";

import styles from "./Counter.module.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    switch (this.props.name) {
      case 1:
        this.state.color = "color:brown";
        break;

      case 2:
        this.state.color = "color:blue";
        break;

      default:
        return;
    }
  }

  componentDidMount() {
    console.log(
      `%c [Couner ${this.props.name}] componentDidMount`,
      this.state.color
    );
  }

  componentDidUpdate() {
    console.log(
      `%c [Couner ${this.props.name}] componentDidUpdate`,
      this.state.color
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      `%c [Couner ${this.props.name}] shouldComponentUpdate`,
      "color:red"
    );

    if (nextProps.count !== this.props.count) return true;
    else return false;
  }

  render() {
    console.log(`%c [Couner ${this.props.name}] rendering`, this.state.color);
    return (
      <div className={styles.wrapper}>
        <div className={styles.name}>Counter {this.props.name}</div>
        <div className={styles.display}>{this.props.count}</div>
        <div className={styles.controls}>
          <button className={styles.green} onClick={this.props.incHandler}>
            Increment
          </button>
          <button className={styles.red}>Decrement</button>
        </div>
      </div>
    );
  }
}
