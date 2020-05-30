import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import NavComponent from "../components/NavComponent";
import store from "../redux/store";

export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
          </head>
          <NavComponent />
          {this.props.children}
        </Fragment>
      </Provider>
    );
  }
}
