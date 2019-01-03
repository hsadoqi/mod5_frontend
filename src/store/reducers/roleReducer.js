const initialState = {
    roles: []
}

const roleReducer = (state = initialState, action) => {
    // console.log(action)
    // console.log(state.user)
    // console.log(state.roles)
    switch(action.type){
        case('ADD_ROLE'):
            return {...state, roles: [...state.roles, action.payload]}
        case('GET_ROLES'):
            return {...state, roles: action.payload}
        case('FILL_ROLE'):
            return {...state, roles: [...state.roles, action.payload]}
        default:
            return state
    }
}

export default roleReducer