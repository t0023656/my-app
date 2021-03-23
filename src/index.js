// const React = require("react");
// const ReactDom = require("react-dom");

// ES6
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Nav from "./Nav";

ReactDOM.render(
  <React.StrictMode>
    {/* <Nav></Nav> */}
    <App></App>
  </React.StrictMode>,
  document.querySelector("#root")
);
