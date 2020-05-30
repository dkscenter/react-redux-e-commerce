import React, { Component } from "react";
import { connect } from "react-redux";

class UserComponent extends Component {
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

export default connect(({ auth }) => {
  return {
    auth,
  };
})(UserComponent);
