import React, { Component } from 'react'
import { withRouter } from 'react-router'
// import { connect } from 'react-redux'
import ProjectCard from '../ProjectCard/ProjectCard'
import './Homepage.css'
import PopUp from '../Modal/Modal'
import HomepageNav from '../HomepageNav/HomepageNav'

let projectArray

class Homepage extends Component {
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
        if(this.props.user.projects){
            projectArray = this.props.user.projects.map((project) => <ProjectCard key={project.id} project={project} handleClick={this.handleClick}/> )
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


export default withRouter(Homepage)