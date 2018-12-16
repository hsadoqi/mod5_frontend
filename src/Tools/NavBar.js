import React, { Component } from 'react';
import './NavBar.css'
import { animateScroll as scroll } from "react-scroll";
import { withRouter} from 'react-router'
import { Link } from 'react-router-dom'
// use react router dom


class NavBar extends Component {

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

    render(){
        return(
            <div className='wrapper'>
                <nav className='black'>
                    <div className='logo'><Link to='/'>LOGO</Link></div>
                    <ul>
                        <li className='active'><Link to='/login'>Log In</Link></li>
                        <li className='active' onClick={this.handleClick}><Link to='/'>Register</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default withRouter(NavBar)