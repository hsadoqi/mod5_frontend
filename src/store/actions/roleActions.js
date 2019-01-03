const addRole = (role) => ({type: 'ADD_ROLE', payload: role})
const getRoles = (roles) => ({type: 'GET_ROLES', payload: roles})
const fillRoles = (role) => ({type: 'FILL_ROLE', payload: role})
const getAllApps =(apps) => ({type:'GET_APPS', payload: apps})
const rejectApp = (app) => ({type: 'REJECT_APP', payload: app})
const updateApp = (app) => ({type: 'UPDATE_APP', payload: app})
export const fixStuff = () => ({type:'FIX_STUFF'})


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

export const getApps = (role) => {
    return dispatch => {
        return fetch(`http://localhost:3000/roles/${role.id}`)
        .then(res => res.json())
        .then(role => {
            dispatch(getAllApps(role.applications))
        })
    }
}

export const updateApplication = (app) => {
    return(dispatch) => {
        return fetch(`http://localhost:3000/applications/${app.id}`, {
            method: 'PATCH', 
            headers: {
                'Content-type': 'application/json', 
                Accept: 'application/json'
            }, 
            body: JSON.stringify({approve: true})
        }).then(res => res.json())
        .then(app => {
            dispatch(updateApp(app))
        })
    }
}


export const rejectApplication = (app) => {

    return(dispatch) => {
        dispatch(rejectApp(app))
        return fetch(`http://localhost:3000/applications/${app.id}`, {
            method: 'DELETE'
        })
    }
}
