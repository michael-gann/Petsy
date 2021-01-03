import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Spinner from "./components/Spinner";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Spinner />
  </React.StrictMode>,
  document.getElementById("root")
);
