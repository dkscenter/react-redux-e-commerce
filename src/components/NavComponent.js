import React, { Component } from "react";
import { logout } from "../redux/actions/authActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserInfoModalShow: false,
    };
  }

  toggleNavbarResponsive = () => {
    this.setState((prevState) => ({
      isNavbarResponsiveShow: !prevState.isNavbarResponsiveShow,
    }));
  };

  logout = () => {
    const { logout } = this.props;
    logout();
  };

  showUserInfoModal = () => {
    this.setState((prevState) => ({
      isUserInfoModalShow: !prevState.isUserInfoModalShow,
    }));
  };

  renderUserComponent = () => {
    const { auth } = this.props;
    return (
      <Nav className="ml-auto" navbar>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret className="checkout-button">
            <img
              src={auth.profile.avatar}
              alt="Profile User"
              className="image"
            />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem onClick={() => this.props.history.push('/cart')}>Checkout</DropdownItem>
            <DropdownItem onClick={() => this.showUserInfoModal()}>
              User Info
            </DropdownItem>
            <DropdownItem onClick={() => this.logout()}>Logout</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    );
  };
  render() {
    const { auth } = this.props;
    const { isUserInfoModalShow } = this.state;
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
          {auth.isLogin && (
            <Nav className="mr-auto" navbar>
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
          )}
        </Nav>
        <Nav className="ml-auto mr-auto" navbar>
          <NavItem
            className={`navbar-list navbar-center-title ${
              auth.isLogin ? "margin-right-10-em" : ""
            }`}
          >
            React Redux | E-Commerce
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          {auth.isLogin ? (
            this.renderUserComponent()
          ) : (
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
          )}
        </Nav>
        <Modal
          isOpen={isUserInfoModalShow}
          toggle={() => this.showUserInfoModal()}
        >
          <ModalHeader toggle={() => this.showUserInfoModal()}>
            Modal title
          </ModalHeader>
          <ModalBody>
            <p>Email: {auth.email}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.showUserInfoModal()}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={() => this.showUserInfoModal()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Navbar>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps, { logout })(withRouter(NavComponent));
