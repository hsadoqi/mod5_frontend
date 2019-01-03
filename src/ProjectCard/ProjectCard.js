import './ProjectCard.css'
import {withRouter} from 'react-router-dom'

import React, { Component } from 'react'

class ProjectCard extends Component {

    // handleClick = (e) => {
    //     e.preventDefault()
    //     this.props.handleClick(this.props.project)
    // }

    render(){
        // console.log(this.props.user.projects)
        return(
            <div className='project-card' onClick={(e) => this.props.handleClick(e, this.props.project)}>
                <img src={this.props.project.img} alt=''/>
                <div className='card-content'>
                    <h5>{this.props.project.title}</h5>
                    <p >{this.props.project.description}</p>
                    {this.props.location.pathname === '/collaborations' ? <p><strong>{this.props.role}</strong></p> : null}
                </div>
            </div>
        )
    }
}

export default withRouter(ProjectCard)