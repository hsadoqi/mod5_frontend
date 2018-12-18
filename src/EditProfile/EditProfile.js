import './EditProfile'

import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]

let value 

class EditProfile extends Component {
    state = {
        public: false, 
        img: '', 
        pref: '',
        bio: '', 
        interests: [],
        facebook: '',
        twitter: '', 
        linkedIn: ''
    }

    handleChange = (e, { value }) => this.setState({ [e.target.name]: value })

    render(){
        console.log(this.state)
        return(
            <Form>
                  <Form.Group widths='equal'>
                    <Form.Input fluid label='Profile Image' placeholder='Profile Image' name='img' value={this.state.img}/>
                    <Form.Input fluid label='Last name' placeholder='Last name' />
                    <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
                  </Form.Group>
                  <Form.Group inline>
                    <label>Size</label>
                  </Form.Group>
                  <Form.TextArea label='About' placeholder='Tell us more about you...' />
                  <Form.Checkbox label='I agree to the Terms and Conditions' />
                  <Form.Button>Submit</Form.Button>
                </Form>
            
        )
    }
}

export default EditProfile