import './SearchProjects.css'
import React, {Component} from 'react'
import Filter from '../Filter/Filter'
// import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import {getAllProjects, filteredProjects, selectedProject} from '../store/actions/projectActions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class SearchProjects extends Component {

    componentDidMount(){
        this.props.getAllProjects()
    }

    handleClick = (e) => {
        e.preventDefault()
        this.props.filteredProjects(e.target.innerText)
        console.log(this.props.filteredProjects)
    }

    clickHandler = (e, project) => {
        console.log(project)
        e.preventDefault()
        this.props.selectedProject(project)
        this.props.history.push(`/projects/${project.id}`)
    }

    render(){
        console.log(this.props.filProjects)
        return(
            <div className='search-collaborators'>
                <Filter handleClick={this.handleClick}/>
                {this.props.filProjects && this.props.filProjects.length !== 0 ? <ProjectContainer projects={this.props.filProjects} handleClick={(e, project) => this.clickHandler(e, project)} /> : <ProjectContainer projects={this.props.projects} handleClick={(e, project) => this.clickHandler(e, project)}/>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects.projects, 
        filProjects: state.projects.filteredProjects
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllProjects: () => dispatch(getAllProjects()), 
        selectedProject: (project) => dispatch(selectedProject(project)),
        filteredProjects: pref => dispatch(filteredProjects(pref))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchProjects))