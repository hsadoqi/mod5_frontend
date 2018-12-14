import React, { Component } from 'react';
import './App.css';
import NavBar from './Tools/NavBar'
import { Route, Switch, withRouter } from 'react-router-dom'
import LogIn from './LogIn/LogIn'
import LandingPage from './LandingPage/LandingPage'
import Profile from './Profile/Profile'
import Register from './Register/Register'
import { connect } from 'react-redux'
// import { findUser } from './store/actions/userActions'

class App extends Component {
  state = {
    user: null
  }

  componentDidMount = () => {
    let token = localStorage.getItem('token')
    // console.log(this.props.findUser)
    if(token){
      fetch('http://localhost:3000/current_user', {
        headers: {
          'Content-type': 'application/json', 
          Accepts: 'application/json', 
          Authorization: token
        }
      }).then(res => res.json())
      .then(resp => { this.props.history.push(`/${resp.id}/profile`)})
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.user !== this.props.user){
      localStorage.setItem('token', this.props.user.jwt)
      localStorage.setItem('user', JSON.stringify(this.props.user.user))
     }
    }
  

  render() {
    console.log(this.props.user)
    return (
      <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/login' component={LogIn}/>
            <Route path='/:id/profile' render={() => (<Profile />)}/>
            <Route path='/register' component={Register}/>
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {user: state.user}
}

// const mapDispatchToProps = dispatch => {
//   return {
//     findUser: (token) => dispatch(findUser(token))
//   }
// }

export default withRouter(connect(mapStateToProps)(App));