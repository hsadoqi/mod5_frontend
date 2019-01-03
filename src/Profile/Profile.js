import './Profile.css'
import React, { Component} from 'react'
// import { SocialIcon } from 'react-social-icons';
import ProfPopUp from '../ProfPopUp/ProfPopUp'
import SideNav from '../SideNav/SideNav'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import {connect} from 'react-redux'
import {selectedProject} from '../store/actions/projectActions'
import {withRouter} from 'react-router-dom'
import CollabPopUp from '../CollabPopUp/CollabPopUp'

let applicationArray 
let projectArray
let uncompleted
let completed
let collaborations
let completedCollabs

class Profile extends Component {
    state = {
        projects: [], 
        visible: false, 
        selectedPost: ''
    }

    handleClick = (e, project) => {
        console.log('in click')
        this.props.selectProject(project)
        this.setState({
            visible: !this.state.visible, 
            selectedPost: project
        })
    }

    getPost = (e, project) => {
        e.preventDefault()
        this.props.selectProject(project)
        let selProject = JSON.parse(localStorage.getItem('project'))
        console.log(selProject.id)
        this.props.history.push(`/projects/${selProject.id}`)
    }

    render(){

        if(this.props.user.projects){
            uncompleted = this.props.user.projects.filter((project) => project.completed === false)
            completed = this.props.user.projects.filter((project) => project.completed === true)
        }

        if(this.props.user.applications){
            applicationArray = this.props.user.applications.filter((app) => app.approve === true)
            projectArray = applicationArray.map((app) => app.role.project)
            collaborations = projectArray.filter((proj) => proj.completed === false)
            completedCollabs = projectArray.filter((proj) => proj.completed === true)
        }

        console.log('in profile')
        return(
            <div>
                {this.state.visible && this.props.location.pathname === `/${this.props.user.username}` ? <ProfPopUp visible={this.state.visible} project={this.state.selectedPost} handleClick={this.handleClick}/> : null}
                {this.state.visible && this.props.location.pathname !== `/${this.props.user.username}` ? <CollabPopUp visible={this.state.visible} project={this.state.selectedPost} handleClick={this.handleClick}/> : null}

                <SideNav user={this.props.user}/>
                <div className='profile-page'>
                    {uncompleted ?  <div><h1 style={{textAlign:'center'}}>Want to Collaborate With Me?</h1><ProjectContainer projects={uncompleted} handleClick={this.handleClick}/></div> : null }
                </div>
                <div className='profile-page'>
                    {collaborations ? <div><h1 style={{textAlign:'center'}}>Projects I Am A Part Of</h1><ProjectContainer projects={collaborations} handleClick={this.handleClick}/></div> : null}
                </div>
                <div className='profile-page'>
                    {completed || completedCollabs ?
                        <div>
                            <h1 style={{textAlign:'center'}}>Completed Projects</h1>
                            <div style={{justifyContent:'center'}}>
                                {completed ? <ProjectContainer projects={completed} handleClick={(e, project) => this.getPost(e, project)}/> : null}
                                {completedCollabs ? <ProjectContainer projects={completedCollabs} handleClick={(e, project) => this.getPost(e, project)}/> : null}
                            </div> 
                        </div>
                        : null }
                </div>
            </div>
            
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectProject: project => dispatch(selectedProject(project))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Profile))