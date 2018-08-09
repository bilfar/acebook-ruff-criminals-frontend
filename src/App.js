import React, { Component } from 'react';
import logo from './logo.svg';
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

      fetch("http://localhost:3000/user/sign_in", {
        method: "POST",
        header: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        console.log(data)
      });
    }
  }
  export default App;
