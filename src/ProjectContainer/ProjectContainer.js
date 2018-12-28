import React, {Component} from 'react'
import './ProjectContainer.css'
import ProjectCard from '../ProjectCard/ProjectCard'

let projectArray 

class ProjectContainer extends Component {

    render(){
        projectArray = this.props.projects.map((project) => <ProjectCard key={project.id} project={project} handleClick={this.props.handleClick}/>)
        console.log(this.props.projects)
        return(
            <div className='project-container'>
                {projectArray}
            </div>
        )
    }
}

export default ProjectContainer