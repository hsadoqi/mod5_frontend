const initialState = {
    project: ''
}


const projectReducer = (state = initialState, action) => {
    switch(action.type){
        case('CREATE_PROJECT'):
            return {...state, project: action.payload}
        default: 
            return state
    }
}

export default projectReducer