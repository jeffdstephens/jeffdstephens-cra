import React from "react";
import { Jumbotron } from "react-bootstrap";

class JumboIntro extends React.Component {
  render() {
    return (
      <Jumbotron style={styles.container}>
        <h1>Welcome!</h1>
        <p>
          If you are interested in the amazing world of information technology,
          solution architecture, and everything else that is pure badass
          technical innovation – so am I!
        </p>
        <h3>Let’s go play with toys!</h3>
      </Jumbotron>
    );
  }
}

const bgImage = "/images/jeffdstephens-header.jpg";

const styles = {
  container: {
    color: "white",
    backgroundImage: `url(${bgImage})`
  }
};

export default JumboIntro;
