import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/createquote.css'

export default function CreateTitle({ onSubmit }) {
    const [title, setTitle] = React.useState('')

    const handleChange = (e) => setTitle(e.target.value)

    return (
        <div className = 'create-title-subpage'>
            <div className = 'container'>
                <div className = 'create-quote-input row'>
                    <input
                        type="text"
                        className = 'input-light'
                        placeholder = 'Quote Title'
                        value = { title }
                        onChange = { handleChange }
                        />
                    <Link className = 'submit-title-link' to = '/create/quote'>
                        <button className = 'btn' disabled = { !title } onClick = { onSubmit }>Submit</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}