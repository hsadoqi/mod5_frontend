import './Project.css'
import React, {Component} from 'react'

class Project extends Component {
    state = {}

    componentDidMount(){
        let project = JSON.parse(localStorage.getItem('project'))
        this.setState({project: project})
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            project: {
                [e.target.name]: e.target.value
            }
        })
    }

    render(){
        let project = JSON.parse(localStorage.getItem('project'))
        console.log(this.state)
        return(
            <div className='project-profile'>
                <div className='project-header'>
                    <h1>{project.title}</h1>
                    <label className='edit-labels'>Edit</label>
                    <input className='edit-inputs' name='title' value={this.state.title} onChange={this.handleChange}/>
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