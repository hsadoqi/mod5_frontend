const addRole = (role) => ({type: 'ADD_ROLE', payload: role})
const getRoles = (roles) => ({type: 'GET_ROLES', payload: roles})
const fillRoles = (role) => ({type: 'FILL_ROLE', payload: role})

export const getAllRoles = (project) => {
    return(dispatch) => {
        return fetch(`http://localhost:3000/projects/${project.id}`)
            .then(res => res.json())
            .then(project => {
                dispatch(getRoles(project.roles))
            })
    }
}

export const addNewRole = (project, roleInfo) => {
    return(dispatch) => {
        return fetch(`http://localhost:3000/roles`, {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json', 
                Accept: 'application/json'
            }, 
            body: JSON.stringify({title: roleInfo.title, description: roleInfo.description, project_id: project.id, filled: false})
        }).then(res => res.json())
        .then(role => {
            // console.log(role)
            dispatch(addRole(role))})
    }
}

export const fillRole = (role) => {
    return(dispatch) => {
        return fetch(`http://localhost:3000/roles/${role.id}`, {
            method: 'PATCH', 
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json'
            }, 
            body: JSON.stringify({filled: true})
        }).then(res => res.json())
        .then(role => {
            dispatch(fillRoles(role))
        })
    }
} 