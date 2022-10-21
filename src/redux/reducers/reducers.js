import { combineReducers } from 'redux'
import countReducer from './countReducer'
import textReducer from './textReducer'
import taskReduser from './taskReducer'
import titleReducer from './titleReducer'

export default combineReducers({
    count: countReducer,
    text: textReducer,
    task: taskReduser,
    title: titleReducer,
})