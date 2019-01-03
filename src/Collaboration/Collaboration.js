import React, { Component} from 'react'
import PopUp from '../Modal/Modal'
import ProjectCard from '../ProjectCard/ProjectCard'
import HomepageNav from '../HomepageNav/HomepageNav'

let applicationArray 
let projectArray

class Collaboration extends Component {
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
    }

    render(){
        // console.log(this.props.user.applications)
        if(this.props.user.applications){
            applicationArray = this.props.user.applications.filter((app) => app.approve === true )
            projectArray = applicationArray.map((app) => <div>
                <ProjectCard key={app.role.project.id} role={app.role.title} project={app.role.project} handleClick={this.handleClick}/>
            </div>)
                    
        }
        
        return (
            <div className='project-homepage'>
                <HomepageNav user={this.props.user}/>
                {this.state.visible ? <PopUp visible={this.state.visible} project={this.state.selectedPost} handleClick={this.handleClick}/> : null}
                <div className='project-container'>
                    {projectArray ? <div className='project-cards'>{projectArray}</div> : null }
                </div>
            </div>
        )
    }
}

export default Collaboration