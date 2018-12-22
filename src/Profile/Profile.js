import './Profile.css'
import React, { Component, Fragment } from 'react'
import { SocialIcon } from 'react-social-icons';
import ProjectCard from '../ProjectCard/ProjectCard'
import PopUp from '../Modal/Modal'

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
            <div className='profile-fragment'>
    `            <div className='profile-page'>
                    {this.state.visible ? <PopUp visible={this.state.visible} project={this.state.selectedPost} handleClick={this.handleClick}/> : null}
                    <div className='profile-container'>
                        <div>  
                            <div className='profile-icon'>
                                <img src={this.props.user.img} alt=''/>
                                <h1>{this.props.user.name}</h1>
                            </div>
                            <div className='social-media-icons'>
                                {this.props.user.facebook ? <SocialIcon url={this.props.user.facebook} style={{ height: 25, width: 25 }}/> :null}
                                {this.props.user.twitter ? <SocialIcon url={this.props.user.twitter} style={{ height: 25, width: 25, margin: 10 }}/> :null}
                                {this.props.user.linkedin ? <SocialIcon url={this.props.user.linkedin} style={{ height: 25, width: 25 }}/> :null}
                            </div>
                        </div >
                        <div className='profile-bio'>
                            <p>{this.props.user.bio}</p>
                        </div>
                    </div>
                    <hr/>
                    <h2>Projects</h2>
                    <div className='project-cards'>{projectArray}</div>  
                </div>
            </div>
            
        )
    }
}

export default Profile