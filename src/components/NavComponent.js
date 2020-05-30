import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/authActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class NavComponent extends Component {
  render() {
    return (
      <div>
        <Link to="/login">Login</Link> <Link to="/user">User</Link>{" "}
        <a
          href="#"
          onClick={() => {
            this.props.logout();
            this.props.history.push("/login");
            return false;
          }}
        >
          Logout
        </a>
      </div>
    );
  }
}

export default connect(null, { logout })(withRouter(NavComponent));
