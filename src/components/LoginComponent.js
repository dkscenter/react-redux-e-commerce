import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, FormGroup, Input, Button, Alert } from "reactstrap";
// Step 12 Import connect from react-redux
// Step 13 Import login action

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      profile: null,
      errors: [],
    };
  }

  componentDidMount() {
    this.__checkAuth();
  }

  componentWillReceiveProps() {
    this.__checkAuth();
  }

  __inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  __onSubmit = (e) => {
 
    const { email, password } = this.state;
    let errors = [];
    e.preventDefault();
    // Step 15 Check Email and Password from redux store
    if (email &&  password) {
      errors.push(
        "Sorry. We couldn't find account with your email. Try again."
      );
    }
    if (errors.length === 0) {
      // Step 16 Call login action from props
      this.props.history.push("/shop");
    }
    this.setState({
      errors,
    });
  };

  __checkAuth = () => {
    // Step 17 Check if user is logged in (From redux store)
    if (false) {
      this.props.history.push("/user");
    }
  };

  goToRegisterPage = () => {
    const { history } = this.props;
    history.push("/register");
  };

  render() {
    const { email, password, errors, errorTimeOut } = this.state;
    return (
      <div className="card-authentication">
        <img
          src={require("../static/images/e-commerce.png")}
          alt="e-commerce icon"
          className="e-commerce-logo"
        />
        {errors.map((error, index) => (
          <Alert key={index} color="danger">
            {error}
          </Alert>
        ))}
        <h3 className="mt-2 text-center">Welcome back</h3>
        <small className="mb-2 text-center d-block">
          Enter your Email and Password to login
        </small>
        <hr />
        <Form onSubmit={(e) => this.__onSubmit(e)}>
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              className="text-center"
              value={email}
              onChange={(e) => this.__inputHandler(e)}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              className="text-center"
              value={password}
              onChange={(e) => this.__inputHandler(e)}
            />
          </FormGroup>
          <hr />
          <Button block color="primary" type="submit">
            Sign In
          </Button>
          <small
            className="sub-text-authentication"
            onClick={() => this.goToRegisterPage()}
          >
            Have no account? Create new.
          </small>
        </Form>
      </div>
    );
  }
}

// Step 14 Connect redux and LoginComponent
export default withRouter(LoginComponent);
