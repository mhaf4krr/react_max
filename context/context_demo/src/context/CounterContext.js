import React from "react";

const CounterContext = React.createContext({
  count: 0,
  incHandler: () => {},
  decHandler: () => {},
  clearHandler: () => {},
});

export default CounterContext;
