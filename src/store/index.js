import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import hobbitReducer from './reducers/hobbitReducer'
// import hogReducer from './reducers/hogReducer'
import userReducer from './reducers/userReducer'
import projectReducer from './reducers/projectReducer'

// const store = createStore(reducer)

const rootReducer = combineReducers({
  projects: projectReducer,
  user: userReducer
})

const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store
// export * from './actions/hobbitActions'
// export * from './actions/hogActions'