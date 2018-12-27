import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SideDrawer from "./components/SideDrawer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideDrawer />
        <body className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is the <code>beginning</code> of this website
          </p>
        </body>
      </div>
    );
  }
}

export default App;
