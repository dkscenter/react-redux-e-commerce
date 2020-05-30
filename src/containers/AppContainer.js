import React, { Component } from "react";
import { Provider } from "react-redux";
import NavComponent from "../components/NavComponent";
import store from "../redux/store";

export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavComponent />
        {this.props.children}
      </Provider>
    );
  }
}
