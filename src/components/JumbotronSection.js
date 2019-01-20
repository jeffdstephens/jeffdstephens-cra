import React from "react";
import { Jumbotron } from "react-bootstrap";
import styled from "styled-components";

const GrandTitle = styled.section`
  font-size: 4em;
  font-family: Roboto;
  text-align: center;
  color: white;
  padding-bottom: 0.5em;
  padding-left: 2em;
  padding-right: 2em;
`;

const Title = styled.section`
  font-size: 1.5em;
  font-family: Roboto;
  text-align: center;
  color: white;
  padding-bottom: 1em;
  padding-left: 2em;
  padding-right: 2em;
`;

class JumboIntro extends React.Component {
  render() {
    return (
      <Jumbotron style={styles.container}>
        <GrandTitle>Welcome!</GrandTitle>
        <Title>
          If you are interested in the amazing world of information technology,
          solution architecture, and everything else that is pure badass
          technical innovation – so am I!
        </Title>
        <Title>Let’s go play with toys!</Title>
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
