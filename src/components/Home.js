import React from 'react'
import HomeNavbar from './navbars/HomeNav'

export default function Home() {
    let carouselData = [
        {
            name: "Marilyn Monroe",
            image: ""
        }
    ]
    
    return (
        <div>
            <HomeNavbar />
            <div>Home</div>
        </div>   
    )
}