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
import EditProfile from './EditProfile/EditProfile'
import Profile from './Profile/Profile'
import NewProject from './NewProject/NewProject'
import Project from './Project/Project'
import SearchCollabs from './SearchCollabs/SearchCollabs'
import Collaborator from './Collaborator/Collaborator'
import SearchProjects from './SearchProjects/SearchProjects'

class App extends Component {
  state = {
    selectedPost: ''
  }

  componentDidMount = () => {
    let token = localStorage.getItem('token')
    if(token){
      this.props.findUser(token)
    }
  }

    render() {
      // console.log(this.props)
    return (
      <div className="App">
          <NavBar user={this.props.user}/>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/login' component={LogIn}/>
            <Route path='/homepage' render={(user) => (<Homepage user={this.props.user}/>)}/>
            <Route path='/collaborations' render={(user) => (<Collaboration user={this.props.user}/>)}/>
            <Route path='/register' component={Register}/>
            <Route path='/edit-profile' render={(user) => (<EditProfile user={this.props.user}/>)}/>
            <Route path='/new-project' render={(user) => (<NewProject user={this.props.user}/>)}/>
            <Route path='/collaborators' render={(user) => (<SearchCollabs user={this.props.user}/>)}/> 
            <Route exact path='/users/:username' render={(user) => (<Collaborator user={this.props.selectedUser}/>)}/>
            <Route path='/search-projects' render={(user) => (<SearchProjects user={this.props.user}/>)}/>
            <Route exact path='/projects/:id' render={(project) => (<Project project={this.props.selectedProject}/>)}/>
            <Route exact path='/:username' render={(user) => (<Profile user={this.props.user}/>)}/>

          </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    user: state.user.user, 
    selectedProject: state.projects.selectedProject, 
    selectedUser: state.user.selectedUser}
}

const mapDispatchToProps = dispatch => {
  return {
    findUser: (token) => dispatch(findUser(token))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));