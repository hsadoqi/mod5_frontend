import './ApplicationContainer.css'
import React, {Component} from 'react'
import Role from '../Role/Role'
import RoleCard from '../RoleCard/RoleCard'


class ApplicationContainer extends Component {
    state = {
        applications: [],
        applicants: []
    }
    componentDidMount(){
        this.setState({
            applications: this.props.role.applications,
            applicants: this.props.role.applicants
        })
    }

    render(){
        
        let arrayOfApplications
        let approvedApp
        let approvedUser
        if(this.state.applications.length !== 0 && this.props.role.filled === false){
            arrayOfApplications = this.state.applicants.map((app) => <Role applicant={app} role={this.props.role} applications={this.state.applications}/>)
        } else if(this.state.applications.length !== 0 && this.props.role.filled === true){
            approvedApp = this.state.applications.find((app) => app.approve === true)
            if(approvedApp){
            approvedUser = this.state.applicants.find((app) => app.id === approvedApp.collaborator_id)
            }
            console.log(approvedUser)
        }
        return(
            <div>
                {arrayOfApplications ? arrayOfApplications : null}
                {approvedUser ? <RoleCard collaborator={approvedUser}/> : null}
            </div>
        )
    }
}

export default ApplicationContainer