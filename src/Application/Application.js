import './Application.css'
import React, { Component } from 'react'
// import { Button, Card, Image } from 'semantic-ui-react'
import Role from '../Role/Role'
import {connect} from 'react-redux'
import {getOtherUser} from '../store/actions/userActions'
import {getApps} from '../store/actions/appActions'
import RoleCard from '../RoleCard/RoleCard'

let arrayOfApplicants
let unfilledApps
let approvedApp

class Application extends Component {

     componentDidMount(){
         this.props.getApps(this.props.role)
        //  console.log(this.props.apps)
     }

    render(){
        console.log(this.props.apps)
        console.log(this.props.role)
        console.log(this.props.role.applicants.length)
        console.log(this.props.role.applications)

        // if(this.props.role.applicants.length !== 0){
        //     let arrayOfApplications = this.props.role.applications.filter((app) => app.approve === true)
        //     console.log(arrayOfApplications.length)

        //     console.log(this.props.role.applications)
        // }
        // if(this.props.role.applicants !== []){
        //     console.log('applicants')
        //     let arrayOfApplications = this.props.role.applications.filter((app) => app.approve === true)
        //     console.log(arrayOfApplications)
        //     if(arrayOfApplications.length !== 0){
        //         console.log('we have approvals!')
        //         let foundUser = this.props.role.applicants.find((user) => user.id === arrayOfApplications[0].collaborator_id)
        //         console.log(foundUser)
        //         approvedApp = <RoleCard collaborator={foundUser}/>
        //     }
        //     let arrayOfApplications = this.props.role.applications.filter((app) => app.approve === true && app.role_id === this.props.role.id)
        //     // console.log(arrayOfApplications)
        //     console.log('checking app length')
        //     if(arrayOfApplications.length === 0){
        //         console.log('checking applications length')
        //         arrayOfApplicants = this.props.role.applicants.map((applicant) => <Role applicant={applicant} role={this.props.role} applications={this.props.role.applications}/>)
        //     } else {
        //         console.log('should have been approved already')
        //         let foundApp = this.props.role.applicants.find((app) => app.id === arrayOfApplications[0].collaborator_id)
        //         approvedApp = <RoleCard collaborator={foundApp}/>
        //     } 
        // }
        // console.log('in application')
        // console.log(arrayOfApplicants)
        // console.log(approvedApp)
        return(
            <div>
                {arrayOfApplicants !== [] ? arrayOfApplicants : null}
                {approvedApp !== [] ? approvedApp : null }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getApps: (role) => dispatch(getApps(role))
    }
}

const mapStateToProps = state => {
    return {
        apps: state.apps.apps[0]
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Application)