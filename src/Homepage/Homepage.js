import React, { Component } from 'react'
import { withRouter } from 'react-router'
// import { connect } from 'react-redux'
import ProjectCard from '../ProjectCard/ProjectCard'
import './Homepage.css'
import PopUp from '../Modal/Modal'

let projectArray

class Homepage extends Component {
    state = {
        projects: [], 
        visible: false, 
        selectedPost: ''
    }

    // componentDidUpdate(){
    //     if(this.props.user.projects){
    //         this.setState({
    //             projects: this.props.user.projects
    //         })
    //     }
    // }

    handleClick = (e, project) => {
        // console.log(project)
        this.setState({
            visible: !this.state.visible, 
            selectedPost: project
        })
    }

    render(){
        console.log(this.props.user)
        // console.log(this.state.visible)
        if(this.props.user.projects){
            projectArray = this.props.user.projects.map((project) => <ProjectCard key={project.id} project={project} handleClick={this.handleClick}/> )
        }

        return (
            <div className='project-homepage'>
                {this.state.visible ? <PopUp visible={this.state.visible} project={this.state.selectedPost} handleClick={this.handleClick}/> : null}
                <h1 style={{textAlign:'center'}}>Welcome {this.props.user.name}</h1>
                <div className='project-container'>
                {projectArray ? projectArray : null }
                </div>
            
            </div>
        )
    }
}


export default withRouter(Homepage)