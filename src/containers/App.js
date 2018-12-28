import React, { Component } from "react";
import "./App.css";
//import SideDrawer from "../components/SideDrawer";
import BootstrapNavBar from "../components/BootstrapNavBar";
import JumboIntro from "../components/JumbotronSection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BootstrapNavBar />
        <JumboIntro />
      </div>
    );
  }
}

export default App;
