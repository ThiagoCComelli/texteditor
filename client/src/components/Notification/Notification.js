import React from 'react'
import { useDispatch } from 'react-redux'
import { removeNotification } from '../../actions'
import './Notification.css'

export default function Notification({notification,id}) {
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(removeNotification({id:id}))
    }

    return (
        <div className="mainNotification" onClick={handleClose} onAnimationEnd={handleClose}>
            <div className="mainNotificationContent">
                <strong>{notification.title}</strong>
                <small>{notification.description}</small>
            </div>
            <span></span>
        </div>
    )
}
