import './RoleCard.css'
import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'
// import {Link} from 'react-router-dom'
import {getOtherUser} from '../store/actions/userActions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class RoleCard extends Component {

    handleClick = (e) => {
        e.preventDefault()
        this.props.getUser(this.props.collaborator)
        this.props.history.push(`/users/${this.props.collaborator.username}`)
    }

    render(){
        console.log(this.props.collaborator)
        return(
              <Card
                    onClick={this.handleClick}
                    header={this.props.collaborator.name}
                    meta={this.props.collaborator.username}
                    description={this.props.collaborator.bio}
                />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: user => dispatch(getOtherUser(user))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(RoleCard))