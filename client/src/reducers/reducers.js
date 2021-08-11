import {randomstring} from 'randomstring-js'

const notificationsInterface = (state = [], action) => {
    switch (action.type) {
        case 'PUT_NOTIFICATION':
            return [...state, {props: action.payload, id: randomstring()}]
        case 'REMOVE_NOTIFICATION':
            return state.filter((item) => item.id !== action.payload.id)
        default:
            return state
    }
}

const socketInterface = (state = null, action) => {
    switch (action.type) {
        case 'PUT_SOCKET.IO':
            return action.payload
        case 'REMOVE_SOCKET.IO':
            return null
        default:
            return state
    }
}

export {notificationsInterface,socketInterface}