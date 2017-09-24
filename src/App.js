import "./App.css";

import React, { Component } from "react";
import ReactDOM from "react-dom";

import MrBombasticContainer from "./MrBombasticContainer";

class App extends Component {
  renderSurprise() {
    ReactDOM.render(
      <MrBombasticContainer />,
      document.getElementById("portal")
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.renderSurprise}>
          Render surprise outside root
        </button>
      </div>
    );
  }
}

export default App;
