import React, { Component } from 'react'
import './Register.css'
import { newUser } from '../store/actions/userActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
// import { }

class Register extends Component {
    state = {
        name: '',
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
        this.props.newUser(this.state)
    }

    componentDidUpdate(prevProps){
        if(prevProps.user !== this.props.user){ 
            localStorage.setItem('token', this.props.user.id)
            this.props.history.push(`/${this.props.user.id}/profile`)
        }
     }

    render(){
        // console.log(this.props.user)
        // console.log(this.props.location)
        return (
            <div>
                <h2>Create a New Account</h2>
                <form className='register' onSubmit={this.handleSubmit}>
                    <label>
                        Name
                    </label>
                    <input name="name" placeholder='Name' value={this.state.name} onChange={this.handleChange}/>
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

const mapDispatchToProps = (dispatch) => {
    return {
        newUser: (user) => dispatch(newUser(user))
    }
}

const mapStateToProps = state => {
    // console.log(state.user)
    // console.log(state)
    return {user: state.user}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register))