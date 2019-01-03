import './Project.css'
import React, {Component} from 'react'
import ProjectRole from '../ProjectRole/ProjectRole'

let filledRoles
let unfilledRoles
let roleApps
let collabs

class Project extends Component {
    state = {
        show: false
    }
    // state = {}

    // componentDidMount(){
    //     let project = JSON.parse(localStorage.getItem('project'))
    //     `/${this.props.user.username}`
    // }

    handleClick = (e) => {
        e.preventDefault()
        this.setState({
            show: !this.state.show
        })
    }

    render(){
        let project = JSON.parse(localStorage.getItem('project'))
        // console.log(this.state)
        console.log(project)
        console.log(project.roles)
        if(project.roles){
            filledRoles = project.roles.filter((role) => role.filled === true)
            unfilledRoles = project.roles.filter((role) => role.filled === false)
            roleApps = unfilledRoles.map((role) => <div><h4>{role.title}</h4><p>{role.description}</p><button>Apply</button></div>)
            collabs = filledRoles.map((collab) => <ProjectRole collaborator={collab}/>)
        }
        
        console.log(filledRoles)
        console.log(unfilledRoles)
        console.log(roleApps)
        return(
            <div>
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
                    <br/>
                    <button onClick={this.handleClick}>{this.state.show ? 'Hide' : 'Show Roles'}</button>
                </div>
                <div style={{display: this.state.show ? 'block' : 'none'}} className='project-roles'>
                    {collabs.length !== 0 ? <div><h3>Existing Collaborators</h3>{collabs}</div> : null }
                    {roleApps.length !== 0 ? <div><h3>Join</h3>{roleApps}</div> : null}
                </div>
            </div>
            
        )
    }
}


export default Project