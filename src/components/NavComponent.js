import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/authActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavbarResponsiveShow: false,
    };
  }

  toggleNavbarResponsive = () => {
    this.setState((prevState) => ({
      isNavbarResponsiveShow: !prevState.isNavbarResponsiveShow,
    }));
  };
  render() {
    const { isNavbarResponsiveShow } = this.state;
    return (
      <Navbar expand="md" className="navbar-wrapper">
        <Nav className="mr-auto" navbar>
          <NavItem className="navbar-list navbar-left-image">
            <img
              src={require("../static/images/react.jpg")}
              alt="react logo"
              className="image"
            />
          </NavItem>
          <NavItem className="navbar-list navbar-left-image">
            <img
              src={require("../static/images/redux.jpg")}
              alt="react logo"
              className="image"
            />
          </NavItem>
        </Nav>
        <Nav className="ml-auto mr-auto" navbar>
          <NavItem className="navbar-list navbar-center-title">
            React Redux | E-Commerce
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="navbar-list navbar-right-image">
            <img
              src={require("../static/images/lattesoft.jpg")}
              alt="react logo"
              className="image"
            />
          </NavItem>
          <NavItem className="navbar-list navbar-right-image">
            <img
              src={require("../static/images/dks.jpg")}
              alt="react logo"
              className="image"
            />
          </NavItem>
          <NavItem className="navbar-list navbar-right-image">
            <img
              src={require("../static/images/littlebeansoft.png")}
              alt="react logo"
              className="image"
            />
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default connect(null, { logout })(withRouter(NavComponent));
