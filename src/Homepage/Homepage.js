import React, { Component } from 'react'
import { withRouter } from 'react-router'
// import { connect } from 'react-redux'
import ProjectCard from '../ProjectCard/ProjectCard'
import './Homepage.css'
import PopUp from '../Modal/Modal'
import HomepageNav from '../HomepageNav/HomepageNav'
import {connect} from 'react-redux'
import {selectedProject} from '../store/actions/projectActions'
import ProjectContainer from '../ProjectContainer/ProjectContainer'

class Homepage extends Component {
    state = {
        visible: false, 
        selectedPost: ''
    }

    handleClick = (e, project) => {
        // console.log(project)
        this.setState({
            visible: !this.state.visible, 
            selectedPost: project
        })
        // this.props.handleClick(project)
        this.props.selectProject(project)
    }

    render(){

        return (
            <div className='project-homepage'>
                <HomepageNav user={this.props.user}/>
                {this.state.visible ? <PopUp visible={this.state.visible} project={this.state.selectedPost} handleClick={this.handleClick}/> : null}
                {this.props.user.projects ? <div><h1>Your Projects</h1><ProjectContainer projects={this.props.user.projects} handleClick={this.handleClick}/></div> : null }   
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectProject: (project) => dispatch(selectedProject(project))
    }
}


export default withRouter(connect(null, mapDispatchToProps)(Homepage))