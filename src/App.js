import React, { useState, useEffect, useRef } from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading'
import Navbar from './components/Nav'

const Home = React.lazy(() => import('./components/Home'))
const Link1 = React.lazy(() => import('./components/Link1'))

export default function App() {
  return (
    <Router>
      <Navbar />
      <React.Suspense fallback = { <Loading /> }>
        <Switch>
          <Route exact path = '/' component = { Home } />
          <Route exact path = '/link1' component = { Link1 } />
          <Route render = {() => <h1>404 not found</h1> } />
        </Switch>
      </React.Suspense>
    </Router>
  )
}