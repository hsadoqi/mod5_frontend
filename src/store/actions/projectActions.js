const newProject = (project) => ({type: 'CREATE_PROJECT', payload: project})
const selectProject = (project) => ({type: 'SELECT_PROJECT', payload: project})

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

