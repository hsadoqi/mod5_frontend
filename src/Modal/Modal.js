import React,  { Component } from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
// import ProjectCard from '../ProjectCard/ProjectCard'
import Application from '../Application/Application'

class PopUp extends Component {

    render(){
        console.log(this.props.project)
        return(
            <Modal open={this.props.visible}>
                <Modal.Header>{this.props.project.title}</Modal.Header>
                <Modal.Content image>
                <Image wrapped size='medium' src={this.props.project.img} />
                <Modal.Description>
                    <Header>{this.props.project.title}</Header>
                    <p>{this.props.project.description}</p>
                    <Application/>
                </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                <Button primary onClick={this.props.handleClick}>
                    Proceed <Icon name='right chevron' />
                </Button>
                </Modal.Actions>
            </Modal>
            )
    }
}

export default PopUp