import { combineReducers } from 'redux'
import { notificationsInterface, socketInterface } from './reducers'

const allReducers = combineReducers({
    notifications: notificationsInterface,
    socket: socketInterface
})

export default allReducers