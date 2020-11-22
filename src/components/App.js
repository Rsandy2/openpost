<<<<<<< HEAD:src/components/App.js
import React, { useState, useEffect, useRef } from "react";
import Card from "./Card.js";

function App() {
  return <div className="App"></div>;
}
=======
import React, { useState, useEffect, useRef } from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading'
>>>>>>> main:src/App.js

const Home = React.lazy(() => import('./components/Home'))
const Quotes = React.lazy(() => import('./components/Quotes'))
const Create = React.lazy(() => import('./components/create-quote/Create'))

export default function App() {
  return (
    <Router>
      <React.Suspense fallback = { <Loading /> }>
        <Switch>
          <Route exact path = '/' component = { Home } />
          <Route exact path = '/quotes' component = { Quotes } />
          <Route exact path = '/create' component = { Create } />
          <Route render = {() => <h1>404 not found</h1> } />
        </Switch>
      </React.Suspense>
    </Router>
  )
}