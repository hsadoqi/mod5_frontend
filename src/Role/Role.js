import React, {Component} from 'react'
import { Card, Button, Image } from 'semantic-ui-react'
// import Application from '../Application/Application'
import {Link} from 'react-router-dom'

class Role extends Component{

    handleClick = (e) => {
        e.preventDefault()
        console.log('clicked')
    }

    render(){
        console.log(this.props.applicant)
        return(
             <Card>
                    <Card.Content>
                        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                        <Card.Header>{this.props.applicant.name}</Card.Header>
                        <Card.Meta><Link to={this.props.applicant.username}>{this.props.applicant.username}</Link></Card.Meta>
                        <Card.Description>
                        {this.props.applicant.bio}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green' onClick={this.handleClick}>
                            Approve
                        </Button>
                        <Button basic color='red' onClick={this.handleClick}>
                            Decline
                        </Button>
                        </div>
                    </Card.Content>
                </Card>
        )
    }
}

export default Role