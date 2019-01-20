import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  position: "fixed",
  top: 0,
  left: 0,
  "min-width": "100%",
  "min-height": "100%",
  width: window.innerWidth,
  height: window.innerHeight
});

class Hero extends React.Component {
  render() {
    return (
      <div>
        <img
          src={`http://localhost:3000/images/jeffdstephens-header.jpg`}
          alt=""
        />
      </div>
    );
  }
}

export default withStyles(styles)(Hero);
