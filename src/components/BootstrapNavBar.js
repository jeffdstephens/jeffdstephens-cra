import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

class BootstrapNavBar extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect style={{ marginBottom: "0" }}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="http://localhost:3000">jeff d stephens</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="./about">
              About
            </NavItem>
            <NavItem eventKey={2} href="#">
              Blog
            </NavItem>
            <NavItem eventKey={1} href="./contact">
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default BootstrapNavBar;
