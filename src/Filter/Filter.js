import './Filter.css'
import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {filterUsers} from '../store/actions/userActions'

class Filter extends Component {

    render(){
        return(
            <div className='dropdown'>
                <button className='dropbtn'>Filter By Specialty</button>
                <div className='dropdown-content' onClick={this.props.handleClick}>
                    <a href='#'>Photography</a>
                    <a href='#'>Performance</a>
                    <a href='#'>Art</a>
                    <a href='#'>Music</a>
                    <a href='#'>Theater</a>
                    <a href='#'>Dance</a>
                </div>
            </div>
        )
    }
}


export default Filter