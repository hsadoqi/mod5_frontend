import React, { Component } from 'react';
import './NavBar.css'
import { animateScroll as scroll } from "react-scroll";
import { withRouter} from 'react-router'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { findUser } from '../store/actions/userActions'
// import Switch from 'react-switch'
// use react router dom

class NavBar extends Component {
    state = {
        profile: ''
    }

    handleClick = (e) => {
        e.preventDefault()
        if(this.props.location.pathname === '/'){
            this.scrollToBottom()
        } else {
            this.props.history.push('/')
            this.scrollToBottom()
        }
    }

    scrollToBottom = () => {
        scroll.scrollTo(3000)
    }

    logOut = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        this.props.history.push('/')
    }

    componentDidUpdate(){
        let token = localStorage.getItem('token')
        if(token){
            let project = document.getElementsByName('project')
            let collab = document.getElementsByName('collab')
            if(this.props.location.pathname === '/homepage'){
                project[0].className = 'select'
                collab[0].className = 'profile'
            } else if(this.props.location.pathname === '/collaborations'){
                collab[0].className = 'select'
                project[0].className = 'profile'
            } else {
                project[0].className = 'profile'
                collab[0].className = 'profile'
            }
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            profile: e.target.name
        })
    }


    render(){
        // console.log(this.props.user)
        let token = localStorage.getItem('token')
        // console.log(this.state.profile)
        return(
            <div className='wrapper'>
                <nav className='black'>
                    <div className='logo'><Link to='/'>LOGO</Link></div>
                    <ul>
                        {token ? <li onClick={this.handleChange}><Link to='/homepage' name='project' className='profile'>Your Projects</Link></li> : null}
                        {token ? 
                        <li onClick={this.handleChange}><Link to='/collaborations' className='profile' name='collab'>Collaborations</Link></li> : <li className='active'><Link to='/login'>Log In</Link></li>}
                        {token ? 
                        <li className='active' onClick={this.logOut}><Link to='/'>Log Out</Link></li> : <li className='active' onClick={this.handleClick}><Link to='/'>Register</Link></li>}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default withRouter(NavBar)













