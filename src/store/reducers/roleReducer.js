const initialState = {
    roles: [], 
    apps: [], 
    app: null
}

const roleReducer = (state = initialState, action) => {
    console.log(action)
    // console.log(state.user)
    // console.log(state.roles)
    switch(action.type){
        case('ADD_ROLE'):
            return {...state, roles: [...state.roles, action.payload]}
        case('GET_ROLES'):
            return {...state, roles: action.payload}
        case('FILL_ROLE'):
            return {...state, roles: [...state.roles, action.payload]}
        case('GET_APPS'):
        // apps gets erased & replaced -- ask how to fix it

            return {...state, apps: [...state.apps, action.payload ]}
        case('UPDATE_APP'):

            return {...state, app: action.payload}
        case('REJECT_APP'):
            // let app = state.apps.map((arr) => arr.find((app) => app.id === action.payload.id))
            // console.log(app)
            let array

            console.log(state)
            if(state.apps[0].role_id){
                const newapps = state.apps.find((arr) => arr.length !== 0 && arr[0].role_id === state.app.role.id)
                array = newapps.filter((app) => app.collaborator_id !== action.payload.collaborator_id)
                console.log('in reducer if', array)
            } else {
                array = state.apps.filter((app) => app.collaborator_id !== action.payload.collaborator_id)
                console.log('in reducer else', array)
            }
                
            // console.log(newapps)
            console.log(action.payload)
            // const array = newapps.filter((app) => app.collaborator_id !== action.payload.collaborator_id)
            console.log(array)
            // const newapps = state.apps.filter((app => app.id !== action.payload.id))
            return {...state, apps: array}
        case('FIX_STUFF'):
            return {...state, app: null}
        default:
            return state
    }
}

export default roleReducer