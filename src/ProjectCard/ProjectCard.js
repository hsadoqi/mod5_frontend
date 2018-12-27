import './ProjectCard.css'

import React, { Component } from 'react'

class ProjectCard extends Component {

    render(){
        // console.log(this.props.user.projects)
        return(
            <div className='project-card' onClick={(e) => this.props.handleClick(e, this.props.project)}>
                <img src={this.props.project.img} alt=''/>
                <div className='card-content'>
                    <h5>{this.props.project.title}</h5>
                    <p >{this.props.project.description}</p>
                </div>
            </div>
        )
    }
}

export default ProjectCard