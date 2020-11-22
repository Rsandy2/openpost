import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import QuoteNavbar from '../navbars/QuoteNav'
import Loading from '../Loading'
import '../../css/createquote.css'

const Title = React.lazy(() => import('./CreateTitle'))

export default function Create() {
    return (
        <div className = 'create-quote-subpage'>
            <QuoteNavbar />
            <Router>
                <React.Suspense fallback = { <Loading /> }>
                    <Switch>
                    <Route exact path = '/create/title' component = { Title } />
                    <Route render = {() => <h1>404 not found</h1> } />
                    </Switch>
                </React.Suspense>
            </Router>
        </div>
    )
}