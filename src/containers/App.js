import React, { Component } from "react";
import "./App.css";
//import SideDrawer from "../components/SideDrawer";
import BootstrapNavBar from "../components/BootstrapNavBar";
import JumboIntro from "../components/JumbotronSection";
import AboutGrid from "../components/AboutMidGrid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BootstrapNavBar />
        <JumboIntro />
        <AboutGrid />
      </div>
    );
  }
}

export default App;
