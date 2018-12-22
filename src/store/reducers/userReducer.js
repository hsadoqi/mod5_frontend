const initialState = {
    user: {}
}

const reducer = (state = initialState, action) => {
    // console.log(action)
    // console.log(state.user)
    switch(action.type){
        case('LOGIN_USER'):
            return {...state, user: action.payload}
        case('UPDATE_USER'):
            return {...state, user: action.payload}
        // case('LOGOUT_USER'):
        //     return state = null
        // case('CURRENT_USER'):
        //     return state.user
        default:
            return state
    }
}

export default reducer