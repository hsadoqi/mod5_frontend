import React, {Component} from 'react'
import { Card, Button, Image } from 'semantic-ui-react'
// import Application from '../Application/Application'
import {Link} from 'react-router-dom'
import {getOtherUser} from '../store/actions/userActions'
import {updateApplication} from '../store/actions/appActions'
import {fillRole} from '../store/actions/roleActions'
import {connect} from 'react-redux'

class Role extends Component{

    componentDidMount(){
        this.props.getUser(this.props.applicant)
    }

    handleClick = (e) => {
        e.preventDefault()
        let foundApp = this.props.applications.filter((app) => app.collaborator_id === this.props.applicant.id)
        let otherApps = this.props.applications.filter((app) => app.collaborator_id !== this.props.applicant.id)
        console.log('clicked')
        console.log(foundApp)
        console.log(otherApps)
        this.props.updateApp({approve:true, reject: false}, foundApp[0])
        if(otherApps){otherApps.map((app) => this.props.updateApp({approve: false, reject:true}, app))}
        // this.updateUser()
        this.props.fillRole(this.props.role)
    }

    clickHandler = (e) => {
        e.preventDefault()
        let foundApp = this.props.applications.filter((app) => app.collaborator_id === this.props.applicant.id)
        console.log(foundApp)
        this.props.updateApp({approve: false, reject: true}, foundApp)
    }

    render(){
        console.log(this.props.applicant)
        console.log(this.props)
        console.log(this.props.applications)
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
                        <Button basic color='red' onClick={this.clickHandler}>
                            Decline
                        </Button>
                        </div>
                    </Card.Content>
                </Card>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateApp: (newInfo, app) => dispatch(updateApplication(newInfo, app)), 
        fillRole: (role) => dispatch(fillRole(role)), 
        getUser: (userInfo) => dispatch(getOtherUser(userInfo))
    }
}

// const mapStateToProps = state => {
//     return {
//         user: state.users.selectedUser
//     }
// }


export default connect(null, mapDispatchToProps)(Role)