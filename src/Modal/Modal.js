import React,  { Component, Fragment } from 'react'
import { Button, Header, Icon, Image, Modal, Card } from 'semantic-ui-react'
// import ProjectCard from '../ProjectCard/ProjectCard'
// import Role from '../Role/Role'
import ApplicationContainer from '../ApplicationContainer/ApplicationContainer'
import {withRouter} from 'react-router'
import AddRole from '../AddRole/AddRole'
import {connect} from 'react-redux'
import {getAllRoles, addNewRole} from '../store/actions/roleActions'
// import RoleContainer from '../RoleContainer/RoleContainer'

let arrayOfRoles 

class PopUp extends Component {
    state = {
        visible: false
    }

    componentDidMount(){
        // this.props.getRoles(this.props.project)
        console.log('mounted')
        // if(this.props.location.pathname !== '/collaborations'){
        //     this.props.getRoles(this.props.project)
        //     arrayOfRoles = this.props.roles.map((role) => <Fragment><h1>{role.title}</h1><Card.Group><Application role={role}/></Card.Group></Fragment>)
        // }
    }

    handleClick = (e) => {
        e.preventDefault()
        this.props.handleClick(e, this.props.project)
        this.props.history.push(`/projects/${this.props.project.id}`)
    }

    clickHandler = (e) => {
        e.preventDefault()
        this.setState({
            visible: !this.state.visible
        })
    }

    addNewRole = (role) => {
        // console.log(role)
        this.props.addRole(this.props.project, role)
    }

    render(){
        // console.log(this.props.project)
        // console.log(this.props)
        
        // console.log(this.props.project.roles)
        // console.log(this.props.roles)
        if(this.props.location.pathname !== '/collaborations' && this.props.roles){
            console.log(this.props.roles)
            // console.log(this.props.project.roles)
            arrayOfRoles = this.props.roles.map((role) => <Fragment key={role.id}>
                <h1>{role.title}</h1>
                <ApplicationContainer role={role} applicants={role.applicants} />
                <br/>
            </Fragment>)
            // arrayOfRoles = this.props.roles.map((role) => <Fragment key={role.id}><h1>{role.title}</h1><Card.Group><Application role={role}/></Card.Group><br/></Fragment>)
        }

        // console.log(this.props.roles)
        return(
            <Modal open={this.props.visible}>
                <Modal.Header>{this.props.project.title}</Modal.Header>
                <Modal.Content image>
                <Image wrapped size='medium' src={this.props.project.img} />
                <Modal.Description>
                    <Header>{this.props.project.description}</Header>
                    <p>{this.props.project.content}</p>
                    {this.props.location.pathname !== '/collaborations' ? arrayOfRoles : null}
                    <br/><hr/><br/>
                    {this.props.location.pathname === '/homepage' ? <Button onClick={this.clickHandler}>
                    {this.state.visible ? 'Cancel' : 'Add Role'} <Icon name='right chevron' />
                </Button> : null}
                {this.state.visible ? <AddRole addRole={(role) => this.addNewRole(role)}/> : null }
                </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                <Button onClick={this.props.clickHandler}>
                    Go Back <Icon name='right chevron' />
                </Button>
                <Button primary onClick={this.handleClick}>
                    Go To Show Page <Icon name='right chevron' />
                </Button>
                </Modal.Actions>
            </Modal>
            )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getRoles: project => dispatch(getAllRoles(project)), 
        addRole: (project, role) => dispatch(addNewRole(project, role)), 
    }
}

const mapStateToProps = state => {
    return {
        roles: state.roles.roles
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PopUp))