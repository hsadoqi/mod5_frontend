import './Profile.css'
import React, { Component} from 'react'
// import { SocialIcon } from 'react-social-icons';
import ProjectCard from '../ProjectCard/ProjectCard'
import PopUp from '../Modal/Modal'
import SideNav from '../SideNav/SideNav'

let projectArray 

class Profile extends Component {
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
        console.log(this.props.user)
        if(this.props.user.projects){
            projectArray = this.props.user.projects.map((project) => <ProjectCard key={project.id} project={project} handleClick={this.handleClick}/> )
        }
        return(
            <div>
                {this.state.visible ? <PopUp visible={this.state.visible} project={this.state.selectedPost} handleClick={this.handleClick}/> : null}
                <SideNav user={this.props.user}/>
                <div className='profile-page'>
                    <h2>Want to Collaborate?</h2>
                    <div className='project-cards'>{projectArray}</div>  
                </div>
            </div>
            
        )
    }
}

export default Profile