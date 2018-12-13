import React, { Component } from 'react';
import './NavBar.css'
import { animateScroll as scroll } from "react-scroll";
import { withRouter } from 'react-router'


class NavBar extends Component {

    handleClick = (e) => {
        e.preventDefault()
        console.log('hi')
        if(this.props.location.pathname === '/'){
            this.scrollToBottom()
        } else {
            this.props.history.push('/')
            // console.log(this.props.location)
            this.scrollToBottom()
        }
    }

    scrollToBottom = () => {
        scroll.scrollTo(3000)
    }

    render(){
        // console.log(this.props.location)
        // console.log(localStorage)
        return(
            <div className='wrapper'>
                <nav className='black'>
                    <div className='logo'><a href='/'>LOGO</a></div>
                    <ul>
                        <li className='active'><a href='/login'>Log In</a></li>
                        <li className='active' onClick={this.handleClick}><a>Register</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default withRouter(NavBar)