import './Project.css'
import React, {Component} from 'react'

class Project extends Component {

    render(){
        let project = JSON.parse(localStorage.getItem('project'))

        return(
            <div className='project-profile'>
                <div className='project-header'>
                    <h1>{project.title}</h1>
                    <img src={project.img} alt=''/>
                    <h4>{project.category}</h4>
                    <p>{project.description}</p>
                </div>
                <div>
                    {project.content}
                </div>
            </div>
        )
    }
}


export default Project