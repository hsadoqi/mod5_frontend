import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import ProjectCard from '../Homepage/Homepage'

class Profile extends Component {

    render(){
        return (
            <div>
                <h1>Welcome {this.props.user.name}</h1>
                <ProjectCard user={this.props.user}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default withRouter(connect(mapStateToProps)(Profile))