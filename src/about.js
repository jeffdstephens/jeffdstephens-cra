import React from "react";
import BootstrapNavBar from "./components/BootstrapNavBar";

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <BootstrapNavBar />
        <h1>Hello - About Me</h1>
      </div>
    );
  }
}

export default About;
