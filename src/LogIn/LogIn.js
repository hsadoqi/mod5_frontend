import React, { Component } from 'react';
import './LogIn.css'

class LogIn extends Component {
    state = {
        username: '', 
        password: ''
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log('logged in!')
    }

    render(){
        // console.log(this.state)
        return (
            <div className='login'>
            <h2>Log In</h2>
            <form  onSubmit={this.handleSubmit}>
                <label>
                    Username
                </label>
                <input name="username" placeholder='Username' value={this.state.username} onChange={this.handleChange}/>
                <label>
                    Password
                </label>
                <input name="password" placeholder='Password' value={this.state.password} onChange={this.handleChange}/>
                <button className='submit-btn'>Submit</button>
            </form>
            </div>
        )
    }
}

export default LogIn