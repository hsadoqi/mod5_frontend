const newProject = (project) => ({type: 'CREATE_PROJECT', payload: project})

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