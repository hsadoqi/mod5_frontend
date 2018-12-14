const initialState = {
    user: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case('LOGIN_USER'):
            // console.log(state)
            return {...state, user: action.payload}
        // case('CURRENT_USER'):
        //     return state.user
        default:
            return state
    }
}

export default reducer