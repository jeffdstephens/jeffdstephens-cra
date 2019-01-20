import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

// this is my styled component
const Title = styled.section`
  font-size: 3em;
  font-family: Roboto;
  text-align: left;
  color: gray20;
  padding-bottom: 1em;
  padding-left: 2em;
  padding-right: 4em;
`;

const Wrapper = styled.section`
  font-size: 1.5em;
  font-family: Roboto;
  text-align: left;
  color: gray;
  padding-bottom: 1em;
  padding-left: 4em;
  padding-right: 4em;
`;

const styles = theme => ({
  root: {
    flexGrow: 1
  },

  paper: {
    //height: 320,
    //width: 240
    elevation: 2
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class AboutGrid extends React.Component {
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
      <Grid container className={classes.root} spacing={16}>
        <Grid item md={4}>
          <div style={{ display: "flex" }}>
            <Grid
              container
              className={classes.demo}
              justify="center"
              spacing={Number(spacing)}
            >
              <Grid container item md={10} justify="center" direction="column">
                <Paper className={classes.paper}>
                  <img
                    src="/images/workwithjeffdstephens.JPG"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item md={8}>
          <div style={{ display: "flex" }}>
            <Grid
              container
              className={classes.demo}
              justify="center"
              spacing={Number(spacing)}
            >
              <Grid item sm={10} direction="column">
                <Title>Hi! I'm Jeff.</Title>
                <Wrapper>Welcome to my website.</Wrapper>
                <Wrapper>
                  If you are here you are probably a lot like me. You have a
                  full-time job but are constantly looking to explore your
                  passions and expand your horizons. I have almost 25 years of
                  experience in the IT industry and have also been blogging,
                  podcasting, and building online platforms on the side since
                  2013.{" "}
                </Wrapper>
                <Wrapper>
                  I’m currently serving as the Chief Technology Officer for
                  Dignari while exploring multiple online projects such as my
                  site dedicated to blogging, Top Shelf Blogging. I also love to
                  write and have been featured on numerous online sites such as
                  Entrepreneur.com. I try to share my journey exploring
                  innovative technology and creative entrepreneurship in order
                  to hopefully make your journey just a little bit easier. Feel
                  free to reach out and get in touch with me. I’m always looking
                  to learn from others and help out however I can.
                </Wrapper>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    );
  }
}

AboutGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutGrid);
