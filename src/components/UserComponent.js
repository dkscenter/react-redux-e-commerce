import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class UserComponent extends Component {
  componentWillMount() {
    const { auth, history } = this.props;
    if (!auth.isLogin) history.push("/login");
  }
  render() {
    let { profile } = this.props.auth;
    return (
      <div>
        <div>
          <img src={profile.avatar} alt="Profile User" />
        </div>
        <div>ID: {profile.id}</div>
        <div>Email: {profile.email}</div>
        <div>First Name: {profile.first_name}</div>
        <div>Last Name: {profile.last_name}</div>
      </div>
    );
  }
}

export default withRouter(
  connect(({ auth }) => {
    return {
      auth,
    };
  })(UserComponent)
);
