import './SideNav.css'
import React, {Component} from 'react'
import { SocialIcon } from 'react-social-icons';
import {withRouter} from 'react-router'

let interests 

class SideNav extends Component {

    
    render(){

        interests = `${this.props.user.firstPreference ? `${this.props.user.firstPreference}` : ''}${this.props.user.secondPreference ? `, ${this.props.user.secondPreference}` : ''}${this.props.user.thirdPreference ? `, ${this.props.user.thirdPreference}` : ''}`

        return(
            <div className='sidenav'>

            <div>  
                <div className='profile-icon'>
                    <img src={this.props.user.img} alt=''/>
                    <h1>{this.props.user.name}</h1>
                </div>
                <div className='social-media-icons'>
                    {this.props.user.facebook ? <SocialIcon url={this.props.user.facebook} style={{ height: 25, width: 25 }}/> :null}
                    {this.props.user.twitter ? <SocialIcon url={this.props.user.twitter} style={{ height: 25, width: 25, margin: 10 }}/> :null}
                    {this.props.user.linkedin ? <SocialIcon url={this.props.user.linkedin} style={{ height: 25, width: 25 }}/> :null}
                </div>
                <div className='profile-bio'>
                    <p>{this.props.user.bio}</p>
                </div>
                <div className='profile-interests'>
                    <strong>Interests:</strong> {interests}
                </div>
                </div >
            </div>
        )
    }
}

export default withRouter(SideNav)