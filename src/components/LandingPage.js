import React from "react";
import "../style.css";
import styled from "styled-components";

const LandingLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  background: yellow;
`;

const LandingTextLayout = styled.div`
  display: grid;
  grid-template-rows: 150px 2fr;
  background: yellow;
`;

const PicHolder = styled.div`
  padding-left: 1em;
  padding-right: 1em;
  padding-bottom: 1em;
  padding-top: 1em;
`;

const Title = styled.section`
  font-size: 3em;
  font-family: Roboto;
  text-align: left;
  justify-items: center;
  align-items: center;
  color: gray20;
  padding-left: 20px;
  padding-right: 1em;
  padding-bottom: 1em;
  padding-top: 1em;
`;

const Wrapper = styled.section`
  font-size: 1.5em;
  font-family: Roboto;
  text-align: left;
  justify-items: center;
  align-items: center;
  color: gray;
  padding-bottom: 1em;
  padding-left: 20px;
  padding-right: 1em;
`;

class LandingPage extends React.Component {
  render() {
    return (
      <LandingLayout>
        <PicHolder>
          <img
            src="/images/jeffdstephens-avatar.png"
            width="100%"
            height="100%"
            alt=""
          />
        </PicHolder>
        <LandingTextLayout>
          <Title>Hi! I'm Jeff.</Title>
          <Wrapper>
            If you are interested in the amazing world of information
            technology, solution architecture, and everything else that is pure
            badass technical innovation – so am I!
          </Wrapper>
        </LandingTextLayout>
      </LandingLayout>
    );
  }
}

export default LandingPage;
