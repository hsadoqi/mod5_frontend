import './DropDown.css'
import React, { Component } from 'react'
import {Dropdown} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

class DropDown extends Component {

    handleClick = (e) => {
        if(e.target.innerHTML === "Edit Profile"){
            this.props.history.push('/edit-profile')
        }
    }

    render(){
        return(
            <Dropdown>
                <Dropdown.Menu>
                    <Dropdown.Item text='Edit Profile' onClick={this.handleClick}/>
                    <Dropdown.Item text='Account' onClick={this.handleClick}/>
                    <Dropdown.Item text='Add Photo'onClick={this.handleClick}/>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}

export default withRouter(DropDown)