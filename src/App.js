import React, { Component } from 'react';
import './App.css';
import NavBar from './Tools/NavBar'
import { Route } from 'react-router-dom'
import LogIn from './LogIn/LogIn'
import LandingPage from './LandingPage/LandingPage'

class App extends Component {

  render() {
    return (
      <div className="App">
          <NavBar />
          <Route exact path='/' component={LandingPage}/>
          <Route path='/login' component={LogIn}/>
      </div>
    );
  }
}

export default App;
