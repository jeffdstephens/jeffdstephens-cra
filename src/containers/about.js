import React from "react";
import BootstrapNavBar from "../components/BootstrapNavBar";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const PageTitle = styled.section`
  font-size: 8em;
  font-family: Anton;
  text-align: center;
  color: white;
  background: #69b578;
`;

const SectionTitle = styled.h1`
  font-size: 5em;
  font-family: Anton;
  text-align: left;
  color: #e1dd8f;
  background: #69b578;
`;

const Wrapper = styled.section`
  font-size: 3em;
  font-family: Lato;
  text-align: left;
  color: white;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0.5em;
  padding-bottom: 1em;
  background: #69b578;
`;

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#69B578"
  }
});

class About extends React.Component {
  state = {
    spacing: "0"
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <div>
        <BootstrapNavBar />
        <Grid
          container
          className={classes.root}
          item
          sm={12}
          justify="center"
          direction="column"
        />

        <Grid container className={classes.root} spacing={0}>
          <Grid item xs={12}>
            <PageTitle>ABOUT</PageTitle>
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: "flex" }}>
              <Grid
                container
                className={classes.demo}
                justify="center"
                spacing={Number(spacing)}
              >
                <Grid container item xs={8} justify="center" direction="column">
                  <img
                    src="/images/workwithjeffdstephens.jpg"
                    width="100%"
                    alt=""
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div style={{ display: "flex" }}>
              <Grid
                container
                className={classes.demo}
                justify="center"
                spacing={Number(spacing)}
              >
                <Grid
                  item
                  sm={8}
                  direction="column"
                  alignItems="center"
                  justify="center"
                  style={{ minHeight: "100vh" }}
                >
                  <SectionTitle>Where it all started</SectionTitle>
                  <Wrapper>
                    In 1991 I was attending George Mason University just outside
                    of Washington, DC. I was ending my semester as an Accounting
                    major and hated every Accounting class I was in. As I
                    selected my courses for the upcoming semester I decided to
                    take a computer programming class. That was the beginning of
                    my love for technology.
                  </Wrapper>
                  <Wrapper>
                    My first course was programming in BASIC. Those first
                    programs were nothing to get excited about but when the
                    program finally worked and did what I intended it to do, I
                    had experienced magic. I was hooked. I switched my major to
                    Management Information Systems (MIS) and dove into
                    programming and everything to do with computers. I cut my
                    teeth on a bit of COBOL, then some Pascal, and ultimately C
                    before jumping headfirst into C++ - it was the hot language
                    emerging at that time.
                  </Wrapper>
                  <SectionTitle>First job</SectionTitle>
                  <Wrapper>
                    I graduated school and was hired into the illustrious
                    Systems Engineer Development (SED) program at Electronic
                    Data Systems (EDS). As part of the program, you begin as a
                    Business Associate. I was lucky enough to get to design and
                    deploy Windows for Workgroups and Netware networks for the
                    Immigration and Naturalization Service (INS). We traveled
                    across the country and were literally swapping typewriters
                    for computers and teaching people how to use a mouse. The
                    SED program had 2 phases, learn the business then prove you
                    had what it took. That second part was known as Tech
                    Training.
                  </Wrapper>
                  <Wrapper>
                    Tech Training was feared by all that attended. It was a 10
                    week fully immersive and rigorous test meant to weed out the
                    poor performers. It was full of individual assignments and
                    if you failed the coding tests, you were fired. No joke. I
                    was able to get through training and was offered the sought
                    after position as a Teaching Assistant for the next class. I
                    refused though because I wanted to get to coding in
                    production!
                  </Wrapper>
                  <SectionTitle>Unleashed</SectionTitle>
                  <Wrapper>
                    Over the next 14 years at EDS I was able to create amazing
                    systems using an incredible array of technologies, including
                    multi-modal biometrics, smart cards, RFID, PKI, etc. I
                    continued coding with Java and C++ up to the initial release
                    of .NET and migrated my skills to C#. Some time around 2007
                    I made the (poor?) decision to walk away from coding and
                    move into solution architecture.
                  </Wrapper>
                  <Wrapper>
                    After implementing one of the biggest federal smart card
                    issuance systems in the United States while at EDS, I then
                    moved on to Booz Allen and Hamilton to work on actually
                    using those cards. I worked with the Department of Treasury
                    to implement the Federal Identity and Credential Access
                    Management (FICAM) initiative. I was only there 10 months
                    though as I wasn't in the weeds deep enough and was itching
                    to go back and get my hands dirty with actual
                    implementation.
                  </Wrapper>
                  <Wrapper>
                    I then went to Unisys where I again got to use my
                    architeture skills to field a number of nationwide
                    production systems. Most were related to pedestrian
                    processing using face biometrics and other cool
                    technologies.
                  </Wrapper>

                  <SectionTitle>Where I am now</SectionTitle>
                  <Wrapper>
                    Fast forward to today and I'm currently serving as the Chief
                    Technology Officer (CTO) for a woman-owned small business in
                    the Washington, D.C. area - Dignari. In my current role I
                    serve as the lead in one of the Emerging Technology branches
                    of a large federal agency. That basically means I get to
                    play with a lot of toys! This includes significant work with
                    biometrics, IoT, cloud, and of course some blockchain.
                    Recently, I've rediscovered my love for coding and I'm
                    soaking up all kinds of technologies. I'm mostly focused on
                    React right now but looking forward to continuing to refresh
                    and expand my full stack skills.
                  </Wrapper>
                  <SectionTitle>Welcome!</SectionTitle>
                  <Wrapper>
                    So, welcome to my website. If you are here you are probably
                    a lot like me and your love for technology is strong. One of
                    the reasons I chose a career in technology is the fact you
                    are constantly learning. I love to expand my horizons and
                    have also done some work in online business, blogging, and
                    podcasting. I also love to write and have been featured on
                    numerous online sites such as Entrepreneur.com. In the end,
                    I try to share my journey exploring innovative technology
                    and creative entrepreneurship in order to hopefully make
                    your journey just a little bit easier. Feel free to reach
                    out and get in touch with me. I’m always looking to learn
                    from others and help out however I can.
                  </Wrapper>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <Footer />
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
