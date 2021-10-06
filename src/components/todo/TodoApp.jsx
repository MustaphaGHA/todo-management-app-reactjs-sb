import React, { Component } from "react";
import "./TodoApp.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AuthenticationService from "./AuthenticationService.js"
class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <>
            <HeaderComponent />
            <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/Login" component={LoginComponent} />
              <Route path="/welcome/:name" component={WelcomeComponent} />
              <Route path="/todos" component={ListTodosComponent} />
              <Route path="/logout" component={LogoutComponent} />
              <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent />
          </>
        </Router>
        {/*<LoginComponent />
        <WelcomeComponent/>*/}
      </div>
    );
  }
}
class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="https://github.com/MustaphaGHA" className="navbar-brand">
              Mustapha
            </a>
          </div>
          <ul className="navbar-nav">
            <li>
              <Link className="nav-link" to="/welcome/mustapha">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/todos">
                Todos
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

class FooterComponent extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="text-muted">All rights Reserved 2021 @mustapha</span>
      </footer>
    );
  }
}

class LogoutComponent extends Component {
  render() {
    return (
      <>
        <h1>You are Loged out</h1>
        <div className="container">Thank you for using our application</div>
      </>
    );
  }
}
class WelcomeComponent extends Component {
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.match.params.name}. You can manage your todos{" "}
          <Link to="/todos">here</Link>
        </div>
      </>
    );
  }
}

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: "Learn React",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 2,
          description: "Learn to dance",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 3,
          description: "Become an expert at react ",
          done: false,
          targetDate: new Date(),
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>List Todos</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Target Date</th>
                <th>Is Completed ?</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr>
                  <td>{todo.description}</td>
                  <td>{todo.targetDate.toString()}</td>
                  <td>{todo.done.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function ErrorComponent() {
  return <div>Error occured</div>;
}
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "mustapha",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    // this.handleUsernameChange = this.handleUsernameChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }
  handleChange(event) {
    //console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  //   handleUsernameChange(event) {
  //     console.log(event.target.value);
  //     this.setState({
  //       [event.target.name]: event.target.value,
  //     });
  //   }

  //   handlePasswordChange(event) {
  //     console.log(event.target.value);
  //     this.setState({
  //       password: event.target.value,
  //     });
  //   }
  loginClicked() {
    //mustapha,dummy
    //console.log(this.state);
    if (this.state.username === "mustapha" && this.state.password === "dummy") {
        AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password);
      this.props.history.push(`/welcome/${this.state.username}`);
      //this.setState({showSuccessMessage:true})
      //this.setState({hasLoginFailed:false})
    } else {
      this.setState({ hasLoginFailed: true });
      this.setState({ showSuccessMessage: false });
    }
  }
  render() {
    return (
      <div className="bodyy">
        <h1>Login</h1>
        <div className="container">
          {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
          {this.state.hasLoginFailed && (
            <div className="alert alert-warning">Invalid Credentials </div>
          )}
          {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
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

// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed){
//         return <div>Invalid Credentials </div>
//     }
//     return null
// }

// function ShowLoginSuccessMessage(props){
//     if(props.showSuccessMessage){
//         return <div>Login Successfull </div>
//     }
//     return null
// }
export default TodoApp;
