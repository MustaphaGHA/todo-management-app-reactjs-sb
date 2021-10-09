import React, { Component } from "react";
import { Link } from "react-router-dom";
import  HelloWorldService  from "../../api/todo/HelloWorldService.js";
class WelcomeComponent extends Component {
  constructor(props){
    super(props)
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    this.state ={
      welcomeMessage : ''
    }
    this.handleSuccessfullResponse = this.handleSuccessfullResponse.bind(this)
    this.handleError = this.handleError.bind(this)
  }
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">Welcome {this.props.match.params.name}. You can manage your todos{" "}<Link to="/todos">here</Link></div>
        <div className="container">Click here to get acustomized welcome message <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome Message </button></div>
        <div className="container">
          {this.state.welcomeMessage}
        </div>

      </>
    );
  }
  retrieveWelcomeMessage(){
  //  HelloWorldService.executeHelloWorldService()
  // .then(response => this.handleSuccessfullResponse(response))
  // //.catch(error => this.handleErrorResponse(error))

  //  HelloWorldService.executeHelloWorldBeanService()
  // .then(response => this.handleSuccessfullResponse(response))
  // //.catch(error => this.handleErrorResponse(error))

  HelloWorldService.helloWorldPathvarible(this.props.match.params.name)
  .then(response => this.handleSuccessfullResponse(response))
  .catch(error => this.handleError(error))
}
  handleSuccessfullResponse(response){
    this.setState({
      welcomeMessage : response.data.message
    })
    

  }

  handleError(error){
    console.log(error.response)
    this.setState({
      welcomeMessage : error.response.data.message
    })
    

  }


}


export default WelcomeComponent;