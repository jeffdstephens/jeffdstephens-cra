import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

// this is my styled component
const Title = styled.section`
  font-size: 5em;
  font-family: Lato;
  text-align: center;
  color: white;
  align-items: center;
  padding-bottom: 20px;
`;

const Wrapper = styled.section`
  font-size: 3em;
  font-family: Lato;
  text-align: center;
  color: white;
  align-items: center;
  padding-top: 1em;
  padding-bottom: 1em;
`;

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "steelblue"
  }
});

class AboutGrid extends React.Component {
  constructor() {
    super();
    this.state = { isSmiling: false };
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container className={classes.root} spacing={0}>
          <Grid item xs={12}>
            <div style={{ display: "flex" }}>
              <Grid
                container
                className={classes.demo}
                justify="center"
                spacing={Number(0)}
              >
                <Grid
                  container
                  item
                  xs={4}
                  style={{ marginTop: "1em" }}
                  justify="center"
                  direction="column"
                >
                  {this.state.isSmiling ? (
                    <img
                      src="/images/jeffdstephens-avatar-smiling.png"
                      width="100%"
                      alt=""
                      onClick={() =>
                        this.setState({ isSmiling: !this.state.isSmiling })
                      }
                    />
                  ) : (
                    <img
                      src="/images/jeffdstephens-avatar.png"
                      width="100%"
                      alt=""
                      onClick={() =>
                        this.setState({ isSmiling: !this.state.isSmiling })
                      }
                    />
                  )}
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
                spacing={Number(0)}
              >
                <Grid
                  item
                  sm={8}
                  direction="column"
                  alignItems="center"
                  justify="center"
                  style={{ minHeight: "100vh" }}
                >
                  <Title>HI! I'M JEFF</Title>
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
      </div>
    );
  }
}

AboutGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

//export default connect(
//  mapStateToProps,
//  mapDispatchToProps
//)(withStyles(styles)(AboutGrid));
export default withStyles(styles)(AboutGrid);
