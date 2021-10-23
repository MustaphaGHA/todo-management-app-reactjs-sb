import React, { Component } from "react";
import "./TodoApp.css";
import AuthenticationService from "./AuthenticationService.js"

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "mustapha",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
  
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }
  handleChange(event) {
    
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  
  loginClicked() {
    // if (this.state.username === "mustapha" && this.state.password === "dummy") {
    //     AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password);
    //   this.props.history.push(`/welcome/${this.state.username}`);
    // } else {
    //   this.setState({ hasLoginFailed: true });
    //   this.setState({ showSuccessMessage: false });
    // }

    AuthenticationService.executeBasicAuthenticationService(this.state.username,this.state.password)
    .then(
      () => {
        AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password);
        this.props.history.push(`/welcome/${this.state.username}`);
      }

    ).catch(
      () => {
        this.setState({ hasLoginFailed: true });
        this.setState({ showSuccessMessage: false });
      }
    )
  }
  render() {
    return (
      <div className="bodyy">
        <h1>Login</h1>
        <div className="container">
          {this.state.hasLoginFailed && (
            <div className="alert alert-warning">Invalid Credentials </div>
          )}
          {this.state.showSuccessMessage && <div>Login Successfull </div>}
          Username :{" "}
          <input
            type="test"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          Password :{" "}
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-success" onClick={this.loginClicked}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default LoginComponent;