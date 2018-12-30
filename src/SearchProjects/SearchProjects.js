import './SearchProjects.css'
import React, {Component} from 'react'
import Filter from '../Filter/Filter'
// import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import {getAllProjects, filteredProjects} from '../store/actions/projectActions'
import {connect} from 'react-redux'

let projectsArray 
let filProjects

class SearchProjects extends Component {

    componentDidMount(){
        this.props.getAllProjects()
    }

    handleClick = (e) => {
        e.preventDefault()
        this.props.filteredProjects(e.target.innerText)
        console.log(this.props.filteredProjects)
    }

    render(){
        console.log(this.props.filProjects)
        return(
            <div className='search-collaborators'>
                <Filter handleClick={this.handleClick}/>
                {this.props.filProjects.length !== 0 ? <ProjectContainer projects={this.props.filProjects}/> : <ProjectContainer projects={this.props.projects}/>}
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
        filteredProjects: pref => dispatch(filteredProjects(pref))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchProjects)