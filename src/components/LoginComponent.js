import React, { Component } from "react";
import { connect } from "react-redux";
import { setNumber, setUsername } from "../redux/actions/userActions";
import { withRouter } from "react-router-dom";
import { login } from "../redux/actions/authActions";
import axios from "axios";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      profile: null,
    };
  }

  __inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  __onSubmit = () => {
    this.props.login(this.state, this.props);
  };

  __checkAuth = () => {
    if (this.props.auth.isLogin) {
      this.props.history.push("/user");
    }
  };

  componentDidMount() {
    this.__checkAuth();
  }

  componentWillReceiveProps() {
    this.__checkAuth();
  }

  render() {
    return (
      <div>
        <p>Custom Text: {this.props.user.customText}</p>
        <div>
          Custom Number: {this.props.user.customNumber}
          <button
            onClick={() => {
              this.props.setNumber();
            }}
          >
            +
          </button>
        </div>

        <input
          name="username"
          onChange={this.__inputHandler}
          type="text"
          placeholder={"Username"}
        />
        <input
          name="password"
          onChange={this.__inputHandler}
          type="password"
          placeholder={"Password"}
        />

        <button onClick={this.__onSubmit}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = ({ user, product, auth }) => {
  return {
    user,
    product,
    auth,
  };
};

const mapDispatchToProps = {
  setNumber,
  setUsername,
  login,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
);
