import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// Step 25 Import connect from react-redux
class UserComponent extends Component {
  componentWillMount() {
    // Step 27 Check if user is logged in (From redux store)
    if (false) this.props.history.push("/login");
  }
  render() {
    // Step 28 Show User Profile
    return (
      <div>
      </div>
    );
  }
}

// Step 26 Connect redux and UserComponent
export default withRouter(UserComponent);
