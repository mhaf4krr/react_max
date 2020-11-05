import React from "react";

class App2 extends React.Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <input value={this.state.count} />{" "}
        <button onClick={this.handleIncrement}> Increment</button>
      </div>
    );
  }
}

export default App2;
