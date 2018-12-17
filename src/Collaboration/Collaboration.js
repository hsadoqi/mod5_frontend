import React, { Component } from 'react'

class Collaboration extends Component {

    render(){
        console.log(this.props.user)
        return (
            <div>
                <h1>Welcome {this.props.user.name}</h1>
            </div>
        )
    }
}

export default Collaboration