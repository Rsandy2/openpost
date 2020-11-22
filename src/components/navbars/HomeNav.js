import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/index.css'
import '../../css/nav.css'

export default function HomeNavbar() {
    return (
        <nav className = 'nav row space-between'>
            <ul className = 'row'>
                <li>
                    <Link 
                        to = '/'
                        className = 'home-link'>
                        OPENWIST
                    </Link>
                </li>
                <li>
                    <Link
                        to = '/quotes'
                        className = 'nav-link'>
                        QUOTES
                    </Link>
                </li>
                <li>
                    <Link
                        to = '/create'
                        className = 'nav-link'>
                        CREATE A QUOTE
                    </Link>
                </li>
            </ul>
        </nav>
    )
}