import React, { Component } from 'react';
import './App.css';
import NavBar from './Tools/NavBar'
import { Route, Switch } from 'react-router-dom'
import LogIn from './LogIn/LogIn'
import LandingPage from './LandingPage/LandingPage'
import Profile from './Profile/Profile'

class App extends Component {

  render() {
    return (
      <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/login' component={LogIn}/>
            <Route path='/:id/profile' render={() => (<Profile />)}/>
          </Switch>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {user: state.user}
// }

export default App;
