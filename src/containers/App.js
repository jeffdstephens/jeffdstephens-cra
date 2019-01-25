import React, { Component } from "react";
import "../style.css";
import Hero from "../components/Hero";
import BootstrapNavBar from "../components/BootstrapNavBar";
import JumboIntro from "../components/JumbotronSection";
import AboutGrid from "../components/AboutMidGrid";
import LandingPage from "../components/LandingPage";
import AboutMidGrid from "../components/AboutMidGrid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BootstrapNavBar />
        <AboutMidGrid />
      </div>
    );
  }
}

export default App;
