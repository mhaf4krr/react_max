import React from "react";

import Counter from "../components/Counter/Counter";

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Counter />
      </div>
    );
  }
}

export default App;
