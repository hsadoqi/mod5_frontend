import React, {Component} from 'react'
import { Card, Button, Image } from 'semantic-ui-react'
// import Application from '../Application/Application'
import {Link} from 'react-router-dom'
import {getOtherUser} from '../store/actions/userActions'
import {updateApplication, rejectApplication} from '../store/actions/roleActions'
import {fillRole, fixStuff} from '../store/actions/roleActions'
import {connect} from 'react-redux'

class Role extends Component{
    state = {
        update: false
    }

    componentDidMount(){
        this.props.getUser(this.props.applicant)
    }

    handleClick = (e) => {
        e.preventDefault()
        console.log(this.props.applicant)
        // let array = this.props.applications.map((arr) => arr.find((app) => app.role_id === this.props.role.id))
        let approvedUser = this.props.role.applications.find((app) => app.collaborator_id === this.props.applicant.id)
        
        // let secondArray = array.filter((arr) => arr !== undefined)
        // let thirdArray = secondArray.filter((app) => app.role_id === this.props.role.id)
        // console.log(thirdArray)
        console.log(approvedUser)
        // console.log(unapprovedArray)

        this.props.updateApp(approvedUser)
        // console.log(unapprovedArray.length)
        // console.log(this.props.app.length)
      
        // this.setState({update: true})
        // if(unapprovedArray.length !== 0 && this.props.app.length !== 0){
        //     console.log("inside if statement")
        //     unapprovedArray.map((app) => this.props.rejectApp(app))
        // }
        // console.log('clicked')
        // console.log(foundApp)
        // console.log(otherApps)
        // this.props.updateApp({approve:true}, foundApp[0])
        // if(otherApps){otherApps.map((app) => this.props.rejectApp(app))}
        // // this.updateUser()
        // this.props.fillRole(this.props.role)
    }

    componentDidUpdate(){
        if(this.props.app){
            let unapprovedArray = this.props.role.applications.filter((app) => app.collaborator_id !== this.props.applicant.id)
            if(unapprovedArray.length !== 0 && this.props.app){
                console.log("inside if statement")
                unapprovedArray.map((app) => this.props.rejectApp(app))
            }
            this.props.fixStuff()
        }
    }

    clickHandler = (e) => {
        e.preventDefault()
        console.log(this.props.applicant)
        console.log(this.props.applications)
        // let foundApp = this.props.applications.filter((app) => app.collaborator_id === this.props.applicant.id)
        // console.log(foundApp)
        // this.props.rejectApp(foundApp[0])
    }

    render(){
        console.log(this.props.applicant)
        console.log(this.props)
        console.log(this.props.applications)
        console.log(this.props.app)
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
        updateApp: (app) => dispatch(updateApplication(app)), 
        fillRole: (role) => dispatch(fillRole(role)), 
        getUser: (userInfo) => dispatch(getOtherUser(userInfo)),
        rejectApp: (app) => dispatch(rejectApplication(app)), 
        fixStuff: () => dispatch(fixStuff())
    }
}

const mapStateToProps = state => {
    return {
        app: state.roles.app
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Role)