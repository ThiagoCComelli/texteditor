import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Textpad from '../pages/Textpad/Textpad'
import Notification from './Notification/Notification'
import {useSelector} from 'react-redux'
import socketClient from 'socket.io-client'
import "./App.css"

export default function App() {
  const socket = socketClient('http://localhost:3100/') 
  const notifications = useSelector(state => state.notifications)
  
  const sendMessage = () => {
    socket.emit('message', 'message send from client')
  }

  useEffect(() => {
    socket.on("message", (message) => {
      console.log(message)
    })
  })

  return (
    <>
    <div className="mainApp">
      <div className="mainAppNotifications">
        {notifications.map((notification) => {
          return <Notification key={notification.id} id={notification.id} notification={notification.props}/>
        })}
      </div>
      <button onClick={sendMessage}>clica aqui</button>
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
