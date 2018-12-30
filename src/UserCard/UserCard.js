import './UserCard.css'

import React, {Component} from 'react'
import {Card, Image} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
// import Collaborator from '../Collaborator/Collaborator'
import {connect} from 'react-redux'
import {getOtherUser} from '../store/actions/userActions'

class UserCard extends Component {

    handleClick = (e) => {
        e.preventDefault()
        this.props.getUser(this.props.user)
        this.props.history.push(`/users/${this.props.user.username}`)
    }

    render(){
        console.log(this.props)
        return(
              <Card className='user-card'>
                <Image src={this.props.user.img} onClick={this.handleClick}/>
                <Card.Content>
                <Card.Header>{this.props.user.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>{this.props.user.bio}</Card.Description>
                </Card.Content>
            </Card>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: user => dispatch(getOtherUser(user))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(UserCard))