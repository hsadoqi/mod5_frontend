import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
// import hobbitReducer from './reducers/hobbitReducer'
// import hogReducer from './reducers/hogReducer'
import userReducer from './reducers/userReducer'

// const store = createStore(reducer)

// const rootReducer = combineReducers({
//   hobbitInfo: hobbitReducer,
//   hogs: hogReducer
// })

const store = createStore(userReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store
// export * from './actions/hobbitActions'
// export * from './actions/hogActions'