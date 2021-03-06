import './EditProfile.css'

import React, { Component } from 'react'
// import { Form } from 'semantic-ui-react'
import {editProfile } from '../store/actions/userActions'
import { connect } from 'react-redux'

class EditProfile extends Component {
    state = {}

    componentDidMount(){
        this.setState({ user: this.props.user})
    }

    handleChange = (e) => {
        e.preventDefault()
        console.log(e.target)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateProfile(this.state, this.props.user.id)
    }

    handleClick = (e) => {
        e.preventDefault()
        let inputType = e.target.nextElementSibling.type 
        e.target.nextElementSibling.type = 'text'
        if(inputType === 'text'){
            e.target.nextElementSibling.type = 'hidden'
            e.target.innerHTML = 'Edit'
        } else if(inputType === 'hidden'){
            e.target.nextElementSibling.type = 'text'
            e.target.innerHTML = 'Hide'
        }
    }


    render(){
        console.log(this.props.user)
        console.log(this.state)
        
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Edit Profile</h1>
                <h3>Name</h3>
                <h4>{this.props.user.name}</h4><p onClick={this.handleClick}>Edit</p>
                <input type='hidden' name='name' placeholder='Name' value={this.state.name} onChange={this.handleChange}/>
                <h3>Profile Image</h3>
                <img src={this.props.user.img} alt=''/><p onClick={this.handleClick}>Edit</p>
                <input type='hidden' name='img' placeholder='Profile Image' value={this.state.img} onChange={this.handleChange}/>
                <h3>Facebook</h3>
                <h4>{this.props.user.facebook}</h4><p onClick={this.handleClick}>Edit</p>
                <input type='hidden' name='facebook' placeholder='Facebook' value={this.state.facebook} onChange={this.handleChange}/>
                <h3>Twitter</h3>
                <h4>{this.props.user.twitter}</h4><p onClick={this.handleClick}>Edit</p>
                <input  type='hidden' name='twitter' placeholder='Twitter' value={this.state.twitter} onChange={this.handleChange}/>
                <h3>LinkedIn</h3>
                <h4>{this.props.user.linkedin}</h4><p onClick={this.handleClick}>Edit</p>
                <input type='hidden' name='linkedin' placeholder='LinkedIn' value={this.state.linkedin} onChange={this.handleChange}/>
                <h3>Bio</h3>
                <h4>{this.props.user.bio}</h4><p onClick={this.handleClick}>Edit</p>
                <input type='hidden' name='bio' placeholder='About Me' value={this.state.bio} onChange={this.handleChange}/>
                <h3>First Preference</h3>
                <h4>{this.props.user.firstPreference}</h4>
                <div className='preferences'>
                <select name='firstPreference' className='preferences-options' onChange={this.handleChange}>
                    <option value='Photography'>Photography</option>
                    <option value='Theater'>Theater</option>
                    <option value='Music'>Music</option>
                    <option value='Performance'>Performance</option>
                    <option value='Art'>Art</option>
                    <option value='Dance'>Dance</option>
                </select>
                </div>
                <h3>Second Preference</h3>
                <h4>{this.props.user.secondPreference}</h4>
                <div className='preferences'>
                <select name='secondPreference' className='preferences-options' onChange={this.handleChange}>
                    <option value='Photography'>Photography</option>
                    <option value='Theater'>Theater</option>
                    <option value='Music'>Music</option>
                    <option value='Performance'>Performance</option>
                    <option value='Art'>Art</option>
                    <option value='Dance'>Dance</option>
                </select>
                </div>
                <h3>Third Preference</h3>
                <h4>{this.props.user.thirdPreference}</h4>
                <div className='preferences'>
                <select name='thirdPreference' className='preferences-options' onChange={this.handleChange}>
                    <option value='Photography'>Photography</option>
                    <option value='Theater'>Theater</option>
                    <option value='Music'>Music</option>
                    <option value='Performance'>Performance</option>
                    <option value='Art'>Art</option>
                    <option value='Dance'>Dance</option>
                </select>
                </div>
                <button className='submit-btn'>Update</button>
            </form>
            
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateProfile: (user, id) => dispatch(editProfile(user, id))
    }
}

export default connect(null, mapDispatchToProps)(EditProfile)