import React,  { Component, Fragment } from 'react'
import { Button, Header, Icon, Image, Modal, Card } from 'semantic-ui-react'
// import ProjectCard from '../ProjectCard/ProjectCard'
// import Role from '../Role/Role'
import Application from '../Application/Application'
import {withRouter} from 'react-router'

let arrayOfRoles 

class PopUp extends Component {

    handleClick = (e) => {
        e.preventDefault()
        this.props.handleClick(e, this.props.project)
        this.props.history.push(`/projects/${this.props.project.id}`)
    }

    render(){
        console.log(this.props.project)
        // console.log(this.props.project.roles)
        if(this.props.location.pathname !== '/collaborations'){
            arrayOfRoles = this.props.project.roles.map((role) => <Fragment><h1>{role.title}</h1><Card.Group><Application role={role}/></Card.Group></Fragment>)
        }
        
        return(
            <Modal open={this.props.visible}>
                <Modal.Header>{this.props.project.title}</Modal.Header>
                <Modal.Content image>
                <Image wrapped size='medium' src={this.props.project.img} />
                <Modal.Description>
                    <Header>{this.props.project.description}</Header>
                    <p>{this.props.project.content}</p>
                    {this.props.location.pathname !== '/collaborations' ? arrayOfRoles : null}
                </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                <Button onClick={this.props.handleClick}>
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

export default withRouter(PopUp)