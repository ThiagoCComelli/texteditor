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

export {notificationsInterface}