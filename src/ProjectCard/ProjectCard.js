import './ProjectCard.css'

import React, { Component } from 'react'

class ProjectCard extends Component {

    render(){
        // console.log(this.props.user.projects)
        // console.log(this.props.project)
        return(
            <div className='project-card' onClick={(e) => this.props.handleClick(e, this.props.project)}>
               <h1>{this.props.project.title}</h1>
               <img src={this.props.project.img} alt=''/>
            </div>
        )
    }
}

export default ProjectCard