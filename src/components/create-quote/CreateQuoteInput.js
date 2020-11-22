import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/createquote.css'

export default function CreateQuoteInput({ type, next, message, onSubmit }) {
    const [content, setContent] = React.useState('')

    const handleChange = (e) => setContent(e.target.value)
    const handleSubmit = () => {
        onSubmit(content)
        setContent("")
    }

    return (
        <div className = 'create-quote-content-subpage'>
            <div className = 'container'>
                <div className = 'create-quote-input column'>
                    <h2 className = 'quote-input-label'>{ message }</h2>
                    <div className = 'row'>
                        <input
                            type="text"
                            className = 'input-light'
                            placeholder = { `Quote ${type}` }
                            value = { content }
                            onChange = { handleChange }
                            />
                        <Link className = 'submit-link' to = { `/create/${next}` }>
                            <button className = 'btn' disabled = { !content } onClick = { handleSubmit }>Submit</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}