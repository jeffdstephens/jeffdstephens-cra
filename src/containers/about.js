import React from "react";
import BootstrapNavBar from "../components/BootstrapNavBar";
import styled from "styled-components";

const Wrapper = styled.section`
  font-size: 1.5em;
  font-family: Roboto;
  text-align: left;
  color: palevioletred;
  padding: 4em;
  background: papayawhip;
`;

class About extends React.Component {
  render() {
    return (
      <div>
        <BootstrapNavBar />

        <Wrapper>
          Welcome to my website. If you are here you are probably a lot like me.
          You have a full-time job but are constantly looking to explore your
          passions and expand your horizons. I have almost 25 years of
          experience in the IT industry and have also been blogging, podcasting,
          and building online platforms on the side since 2013. I’m currently
          serving as the Chief Technology Officer for Dignari while exploring
          multiple online projects such as my site dedicated to blogging, Top
          Shelf Blogging. I also love to write and have been featured on
          numerous online sites such as Entrepreneur.com. I try to share my
          journey exploring innovative technology and creative entrepreneurship
          in order to hopefully make your journey just a little bit easier. Feel
          free to reach out and get in touch with me. I’m always looking to
          learn from others and help out however I can.
        </Wrapper>
      </div>
    );
  }
}

export default About;
