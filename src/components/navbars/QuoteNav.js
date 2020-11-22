import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../css/index.css'
import '../../css/nav.css'

export default function QuoteNavbar() {
    return (
        <nav className = 'nav row space-between'>
            <ul className = 'nav-create-content row'>
                <Link to = '/' className = 'home-link'>
                    <li>
                        <div className = 'create-link'>
                            OPENWIST
                        </div>
                    </li>
                </Link>
                <NavLink to = '/create/title' className = 'nav-link' activeClassName = 'selected'>
                    <li>
                        <div className = 'create-link'>
                            Title
                        </div>
                    </li>
                </NavLink>
                <NavLink to = '/create/quote' className = 'nav-link' activeClassName = 'selected'>
                    <li>
                        <div className = 'create-link'>
                            Quote
                        </div>
                    </li>
                </NavLink>
                <NavLink to = '/create/image' className = 'nav-link' activeClassName = 'selected'>
                    <li>
                        <div className = 'create-link'>
                            Image
                        </div>
                    </li>
                </NavLink>
                <NavLink to = '/create/final' className = 'nav-link' activeClassName = 'selected'>
                    <li>
                        <div className = 'create-link'>
                            Final
                        </div>
                    </li>
                </NavLink>
            </ul>
        </nav>
    )
}