import React, { Component } from 'react';
import './App.css';
import NavBar from './Tools/NavBar'
import { Route, Switch, withRouter } from 'react-router-dom'
import LogIn from './LogIn/LogIn'
import LandingPage from './LandingPage/LandingPage'
import Homepage from './Homepage/Homepage'
import Register from './Register/Register'
import { connect } from 'react-redux'
import { findUser } from './store/actions/userActions'
import Collaboration from './Collaboration/Collaboration'

class App extends Component {

  componentDidMount = () => {
    let token = localStorage.getItem('token')
    if(token){
      this.props.findUser(token)
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.user !== this.props.user){
      this.props.history.push(`/homepage`)
     }
    }
  

  render() {
    return (
      <div className="App">
          <NavBar user={this.props.user}/>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/login' component={LogIn}/>
            <Route path='/homepage' render={(user) => (<Homepage user={this.props.user}/>)}/>
            <Route path='/collaborations' render={(user) => (<Collaboration user={this.props.user}/>)}/>
            <Route path='/register' component={Register}/>
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {user: state.user}
}

const mapDispatchToProps = dispatch => {
  return {
    findUser: (token) => dispatch(findUser(token))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));