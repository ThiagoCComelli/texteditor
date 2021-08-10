import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import "./App.css"


export default function App() {
  return (
    <>
    <Router>
        <Switch>
            <Route exact component={Home} path={"/"} />
        </Switch>
    </Router>
    </>
  )
}
