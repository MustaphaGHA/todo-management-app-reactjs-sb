import React, { Component } from "react";
import "./TodoApp.css";
import { BrowserRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import ListTodosComponent from './ListTodosComponent.jsx'
import LoginComponent from './LoginComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import AuthenticationService from './AuthenticationService.js'
import TodoComponent from './TodoComponent.jsx'

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
              <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
              <AuthenticatedRoute path="/todos/:id" component={TodoComponent} />
              <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
              <Route path="/logout" component={LogoutComponent}/>
              <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent />
          </>
        </Router>
      </div>
    );
  }
}

class AuthenticatedRoute extends Component{
    render(){
        if(AuthenticationService.isUserLoggedIn())
            return <Route {...this.props}/>
        else {
            return <Redirect to="/login"/>
        }
    }
}

export default TodoApp;
