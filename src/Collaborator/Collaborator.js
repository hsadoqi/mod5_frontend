import './Collaborator.css'
import React, {Component} from 'react'
import Profile from '../Profile/Profile'

class Collaborator extends Component {

    render(){
        return(
            <div>
                <Profile user={this.props.user}/>
            </div>
        )
    }
}

export default Collaborator