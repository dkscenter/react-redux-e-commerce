import React, { Component } from "react";
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
// Step 20 Import connect from react-redux
// Step 21 Import logout action

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
    // Step 23 Call logout action from props
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
    // Step 24 check if user logged in (from redux store)
    let isLogin = false;
    let auth = {}
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
          {isLogin && (
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
              isLogin ? "margin-right-10-em" : ""
            }`}
          >
            React Redux | E-Commerce
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          {isLogin ? (
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

// Step 22 Connect redux and NavComponent
export default withRouter(NavComponent)
