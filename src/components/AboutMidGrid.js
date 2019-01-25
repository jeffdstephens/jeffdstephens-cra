import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { yellow } from "@material-ui/core/colors";

// this is my styled component
const Title = styled.section`
  font-size: 3em;
  font-family: Roboto;
  text-align: left;
  color: black;
  align-items: center;
  padding-bottom: 20px;
  padding-left: 0.5em;
  padding-right: 1em;
  fg: yellow;
`;

const Wrapper = styled.section`
  font-size: 1.5em;
  font-family: Roboto;
  text-align: left;
  color: black;
  align-items: center;
  padding-bottom: 1em;
  padding-left: 1em;
  padding-right: 1em;
  fg: yellow;
`;

const BlackBar = styled.div`
  font-size: 1.5em;
  font-family: Roboto;
  text-align: left;
  align-items: center;
  padding-bottom: 1em;
  padding-left: 1em;
  padding-right: 1em;
  bg: black;
  fg: yellow;
`;

const styles = theme => ({
  root: {
    flexGrow: 1
  },

  paper: {
    //height: 320,
    //width: 240
    elevation: 0,
    color: yellow,
    background: yellow
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
      <div>
        <Grid container className={classes.root} spacing={16}>
          <Grid item sm={4}>
            <div style={{ display: "flex" }}>
              <Grid
                container
                className={classes.demo}
                justify="center"
                spacing={Number(spacing)}
              >
                <Grid
                  container
                  item
                  sm={10}
                  justify="center"
                  direction="column"
                >
                  <img
                    src="/images/jeffdstephens-avatar.png"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item sm={8}>
            <div style={{ display: "flex" }}>
              <Grid
                container
                className={classes.demo}
                justify="center"
                spacing={Number(spacing)}
              >
                <Grid
                  item
                  sm={10}
                  direction="column"
                  alignItems="center"
                  justify="center"
                  style={{ minHeight: "100vh" }}
                >
                  <Title>Hi! I'm Jeff.</Title>
                  <Wrapper>Welcome to my website.</Wrapper>
                  <Wrapper>
                    If you are interested in the amazing world of information
                    technology, solution architecture, and everything else that
                    is pure badass technical innovation – so am I!
                  </Wrapper>
                  <Wrapper>Let's go play with toys!</Wrapper>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <BlackBar>test</BlackBar>
      </div>
    );
  }
}

AboutGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutGrid);
