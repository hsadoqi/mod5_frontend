const initialState = {
    apps: ''
}

const appReducer = (state = initialState, action) => {
    console.log(state)
    switch(action.type){
        case('GET_APPS'):
            return {...state, apps: action.payload}
        case('UPDATE_APP'):
            return {...state, apps: [...state.apps, action.payload]}
        default:
            return state
    }
}

export default appReducer