const initialState = {
    project: '', 
    selectedProject: '', 
    projects: [], 
    filteredProjects: []
}


const projectReducer = (state = initialState, action) => {
    switch(action.type){
        case('CREATE_PROJECT'):
            return {...state, project: action.payload, projects: [...state.projects, action.payload]}
        case('SELECT_PROJECT'):
            return {...state, selectedProject: action.payload}
        case('GET_PROJECTS'):
            return {...state, projects: action.payload}
        case('FILTER_PROJECTS'):
            return {...state, filteredProjects: action.payload}
        default: 
            return state
    }
    
}

export default projectReducer