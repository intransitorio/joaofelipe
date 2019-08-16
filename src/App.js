import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Sem tempo, irmão... </p>
          <a
            className="App-link"
            href="mailto:contato@joaofelipe.dev?subject=Contato%20do%20site%20🚀"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chama
          </a>
        </header>
      </div>
    );
  }
}

export default App;
