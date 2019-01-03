import './Collaborator.css'
import React, {Component} from 'react'
import Profile from '../Profile/Profile'
import CollabPopUp from '../CollabPopUp/CollabPopUp'

class Collaborator extends Component {

    render(){
        console.log('collaborator')
        return(
            <div>
                <Profile user={this.props.user}/>
            </div>
        )
    }
}

export default Collaborator