import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import BootstrapNavBar from "./BootstrapNavBar";

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: "white",
    backgroundColor: "black",
    paddingTop: "1em",
    paddingBottom: "1em"
  }
});

class Footer extends Component {
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
        <Grid
          container
          className={classes.root}
          justify="center"
          alignItems="center"
          spacing={24}
        >
          <Grid container sm={2} alignItems="center" justify="center">
            <Grid item xs>
              <a href="https://www.twitter.com/jeffdstephens" target="_blank">
                <img
                  src="/images/jeffdstephens-twitter.png"
                  alt=""
                  width="50%"
                />
              </a>
            </Grid>
            <Grid item xs>
              <a href="https://www.instagram.com/jeffdstephens" target="_blank">
                <img
                  src="/images/jeffdstephens-instagram.png"
                  alt=""
                  width="50%"
                />
              </a>
            </Grid>
            <Grid item xs>
              <a href="https://www.github.com/jeffdstephens" target="_blank">
                <img
                  src="/images/jeffdstephens-github.png"
                  alt=""
                  width="50%"
                />
              </a>
            </Grid>
            <Grid item xs>
              <a href="https://www.youtube.com/jeffdstephens" target="_blank">
                <img
                  src="/images/jeffdstephens-youtube.png"
                  alt=""
                  width="50%"
                />
              </a>
            </Grid>
            <Grid item xs>
              <a
                href="https://www.linkedin.com/in/jeffdstephens"
                target="_blank"
              >
                <img
                  src="/images/jeffdstephens-linkedin.png"
                  alt=""
                  width="50%"
                />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
