import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, FormGroup, Input, Button, Alert } from "reactstrap";

// Step 4 Import connect from react-redux
// Step 5 Import register action

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      profile: null,
      errors: [],
    };
  }

  __inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  __onSubmit = (e) => {
    const { email, password, confirmPassword } = this.state;
    let errors = [];
    e.preventDefault();
    if (!email || !password || !confirmPassword)
      errors.push("Please complete all form.");
    if (password !== confirmPassword)
      errors.push("Password didn't match. Try again.");
    if (password.length < 8 || confirmPassword.length < 8)
      errors.push("Password must be at least 8 characters.");
    if (errors.length === 0) {
      // Step 7 Call register action from props.
    }
    this.setState({
      errors,
    });
  };

  __checkAuth = () => {
    // Step 8 Check if user is logged in (From redux store)
    if(false){
      this.props.history.push("/user");
    }
   
  };

  componentDidMount() {
    this.__checkAuth();
  }

  componentWillReceiveProps() {
    this.__checkAuth();
  }

  goToLoginPage = () => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    const { email, password, confirmPassword, errors } = this.state;
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
        <h3 className="mt-2 text-center">Redux E-Commerce</h3>
        <small className="mb-5 mr-auto ml-auto text-center">
          Please register to see something special!
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
          <FormGroup>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="text-center"
              value={confirmPassword}
              onChange={(e) => this.__inputHandler(e)}
            />
          </FormGroup>
          <hr />
          <Button block color="primary" type="submit">
            Sign Up
          </Button>
          <small
            className="sub-text-authentication"
            onClick={() => this.goToLoginPage()}
          >
            Already have account? Join us.
          </small>
        </Form>
      </div>
    );
  }
}

// Step 6 Connect redux and RegisterComponent
export default withRouter(RegisterComponent);