import React, { Component } from 'react'
import { withRouter } from 'react-router'
// import { connect } from 'react-redux'
// import ProjectCard from '../ProjectCard/ProjectCard'
import './Homepage.css'
import PopUp from '../Modal/Modal'
import HomepageNav from '../HomepageNav/HomepageNav'
import {connect} from 'react-redux'
import {selectedProject} from '../store/actions/projectActions'
import {getAllRoles} from '../store/actions/roleActions'
import ProjectContainer from '../ProjectContainer/ProjectContainer'

class Homepage extends Component {
    state = {
        visible: false, 
        selectedPost: ''
    }

    handleClick = (e, project) => {
        e.preventDefault()
        console.log(project)
        this.setState({
            visible: !this.state.visible, 
            selectedPost: project
        })
        // this.props.handleClick(project)
        
        this.props.selectProject(project)
        this.props.getRoles(project)
    }

    render(){
        // console.log(this.props.project)
        // console.log(this.props.roles)
        // console.log(this.state.selectedPost)
        let projectArray

        if(this.props.project){
            projectArray = [...this.props.projects, this.props.project]
        } else {
            projectArray = this.props.projects
        }

        // console.log(this.props)
        return (
            <div className='project-homepage'>
                <HomepageNav user={this.props.user}/>
                {this.state.visible ? <PopUp visible={this.state.visible} project={this.state.selectedPost} handleClick={(e, project) => this.handleClick(e, project)} roles={this.props.roles}/> : null}
                {projectArray ? <div><h1>Your Projects</h1><ProjectContainer projects={projectArray} handleClick={this.handleClick}/></div> : null }   
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getRoles: project => dispatch(getAllRoles(project)), 
        selectProject: (project) => dispatch(selectedProject(project))

    }
}

const mapStateToProps = state => {
    return {
        projects: state.user.projects,
        project: state.projects.project, 
        roles: state.roles.roles
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage))