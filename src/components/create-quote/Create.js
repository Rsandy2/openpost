import React from 'react'
import { Switch, Route } from 'react-router-dom'
import QuoteNavbar from '../navbars/QuoteNav'
import '../../css/createquote.css'

const Input = React.lazy(() => import('./CreateQuoteInput'))
const VerifyQuote = React.lazy(() => import('./VerifyQuote'))

export default function Create() {
    const [title, setTitle] = React.useState("")
    const [quote, setQuote] = React.useState("")
    const [image, setImage] = React.useState("")

    console.log(`title: ${title}`)
    console.log(`quote: ${quote}`)
    console.log(`image url: ${image}`)

    const handleTitle = (title) => setTitle(title)
    const handleQuote = (quote) => setQuote(quote)
    const handleImage = (url) => setImage(url)

    return (
        <div className = 'create-quote-subpage'>
            <QuoteNavbar title = { title } content = { quote } url = { image } />
            <Switch>
                <Route path = '/create/title' render = {() => <Input type = 'Title' next = 'quote' message = "Enter your quote's title" onSubmit = { handleTitle } />} />
                <Route path = '/create/quote' render = {() => <Input type = 'Content' next = 'image' message = "Enter your quote's content" onSubmit = { handleQuote } />} />
                <Route path = '/create/image' render = {() => <Input type = 'Image' next = 'final' message = "Enter your quote's image URL" onSubmit = { handleImage } />} />
                <Route path = '/create/final' render = {() => <VerifyQuote title = { title } quote = { quote } image = { image } />} />
                <Route render = {() => <h1>404 not found</h1> } />
            </Switch>
        </div>
    )
}