import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: ''};
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <form>
      <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
      <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
      <button type="button" onClick={this.handleLogin}>Login</button>
      </form>);
    }

    handleLogin() {
      var data = {
        "email": this.state.email,
        "password": this.state.password
      }

      return fetch("http://ruffbook.herokuapp.com", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
      })
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        return data
      });
    }
  }
  export default App;
