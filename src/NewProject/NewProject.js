import React, {Component} from 'react'
import './NewProject.css'
import {withRouter} from 'react-router-dom'
import {connect } from 'react-redux'
import { createProject } from '../store/actions/projectActions'

class NewProject extends Component {
    state = {
        title: '', 
        img: '', 
        description: '', 
        content: '', 
        category: '', 
        manager_id:''
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createProject({...this.state, manager_id: this.props.user.id})
        this.props.history.push('/homepage')
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title of Project
                </label>
                <input type='text' name='title' value={this.state.title} onChange={this.handleChange}/>
                <label>
                    Category
                </label>
                <input type='text' name='category' value={this.state.category} onChange={this.handleChange}/>
                <label>
                    Short Description
                </label>
                <input type='text' name='description' value={this.state.description} onChange={this.handleChange}/>
                <label>
                    Additional Content
                </label>
                <input type='text' name='content' value={this.state.content} onChange={this.handleChange}/>
                <label>
                    Image
                </label>
                <input type='text' name='img' value={this.state.img} onChange={this.handleChange}/>
                <button>
                    Create Project
                </button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}   

export default withRouter(connect(null, mapDispatchToProps)(NewProject))