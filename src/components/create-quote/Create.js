import React from 'react'
import { Switch, Route } from 'react-router-dom'
import QuoteNavbar from '../navbars/QuoteNav'
import '../../css/createquote.css'

const Title = React.lazy(() => import('./CreateTitle'))

export default function Create() {
    const [title, setTitle] = React.useState("")
    const [quote, setQuote] = React.useState("")
    const [image, setImage] = React.useState("")

    const handleTitle = (e) => setTitle(e.target.value) 

    return (
        <div className = 'create-quote-subpage'>
            <QuoteNavbar />
            <Switch>
                <Route path = '/create/title' render = {() => <Title onSubmit = { handleTitle } />} />
                <Route render = {() => <h1>404 not found</h1> } />
            </Switch>
        </div>
    )
}