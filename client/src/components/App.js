import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Textpad from '../pages/Textpad/Textpad'
import Notification from './Notification/Notification'
import {useSelector, useDispatch} from 'react-redux'
import socketClient from 'socket.io-client'
import { putSocket } from '../actions'
import "./App.css"

export default function App() {
  const dispatch = useDispatch()
  const notifications = useSelector(state => state.notifications)

  useEffect(() => {
    dispatch(putSocket(socketClient('http://192.168.0.18:3100/')))
    // eslint-disable-next-line
  }, [])

  return (
    <>
    <div className="mainApp">
      <div className="mainAppNotifications">
        {notifications.map((notification) => {
          return <Notification key={notification.id} id={notification.id} notification={notification.props}/>
        })}
      </div>
      <Router>
          <Switch>
              <Route exact component={Home} path={"/"} />
              <Route exact component={Textpad} path={"/textpad/:textpadId"} />
          </Switch>
      </Router>
    </div>
    </>
  )
}
