import React, { Component } from "react";
import "../style.css";

import BootstrapNavBar from "../components/BootstrapNavBar";
import JumboIntro from "../components/JumbotronSection";
import AboutMidGrid from "../components/AboutMidGrid";
import Footer from "../components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BootstrapNavBar />
        <AboutMidGrid />
        <Footer />
      </div>
    );
  }
}

export default App;
