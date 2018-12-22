import React, { Component, Fragment } from 'react'
import PopUp from '../Modal/Modal'
import ProjectCard from '../ProjectCard/ProjectCard'

let applicationArray 
let projectArray

class Collaboration extends Component {
    state = {
        projects: [], 
        visible: false, 
        selectedPost: ''
    }

    handleClick = (e, project) => {
        // console.log(project)
        this.setState({
            visible: !this.state.visible, 
            selectedPost: project
        })
    }

    

    render(){
        console.log(this.props.user.applications)
        if(this.props.user.applications){
            applicationArray = this.props.user.applications.filter((app) => app.approve === true )
            projectArray = applicationArray.map((app) => <div>
                <h1>{app.role.title}</h1>
                <ProjectCard key={app.role.project.id} project={app.role.project} handleClick={this.handleClick}/>
            </div>)
                    
            
        }
        

        return (
            <div className='project-homepage'>
                {this.state.visible ? <PopUp visible={this.state.visible} project={this.state.selectedPost} handleClick={this.handleClick}/> : null}
                <h1 style={{textAlign:'center'}}>Welcome {this.props.user.name}</h1>
                {projectArray ? projectArray : null }
            </div>
        )
    }
}

export default Collaboration