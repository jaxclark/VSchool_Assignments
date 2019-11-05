import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar (){
    return(
        <div className='Navbar'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/services'>Services</Link>
        </div>
    )
}