import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import ReusableComponents from "./reusableComponent";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h5 className="text-dark text-center"> Welcome User-Cards</h5>
      <div className="container-fluid">
        <ReusableComponents />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
