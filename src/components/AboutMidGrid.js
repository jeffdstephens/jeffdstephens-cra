import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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
                <Typography variant="h2" color="inherit" align="left">
                  Hi! I'm Jeff.
                </Typography>
                <p />
                <Typography variant="h6">
                  <p align="left">
                    Welcome to my website. If you are here you are probably a
                    lot like me. You have a full-time job but are constantly
                    looking to explore your passions and expand your horizons.
                  </p>
                  <p align="left">
                    I have almost 25 years of experience in the IT industry and
                    have also been blogging, podcasting, and building online
                    platforms on the side since 2013.
                  </p>
                  <p align="left">
                    I’m currently serving as the Chief Technology Officer for
                    Dignari while exploring multiple online projects such as my
                    site dedicated to blogging, Top Shelf Blogging. I also love
                    to write and have been featured on numerous online sites
                    such as Entrepreneur.com. I try to share my journey
                    exploring innovative technology and creative
                    entrepreneurship in order to hopefully make your journey
                    just a little bit easier. Feel free to reach out and get in
                    touch with me. I’m always looking to learn from others and
                    help out however I can.
                  </p>
                </Typography>
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
