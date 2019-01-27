import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: "white",
    backgroundColor: "black"
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
          spacing={8}
        >
          <Grid container sm={2} justify="center">
            <Grid item xs width="25%">
              <a href="https://www.twitter.com/jeffdstephens">
                <img src="/images/twitter-color.svg" alt="" width="75%" />
              </a>
            </Grid>
            <Grid item xs>
              <a href="https://www.instagram.com/jeffdstephens">
                <img src="/images/instagram-color.svg" alt="" width="75%" />
              </a>
            </Grid>
            <Grid item xs>
              <a href="https://www.github.com/jeffdstephens">
                <img src="/images/github-color.svg" alt="" width="75%" />
              </a>
            </Grid>
            <Grid item xs>
              <a href="https://www.youtube.com/jeffdstephens">
                <img src="/images/youtube-color.svg" alt="" width="75%" />
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
