export const putNotification = (notification) => {
    return {
        type: 'PUT_NOTIFICATION',
        payload: notification
    }
}

export const removeNotification = (id) => {
    return {
        type: 'REMOVE_NOTIFICATION',
        payload: id
    }
}