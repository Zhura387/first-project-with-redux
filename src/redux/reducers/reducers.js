import { combineReducers } from 'redux'
import countReducer from './countReducer'
import textReducer from './textReducer'
import taskReduser from './taskReducer'

export default combineReducers({
    count: countReducer,
    text: textReducer,
    task: taskReduser,
})