import React, { Component } from "react";
import "../style.css";

import BootstrapNavBar from "../components/BootstrapNavBar";
import JumboIntro from "../components/JumbotronSection";
import AboutGrid from "../components/AboutMidGrid";
import AboutMidGrid from "../components/AboutMidGrid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BootstrapNavBar />
        <AboutMidGrid />
        <JumboIntro />
      </div>
    );
  }
}

export default App;
