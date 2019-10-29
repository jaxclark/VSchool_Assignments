import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return(
        <div style={{border: '2px solid black'}}>
            <Navbar />
            <h1>Clean Blog</h1>
            <h4>A Blog Theme by Start Bootstrap</h4>
        </div>
    )
}

export default Header