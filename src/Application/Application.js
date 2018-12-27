import './Application.css'
import React, { Component } from 'react'
// import { Button, Card, Image } from 'semantic-ui-react'
import Role from '../Role/Role'


class Application extends Component {

    render(){
        console.log(this.props.role.applicants)
        let arrayOfApplicants = this.props.role.applicants.map((applicant) => <Role applicant={applicant}/>)
        console.log(arrayOfApplicants)
        return(
            <div>
                {arrayOfApplicants}
            </div>
        )
    }
}

export default Application