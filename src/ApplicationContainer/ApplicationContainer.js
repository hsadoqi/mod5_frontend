import './ApplicationContainer.css'
import React, {Component} from 'react'
import Role from '../Role/Role'
import RoleCard from '../RoleCard/RoleCard'
import {connect} from 'react-redux'
import {getApps} from '../store/actions/roleActions'
import {getApplicants} from '../store/actions/userActions'

// let users

class ApplicationContainer extends Component {

    componentDidMount(){
        this.props.getApps(this.props.role)
        this.props.apps.map((app) => this.props.getApplicants(app.collaborator_id))
    }


    render(){
        console.log(this.props.apps)
        console.log(this.props.applicants)
        let arrayOfApplications
        let approvedApp
        let approvedUser
        if(this.props.apps.length !== 0 && this.props.role.filled === false){
            // let array = this.props.apps.filter((app) => app.reject === true)
            // let users = array.map((role) => role.collaborator_id)
            // console.log(users)
            // let nonrejected = this.props.applicants.filter((app) => users.includes(app.id) === false)
            // console.log(nonrejected)
            // console.log(users)
            console.log(this.props.applicants)
            arrayOfApplications = this.props.applicants.map((app) => <Role applicant={app} role={this.props.role} applications={this.props.apps}/> )
        } else if(this.props.apps.length !== 0 && this.props.role.filled === true){
            console.log(this.props.applications)
            approvedApp = this.props.role.applications.find((app) => app.approve === true)
            console.log(approvedApp)
            if(approvedApp){
                console.log(this.props.app)
                approvedUser = this.props.applicants.find((app) => app.id === approvedApp.collaborator_id)
            }
            console.log(approvedUser)
        }
        return(
            <div>
                {arrayOfApplications ? arrayOfApplications : null }
                {approvedUser ? <RoleCard collaborator={approvedUser}/> : null}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getApps: (role) => dispatch(getApps(role)), 
        getApplicants: (id) => dispatch(getApplicants(id))
    }
}

const mapStateToProps = state => {
    return {
        apps: state.roles.apps, 
        // app: state.apps.app
        // applicants: state.user.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationContainer)