import './ProfPopUp.css'
import React, {Component, Fragment} from 'react'
import { Button, Header, Icon, Image, Modal} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {getAllRoles} from '../store/actions/roleActions'
import ApplicationContainer from '../ApplicationContainer/ApplicationContainer'
import {withRouter} from 'react-router-dom'

let arrayOfRoles 
let arrayOfApplicants
let arrayOfApproved

class ProfPopUp extends Component {
    state = {
        visible: false
    }

    componentDidMount(){
        this.props.getAllRoles(this.props.project)
    }

    handleClick = (role) => {
        // e.preventDefault()
        arrayOfApplicants = <ApplicationContainer role={role}/>
        this.setState({
            visible: !this.state.visible
        })
    }

    goBack = (e) => {
        e.preventDefault()
        this.props.handleClick(e, this.props.project)
    }

    clickHandler = (e) => {
        e.preventDefault()
        this.props.handleClick(e, this.props.project)
        console.log(this.props.project)
        this.props.history.push(`/projects/${this.props.project.id}`)
    }

    render(){
        console.log(this.props.roles)
        if(this.props.roles){
            let array = this.props.roles.filter((role) => role.filled === false)
            let approved = this.props.roles.filter((role) => role.filled === true)
            console.log(approved)
            console.log(array)
            console.log(this.props.roles)
            arrayOfRoles = array.map((role) => <Fragment key={role.id}><h4>{role.title}</h4><p>{role.applicants.length} applications</p> {role.applicants.length !== 0 ? <button onClick={() => this.handleClick(role)}>{this.state.visible ? 'Go Back' : 'View Applicants'}</button> : null}</Fragment>)
            arrayOfApproved = approved.map((role) => <Fragment>
                <h4>{role.title}</h4>
                <ApplicationContainer role={role}/>
            </Fragment>)
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
                    {arrayOfApplicants && this.state.visible ? <div><h4>Applicants:</h4> {arrayOfApplicants}</div> : null}
                    <hr/>
                    {arrayOfApproved ? arrayOfApproved : null}
                </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                <Button onClick={this.goBack}>
                    Go Back <Icon name='right chevron' />
                </Button>
                <Button primary onClick={this.clickHandler}>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfPopUp))