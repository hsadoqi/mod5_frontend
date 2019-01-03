import './AddRole.css'
import React, {Component } from 'react'
// import {connect} from 'react-redux'

class AddRole extends Component {
    state = {
        title: '', 
        description: ''
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.addRole(this.state)
    }

    render(){
        console.log(this.props)
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title
                </label>
                <input type='text' value={this.state.title} name='title' onChange={this.handleChange}/>
                <label>
                    Description
                </label>
                <input type='text' value={this.state.description} name='description' onChange={this.handleChange}/>
                <button>Add Role</button>
            </form>
        )
    }
}



export default AddRole