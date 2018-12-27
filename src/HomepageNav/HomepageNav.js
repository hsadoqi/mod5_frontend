import './HomepageNav.css'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'

class HomepageNav extends Component {

    render(){
        return(
            <div className='sidenav'>
                <ul>
                    <li><h1 style={{textAlign:'center'}}>Welcome {this.props.user.name}</h1></li>
                    {this.props.location.pathname === '/homepage' ? <li><Link to='/new-project'>Create a New Project</Link></li> : <li><Link to='/'>Search Projects</Link></li>}
                    {this.props.location.pathname === '/homepage' ? <li><Link to='/'>Search Collaborators</Link></li> : null}
                </ul>
                
            </div>
        )
    }
}

export default withRouter(HomepageNav)