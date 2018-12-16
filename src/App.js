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

class App extends Component {
  state = {
    user: null
  }

  componentDidMount = () => {
    let token = localStorage.getItem('token')
    // // console.log(this.props.findUser)
    if(token){
      this.props.findUser(token)
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.user.id !== this.props.user.id){
      // console.log('hello')
       this.props.history.push(`/${this.props.user.id}/homepage`)
     }
    }
  

  render() {
    // console.log(this.props.user)
    return (
      <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/login' component={LogIn}/>
            <Route path='/:id/homepage' render={() => (<Homepage />)}/>
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