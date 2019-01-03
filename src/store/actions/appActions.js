const updateApp = (app) => ({type: 'UPDATE_APP', payload: app})
const getAllApps = (apps) => ({type: 'GET_APPS', payload: apps})

export const getApps = (role) => {
    return dispatch => {
        return fetch(`http://localhost:3000/roles/${role.id}`)
        .then(res => res.json())
        .then(role => {
            dispatch(getAllApps(role.applications))
        })
    }
}


export const updateApplication = (newInfo, app) => {
    return(dispatch) => {
        return fetch(`http://localhost:3000/applications/${app.id}`, {
            method: 'PATCH', 
            headers: {
                'Content-type': 'application/json', 
                Accept: 'application/json'
            }, 
            body: JSON.stringify({application: newInfo})
        }).then(res => res.json())
        .then(app => {
            dispatch(updateApp(app))
        })
    }
}