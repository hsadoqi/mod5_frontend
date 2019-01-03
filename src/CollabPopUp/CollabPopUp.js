import './CollabPopUp.css'
import React, {Component, Fragment} from 'react'
import { Button, Header, Icon, Image, Modal} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {getAllRoles} from '../store/actions/roleActions'
// import Application from '../Application/Application'

let arrayOfRoles 
let arrayOfApplicants

class CollabPopUp extends Component {
    state = {
        visible: false
    }

    componentDidMount(){
        this.props.getAllRoles(this.props.project)
    }

    handleClick = (role) => {
        console.log(role)
        // e.preventDefault()
        // arrayOfApplicants = <Application role={role}/>
        // this.setState({
        //     visible: !this.state.visible
        // })

    }

    render(){
        // console.log('in popup')
        if(this.props.roles){
            let array = this.props.roles.filter((role) => role.filled === false)
            arrayOfRoles = array.map((role) => <Fragment key={role.id}><h4>{role.title}</h4><button onClick={() => this.handleClick(role)}>Apply</button></Fragment>)
        }

        return (
            <Modal open={this.props.visible}>
                <Modal.Header>{this.props.project.title}</Modal.Header>
                <Modal.Content image>
                <Image wrapped size='medium' src={this.props.project.img} />
                <Modal.Description>
                    <Header>{this.props.project.description}</Header>
                    <p>{this.props.project.content}</p>
                    {arrayOfRoles ? arrayOfRoles : null}
                    {arrayOfApplicants && this.state.visible ? arrayOfApplicants : null}
                    <hr/>
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

const mapStateToProps = state => {
    return {
        roles: state.roles.roles
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllRoles: project => dispatch(getAllRoles(project))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CollabPopUp)