import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../css/index.css'
import '../../css/nav.css'

export default function QuoteNavbar() {
    return (
        <nav className = 'nav row space-between'>
            <ul className = 'nav-create-content row'>
                <li>
                    <Link 
                        to = '/'
                        className = 'home-link'>
                        OpenWist
                    </Link>
                </li>
                <li className = 'nav-progress'>
                    <NavLink to = '/create/title' className = 'nav-link nav-progress-link' activeClassName = 'selected'>
                        TITLE
                    </NavLink>
                </li>
                <li className = 'nav-progress'>
                    <NavLink to = '/create/quote' className = 'nav-link' activeClassName = 'selected'>
                        QUOTE
                    </NavLink>
                </li>
                <li className = 'nav-progress'>
                    <NavLink to = '/create/image' className = 'nav-link' activeClassName = 'selected'>
                        IMAGE
                    </NavLink>
                </li>
                <li className = 'nav-progress'>
                    <NavLink to = '/create/final' className = 'nav-link' activeClassName = 'selected'>
                        FINAL
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}