import './ProjectCard.css'

import React, { Component } from 'react'

class ProjectCard extends Component {

    render(){
        console.log(this.props.user.projects)
        return(
            <div>
               Project Card

            </div>
        )
    }
}

export default ProjectCard