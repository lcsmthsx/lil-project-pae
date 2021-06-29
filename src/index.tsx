import React from "react";
import ReactDOM from "react-dom";
import Order from "./Order";

const order = {
  food: "sorvete",
  flavor: "napolitano"
};

function App() {
  return <Order {...order} />;
}

ReactDOM.render(<App />, document.getElementById("root"));
