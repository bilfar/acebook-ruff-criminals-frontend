import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <form>
        <label>
          username:
            <input type="text" name="username" />
        </label><br />
        <label>
          password:
            <input type="password" name="password" />
        </label><br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
