import React from 'react'
import { Link } from 'react-router-dom'
import '../css/index.css'
import '../css/nav.css'

export default function Navbar() {
    return (
        <nav className = 'nav row space-between'>
            <ul className = 'row'>
                <li>
                    <Link 
                        to = '/'
                        className = 'home-link'>
                        OpenWist
                    </Link>
                </li>
                <li>
                    <Link
                        to = '/link1'
                        className = 'nav-link'>
                        Link 1
                    </Link>
                </li>
                <li>
                    <Link
                        to = '/link2'
                        className = 'nav-link'>
                        Link 2
                    </Link>
                </li>
                <li>
                    <Link
                        to = '/link3'
                        className = 'nav-link'>
                        Link 3
                    </Link>
                </li>
            </ul>
        </nav>
    )
}