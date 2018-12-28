const initialState = {
    project: '', 
    selectedProject: ''
}


const projectReducer = (state = initialState, action) => {
    switch(action.type){
        case('CREATE_PROJECT'):
            return {...state, project: action.payload}
        case('SELECT_PROJECT'):
            return {...state, selectedProject: action.payload}
            
        default: 
            return state
    }
    
}

export default projectReducer