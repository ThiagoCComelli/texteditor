import { combineReducers } from 'redux'
import { notificationsInterface } from './reducers'

const allReducers = combineReducers({
    notifications: notificationsInterface
})

export default allReducers