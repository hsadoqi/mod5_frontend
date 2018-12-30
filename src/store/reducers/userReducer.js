const initialState = {
    user: {}, 
    users: [], 
    selectedUser: '', 
    filUsers: []
}

const userReducer = (state = initialState, action) => {
    // console.log(action)
    // console.log(state.user)
    switch(action.type){
        case('LOGIN_USER'):
            return {...state, user: action.payload}
        case('UPDATE_USER'):
            return {...state, user: action.payload}
        case('GET_USERS'):
            return {...state, users: action.payload}
        case('SELECT_USER'):
            return {...state, selectedUser: action.payload}
        case('FILTER_USERS'):
            return {...state, filUsers: action.payload}
        // case('LOGOUT_USER'):
        //     return state = null
        // case('CURRENT_USER'):
        //     return state.user
        default:
            return state
    }
}

export default userReducer