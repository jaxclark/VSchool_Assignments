import React from 'react'
import {withProvider} from './ThemeProvider'

const Navbar = (props) => {
    return(
        <div className={props.on ? 'lightNav' : 'darkNav'}>
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
        </div>
    )
}

export default withProvider(Navbar)