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

const Wrapper = styled.section`
  font-size: 3em;
  font-family: Lato;
  text-align: left;
  color: white;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 1em;
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
    spacing: "16"
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
          className={classes.demo}
          item
          sm={12}
          justify="center"
          direction="column"
        >
          <PageTitle>ABOUT</PageTitle>
        </Grid>
        <Grid container className={classes.root} spacing={16}>
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
                  <Wrapper>
                    In 1991 I was attending George Mason University just outside
                    of Washington, DC. I was ending my semester as an Accounting
                    major and hating every Accounting class I was in. As I
                    selected my courses for the upcoming semester I decided to
                    take a computer programming class. That was the beginning of
                    my love for technology. My first course was programming in
                    BASIC. My first programs were not very exciting but when the
                    program finally worked and did what I intended it to do, I
                    had experienced magic. I was hooked. I switched my major to
                    Management Information Systems (MIS) and dove into
                    programming and everything to do with computers. I cut my
                    teeth on a bit of Cobol, then some Pascal, and ultimately C
                    before jumping headfirst into C++ - it was the hot language
                    emerging at that time.
                  </Wrapper>
                  <Wrapper>
                    I graduated school and was hired into the illustrious
                    Systems Engineer Development (SED) program at Electronic
                    Data Systems (EDS). I started out as a Business Associate
                    and got to design and deploy Windows for Workgroups and
                    Netware networks for the Immigration and Naturalization
                    Service (INS). We traveled across the country and were
                    literally swapping typewriters for computers and teaching
                    people how to use a mouse. The typical timeline in the SED
                    program included a stint as a Business Associate where you
                    learn the ropes of business followed by a 10 week death
                    march known as Tech Training. In just under a year as a
                    Business Associate I got my call for Tech Training.
                  </Wrapper>
                  <Wrapper>
                    Tech Training was feared by all that attended. It was 10
                    rigorous weeks meant to weed out the poor performers. It was
                    full of individual assignments and if you failed the coding
                    tests, you were fired. No joke. I was able to get through
                    training and was offered a prized position as a Teaching
                    Assistant for the next class. I refused though because I
                    wanted to get to coding in production!
                  </Wrapper>
                  <Wrapper>
                    Over the next 14 years at EDS I was able to create amazing
                    systems using an incredible array of technologies, including
                    multi-modal biometrics, smart cards, RFID, license plate
                    readers, PKI, etc. I continued coding well into the release
                    of .NET and migrated my skills to C#. Along the way I made
                    the (poor?) decision to walk away from coding and move into
                    solution architecture.
                  </Wrapper>
                  <Wrapper>
                    Fast forward to today and I'm currently serving as the Chief
                    Technology Officer (CTO) for a woman-owned small business in
                    the Washington, D.C. area - Dignari. In my current role I
                    serve as the lead in one of the Emerging Technology branches
                    of a large federal agency. That basically means I get to
                    play with a lot of toys! Recently, I've rediscovered my love
                    for coding and I'm dipping back into it when I don't have
                    meetings or Microsoft Outlook open.
                  </Wrapper>

                  <Wrapper>
                    So, welcome to my website. If you are here you are probably
                    a lot like me and your love for technology is strong. One of
                    the reasons I chose a career in technology is the fact you
                    are constantly learning. I love to expand my horizons and
                    have also done some work in online business, blogging, and
                    podcasting. I also love to write and have been featured on
                    numerous online sites such as Entrepreneur.com. I try to
                    share my journey exploring innovative technology and
                    creative entrepreneurship in order to hopefully make your
                    journey just a little bit easier. Feel free to reach out and
                    get in touch with me. I’m always looking to learn from
                    others and help out however I can.
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
