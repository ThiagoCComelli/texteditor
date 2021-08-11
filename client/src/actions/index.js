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

export const putSocket = (socket) => {
    return {
        type: 'PUT_SOCKET.IO',
        payload: socket
    }
}

export const removeSocket = () => {
    return {
        type: 'REMOVE_SOCKET.IO'
    }
}