const newProject = (project) => ({type: 'CREATE_PROJECT', payload: project})
const selectProject = (project) => ({type: 'SELECT_PROJECT', payload: project})
const filterProjects = (projects) => ({type: 'FILTER_PROJECTS', payload: projects})
const getProjects = (projects) => ({type: 'GET_PROJECTS', payload: projects})

export const createProject = (project) => {
    console.log(project)
    return (dispatch) => {
        return fetch(`http://localhost:3000/projects`, {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json', 
                Accept: 'application/json'
            }, 
            body: JSON.stringify({project: project})
        }).then(res => res.json())
        .then(res => {
            dispatch(newProject(res))
        })
        .catch(console.error)
    }
}

export const selectedProject = (project) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/projects/${project.id}`)
        .then(res => res.json())
        .then(res => {
            localStorage.setItem('project', JSON.stringify(res))
            dispatch(selectProject(res))
        })
        .catch(console.error)
    }
}

export const getAllProjects = () => {
    return dispatch => {
        return fetch(`http://localhost:3000/projects`)
        .then(res => res.json())
        .then(projects => dispatch(getProjects(projects)))
        .catch(console.error)
    }
}


export const filteredProjects = (pref) => {
    return dispatch=> {
        return fetch(`http://localhost:3000/projects`)
        .then(res => res.json())
        .then(projects => {
            console.log(projects)
            let filProjects = projects.filter(project => project.category === pref)
            console.log(filProjects)
            dispatch(filterProjects(filProjects))
        })
        .catch(console.error)
    }
}
