import React, { Component } from "react";
import "../styles/style.css";
import { Provider } from "react-redux";
import NavComponent from "../components/NavComponent";
import store from "../redux/store";
import { Container } from "reactstrap";

export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavComponent />
        <Container className="container-wrapper">{this.props.children}</Container>
      </Provider>
    );
  }
}
