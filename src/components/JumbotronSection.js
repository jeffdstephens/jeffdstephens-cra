import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

class JumboIntro extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>Welcome!</h1>
        <p>
          If you are interested in the amazing world of information technology,
          solution architecture, and everything else that is pure badass
          technical innovation – so am I!
        </p>
        <p>Let’s go play with toys!</p>
        <p>
          <Button bsStyle="primary">Get Started</Button>
        </p>
      </Jumbotron>
    );
  }
}

export default JumboIntro;
