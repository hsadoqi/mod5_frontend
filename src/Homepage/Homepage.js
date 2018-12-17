import React, { Component } from 'react'
import { withRouter } from 'react-router'
// import { connect } from 'react-redux'
import ProjectCard from '../ProjectCard/ProjectCard'
import './Homepage.css'

let projectArray

class Homepage extends Component {
    state = {
        projects: []
    }

    // componentDidUpdate(){
    //     if(this.props.user.projects){
    //         this.setState({
    //             projects: this.props.user.projects
    //         })
    //     }
    // }

    render(){
        if(this.props.user.projects){
            projectArray = this.props.user.projects.map((project) => <ProjectCard key={project.id} project={project}/> )
        }

        return (
            <div className='project-container'>
                <h1>Welcome {this.props.user.name}</h1>
                {projectArray ? projectArray : null }
            </div>
        )
    }
}


export default withRouter(Homepage)