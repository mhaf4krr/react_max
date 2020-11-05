import React, { useState } from "react";

import Counter from "../components/Counter";

export default class App extends React.Component {
  state = {
    count1: 0,
    count2: 0,
  };

  counter1Ref = React.createRef();

  incrementHandler = (number) => {
    switch (number) {
      case 1:
        this.setState({ count1: this.state.count1 + 1 });
        break;

      case 2:
        this.setState({ count2: this.state.count2 + 1 });
        break;

      default:
        return;
    }
  };

  componentDidMount() {
    console.log("[App] componentDidMount");
    console.log(this.counter1Ref.current);
  }

  componentDidUpdate() {
    console.log("[App] componentDidUpdate");
  }

  render() {
    console.log("[App] Rendering");
    return (
      <div className='main_wrapper'>
        <Counter
          ref={this.counter1Ref}
          count={this.state.count1}
          incHandler={() => {
            this.incrementHandler(1);
          }}
          name={1}
        />

        <Counter
          count={this.state.count2}
          incHandler={() => {
            this.incrementHandler(2);
          }}
          name={2}
        />
      </div>
    );
  }
}
